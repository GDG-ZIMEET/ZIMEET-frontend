import React ,{ use, useEffect,useState} from 'react';
import * as S from './Styles';
import { getImageByEmoji, getRandomEmoji } from 'utils/IconMapper';
import { RandomNowResponseType } from 'recoil/type/Meeting/RandomNowType';
import Nopeople  from 'assets/icon/emoji/Nopeople.svg';
import { postrandomChatRoom } from 'api/Chatting/PostRandomChatRoom';

interface MakeTeamBoxProps {
  isRandomLoading: boolean;
  randomNowData: RandomNowResponseType | null; 
}

const MakeTeamBox: React.FC<MakeTeamBoxProps> = ({ isRandomLoading, randomNowData }) => {
  const [ randomchatRoomId, setRandomchatRoomId ] = useState<number | null>(null);

  useEffect(() => {
    if (!randomNowData) return;

    const femaleUsers = randomNowData.data.userList.filter(user => user.gender === 'FEMALE');
    const maleUsers = randomNowData.data.userList.filter(user => user.gender === 'MALE');

    // 6명(여자 3명, 남자 3명)이 다 찼는지 확인
    if (femaleUsers.length === 3 && maleUsers.length === 3) {
      const userIds = [...femaleUsers, ...maleUsers].map(user => user.userId);
      console.log("6명 채워짐, API 호출 시작. 유저 ID:", userIds);

      // 서버에 요청
      postrandomChatRoom({ ids: userIds })
        .then(response => {
          console.log("채팅방 생성 성공:", response);
          setRandomchatRoomId(response.data.randomChatRoomId);
        })
        .catch(error => {
          console.error("채팅방 생성 실패:", error);
        });
    }
  }, [randomNowData]);


  const femaleUsers = randomNowData?.data.userList.filter(user => user.gender === 'FEMALE');
  const maleUsers = randomNowData?.data.userList.filter(user => user.gender === 'MALE');

  const femaleTeam = [...(femaleUsers || []), ...Array(3 - (femaleUsers?.length || 0)).fill(null)].slice(0, 3);
  const maleTeam = [...(maleUsers || []), ...Array(3 - (maleUsers?.length || 0)).fill(null)].slice(0, 3);

  return (
    <S.MakeTeamLayout>
       <S.explainComponent>
         <S.line1 $isRandomLoading={!isRandomLoading}>친구도 얻고, 연인도 얻고!</S.line1>
         <S.Line2 $isRandomLoading={!isRandomLoading}>랜덤 미팅은 1인 신청으로 빠르게 참여!</S.Line2>
      </S.explainComponent>
      <S.GirlComponent>{isRandomLoading && '여자'}</S.GirlComponent>
      <S.TeamRow>
        {femaleTeam.map((user, index) => (
          <S.FirstPerson key={`female-${index}`}>
            {isRandomLoading? 
            <img src={user ? getImageByEmoji(user.emoji) : Nopeople} alt="female" style={user ? {} : { width: '40%' }} /> :
            <img src={getImageByEmoji(getRandomEmoji())}/>}
          </S.FirstPerson>
        ))}
      </S.TeamRow>
      {isRandomLoading ? <S.LoadingAfter /> :<S.LoadingBefore /> }
      <S.BoyComponent>{isRandomLoading && '남자'}</S.BoyComponent>
      <S.TeamRow>
        {maleTeam.map((user, index) => (
            <S.FourthPerson key={`male-${index}`}>
              {isRandomLoading? 
              <img src={user ? getImageByEmoji(user.emoji) : Nopeople} alt="male" style={user ? {} : { width: '40%' }}/> :
              <img src={getImageByEmoji(getRandomEmoji())}/>}
            </S.FourthPerson>
          ))}
      </S.TeamRow>
    </S.MakeTeamLayout>
  );
};

export default MakeTeamBox;
