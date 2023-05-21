import styled from '@emotion/styled';

export const ContactFormWrapper = styled.form`
width: 100%;
height: 25%;
padding-top: 10px;
padding-bottom: 10px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 10px;
border: 1px solid rgb(51, 51, 51);
`;

export const FormLabel = styled.label`
font-size: 20px;
`;

export const FormInput = styled.input`
display: block;
width: 50%;
height: 20px;
bottom: 0.5px solid rgb(51, 51, 51);;
outline: transparent;
font-size: 14px;

:focus {
    transform: scale(1.2);
}
`;

export const FormButton = styled.button`
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