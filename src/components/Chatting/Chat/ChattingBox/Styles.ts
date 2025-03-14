import styled from 'styled-components';
import zimeetLoading from '../../../../assets/icon/zimeetLoading.svg';

export const ChattingBox = styled.div`
  position: relative;
  width: 100%;
  flex: 1;
  padding: 3%;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

export const LoadingContainer = styled.img.attrs({
  src: zimeetLoading
})`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 60%;
  margin: 0 auto;
`;

export const ExitMessageContainer = styled.div`
  display: flex;
  justify-content: center;
  font-size: 12px;
  color: #000;
  margin: 5% 0;
`;

export const MessageContainer = styled.div<{ $isMine: boolean }>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: ${({ $isMine }) => ($isMine ? 'flex-end' : 'flex-start')};
`;

export const Avatar = styled.div`
  height: 60%;
  margin-top: -2%;
  margin-right: 1%;
  align-items: center;
  justify-content: center;
  position: relative;
  display: flex;
  aspect-ratio:1;
  background-color: rgba(234, 67, 53, 0.08); 
  border-radius: 50%;
  img{
    width: 60%;}
`;

export const MessageContent = styled.div<{ $isMine: boolean; $isFirstOfGroup: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: ${({ $isMine }) => ($isMine ? 'flex-end' : 'flex-start')};
  max-width: 70%;
  margin-bottom: 1%;
  margin-top: ${({ $isMine, $isFirstOfGroup }) => (!$isMine && $isFirstOfGroup ? '5%' : '0')};
  margin-left: ${({ $isMine, $isFirstOfGroup }) => (!$isMine && $isFirstOfGroup ? '0' : '12%')};
`;

export const MessageUser = styled.strong`
  font-size: 12px;
  margin-bottom: 8px;
  color: #000;
`;

export const MessageText = styled.span<{ $isMine: boolean }>`
  display: inline-block;
  font-size: 14px;
  background-color: ${({ $isMine }) => ($isMine ? '#FF6B6A' : '#EFEFEF')};
  color: ${({ $isMine }) => ($isMine ? 'white' : 'black')};
  border-radius: 20px;
  padding: 10px;
  max-width: 100%;
  word-break: break-word;
  text-align: ${({ $isMine }) => ($isMine ? 'right' : 'left')};
  line-height: 1.5;
`;

export const MessagesEnd = styled.div`
  height: 1px;
`;
