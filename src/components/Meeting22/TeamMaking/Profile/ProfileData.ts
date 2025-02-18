export interface MyProfileData {
  isMe: boolean;
  avatar: string;
  nickname: string;
  age: number;
  Major: string;
  classNum: number;
  musicStyle: string;
  joinType?: string;
  mbti: string;
  style: string;
  idealType: string;
  preferredAge: string;
  grade: string;
  number: string;
}

export const Profiles: MyProfileData[] = [
  {
    isMe: true,
    avatar: '🌸',
    nickname: '벚꽃',
    age: 20,
    Major: '법학과',
    classNum: 25,
    musicStyle: '발라드',
    joinType: '3to3',
    mbti: 'ESFJ',
    style: '큐티',
    idealType: '공룡',
    preferredAge: '연상',
    grade: '2',
    number: '010-1234-5677',
  },
  {
    isMe: false,
    avatar: '🌷',
    nickname: '튤립',
    age: 20,
    Major: '법학과',
    classNum: 25,
    musicStyle: '발라드',
    mbti: 'ESFJ',
    style: '큐티',
    idealType: '공룡',
    preferredAge: '연상',
    grade: '2',
    number: '010-9041-4026',
  },
  {
    isMe: false,
    avatar: '🌹',
    nickname: '장미',
    age: 20,
    Major: '컴공',
    classNum: 24,
    musicStyle: '클래식',
    mbti: 'ISTJ',
    style: '큐티',
    idealType: '공룡',
    preferredAge: '연상',
    grade: '3',
    number: '010-1234-5678',
  },
];
