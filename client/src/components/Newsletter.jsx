import { Send } from "@material-ui/icons";
import styled from "styled-components";
import {mobile} from "../responsive";

const Container = styled.div`
  display: flex;
  background-color: #fcf5f5;
  align-items: center;
  justify-content: center;
  height: 60vh;
  flex-direction: column;
`;

const Title = styled.h1`
   font-size: 70px;
   margin-bottom: 20px;
`;

const Desc = styled.p`
    font-size: 24px;
    font-weight: 300;
    margin-button: 20px;
    margin-bottom: 10px;
    ${mobile({textAlign: "center"})};
`;

const InfoContainer = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: white;
    width: 50%;
    height: 40px;
    border: 1px solid lightgray;
    ${mobile({width: "80%"})};
`;

const Input = styled.input`
   border: none;
   flex: 8;
   padding-left: 20px;
`;

const Button = styled.button`
   flex:1;
   border: none;
   background-color: teal;
   color: white;
`;


export const Newsletter = () => {
  return (
    <Container>
        <Title>Newsletter</Title>
        <Desc>Get timely update from your favourite products.</Desc>
        <InfoContainer>
            <Input placeholder="Your email" /> 
            <Button>
                <Send />
            </Button>
        </InfoContainer>
    </Container>
  )
}
