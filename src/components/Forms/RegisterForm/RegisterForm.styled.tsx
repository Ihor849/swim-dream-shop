import styled from 'styled-components';

export const Form = styled.form`
  display: grid;
  gap: 10px;
  
`;
export const Label = styled.label`
  display: grid;
  /* grid-template-columns: 1fr 1fr; */
  gap: 5px;
  
  
`;
export const Input = styled.input`
  width: 200px;
  height: 40px;
  border-radius: 10px;
  border: 2px solid blue;
  background-color: #ffffff;
  padding: 10px;
`;

export const Select = styled.select`
display:flex;
justify-content: center;
align-items: center;
  width: 200px;
  height: 40px;
  border-radius: 10px;
  border: 2px solid blue;
  background-color: #ffffff;
  padding: 0 10px;
 
`;
export const TitleRadioBtn = styled.p`
margin: 0;
text-align: center;
`;
export const Option = styled.option`
/* display:flex;
justify-content: center;
align-items: center;
  width: 200px;
  height: 40px;
  border-radius: 10px;
  border: 2px solid blue;
  background-color: #c61010;
  padding: 0 10px; */
`;
export const WrpperRadioBtn = styled.div`
display:grid;
grid-template-columns:1fr 1fr;
gap:10px;
&>label{
  display:flex;
  gap:10px;
  justify-self: center;

}
&>label>input.radioBtn{
width: 20px;
height: 20px;

}
`;