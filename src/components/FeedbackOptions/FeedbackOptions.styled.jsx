import styled from 'styled-components';
export const Button = styled.button`
  font-size: 20px;
  align-items: center;
  color: #758575;
  border: 1px solid;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    background-color: #88d36a;
  }
  /* margin-right: 10px; */
`;

export const ButtonContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
`;
