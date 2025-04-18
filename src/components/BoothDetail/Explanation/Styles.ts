import styled from 'styled-components';

export const ExplanationLayout = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  margin: 6% 0 0 0;
  font-family: Pretendard, sans-serif;
`;

export const ExplanationTitle = styled.h2`
  font-size: 14px;
  color: #000000;
  font-weight: bold;
  margin: 0 0 4% 3%;
`;

export const ExplanationContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Explanation = styled.p`
  font-size: 12px;
  color: #000000;
  margin: 0 3% 3% 3%;
  line-height: 1.6;
  white-space: pre-wrap;
`;