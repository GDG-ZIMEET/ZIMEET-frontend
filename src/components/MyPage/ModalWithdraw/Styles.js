import styled from 'styled-components';

// 모달 오버레이
export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5); 
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;


export const ModalContainer = styled.div`
  background-color: white;
  padding: 5%;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  width: 90%;
  align-items: center;
  text-align: center;
`;

export const BoldText = styled.p`
  font-weight: 700;
  font-size: 14px;
  padding: 2% 0 3% 0;
  font-family: Pretendard, sans-serif;
`;
export const Text = styled.p`
  font-size: 12px;
  padding: 2% 0 0 0;
  font-family: Pretendard, sans-serif;
`;
export const BoldUnderlineText = styled.span`
  font-weight: bold;
  text-decoration: underline;
  font-family: Pretendard, sans-serif;
`;

export const MNInput = styled.input`
  width: 100%; height: 100%;
  margin: 5% 0;
  padding: 3%;
  background-color: #f9fafb;
  border: 1px solid rgba(2, 32, 71, 0.05);
  border-radius: 0.6rem;
  font-size: 14px;

  &:focus {
    background-color: white;
    border: 1px solidrgb(27, 43, 64);
  }

  &:not(:placeholder-shown) {
    background-color: white;
    border: 1px solid #022047;
  }
`;


export const BtnContainer = styled.div`
  padding-top: 2%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const CancelBtn = styled.button`
  width: 28%;
  background-color: #f5f5f5;
  color: #a6a6a6;
  font-weight: 600;
  font-size: 16px;
  border-radius: 0.8rem;
  padding: 3.7%;
  font-family: Pretendard, sans-serif;
`;
export const SaveBtn = styled.button`
  width: 70%;
  font-weight: 600;
  font-size: 16px;
  padding: 3.5%;
  border-radius: 0.8rem;
  font-family: Pretendard, sans-serif;
  background-color: ${({ disabled }) => (disabled ? '#868686' : '#ea4335')};
  color: white;
`;

//에러메세지
export const ErrorMessage = styled.div`
  color: red;
  font-size: 12px;
  margin: -2.5% 0 6% 3%;
`;