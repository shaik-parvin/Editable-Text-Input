import styled from 'styled-components'

export const AppContainer = styled.div`
display:flex;
justify-content:center;
align-items:center;
background-color:#f5d0fe;
height:100vh;
`
export const AppCard = styled.div`
background-color:#ffffff;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
padding:20px;
border-radius:10px;
`

export const Heading = styled.h1`
color:#000000;
font-family:"Roboto";
font-size:30px;
`
export const EditContainer = styled.div`
display:flex;
align-items:center;
`
export const Description = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 500;
  color: #323f4b;
  margin-right: 15px;
`
export const UserInput = styled.input`
 height: 50px;
 width:250px;
  border: 1px solid #cbd2d9;
  border-radius: 10px;
  padding: 5px;
  margin-right: 10px;
  outline: none;
  cursor: pointer;
`

export const Button = styled.button`
  height: 50px;
  width: 60px;
  border-radius: 8px;
  background-color: #d946ef;
  padding: 8px;
  border-width: 0px;
  border-style: solid;
  outline: none;
  cursor: pointer;
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 600;
  color: #ffffff;
`
