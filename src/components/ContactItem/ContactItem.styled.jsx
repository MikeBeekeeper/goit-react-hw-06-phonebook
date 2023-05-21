import styled from '@emotion/styled';

export const Contact = styled.li`
width: 100%;
display: flex;
justify-content: space-between;
gap: 10px;
`;

export const ContactBtn = styled.button`
cursor: pointer;
background-color: transparent;
border: 1px solid rgb(51, 51, 51);

  :hover,
  :focus {
    transform: scale(1.2);
    background-color: rgb(204, 163, 241);
    color: white;
    border: 1px solid white;
  }
`;