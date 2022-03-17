import { Facebook, Instagram, LocationOn, MailOutline, Phone, Pinterest, Twitter } from "@material-ui/icons";
import styled from "styled-components";
import {mobile} from "../responsive";

const Container = styled.div` 
   display: flex;
   ${mobile({flexDirection: "column"})};
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
    margin: 20px 0;
`;

const SocialIcon = styled.div`
    display: flex;
`;

const Icon = styled.div`
    width: 40px;
    height: 40px;
    color: white;
    background-color: #${props=>props.color};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 15px;
`;


const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({display: "none"})};
`;

const Title = styled.h3`
    margin-bottom: 30px;
`;

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none; 
    display: flex;
    flex-wrap: wrap;
`;

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px
`;

const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({backgroundColor: "#fff8f8"})};
`;



const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    
`;

const Payment = styled.img`
    width: 50%;
`;


 

export const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>SPIKE.</Logo>
            <Desc>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
             In tristique semper nulla sed condimentum. Donec tristique, 
             ipsum quis bibendum vulputate
            </Desc>
            <SocialIcon>
                <Icon color="3B5999">
                    <Facebook />
                </Icon>
                <Icon color="55ACEE">
                    <Twitter />
                </Icon>
                <Icon color="E4405F">
                    <Instagram />
                </Icon>
                <Icon color="E60023">
                    <Pinterest />
                </Icon>
            </SocialIcon>
        </Left>
        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Woman Fashion</ListItem>
                <ListItem>Man Fashion</ListItem>
                <ListItem>Accesories</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Terms</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem>
              <LocationOn style={{marginRight: "10px"}} />  Imenti House, Tom Mboya Street
            </ContactItem>
            <ContactItem>
               <Phone style={{marginRight: "10px"}} /> +254 712 345 678
            </ContactItem>
            <ContactItem>
               <MailOutline style={{marginRight: "10px"}} /> contact@spike.com
            </ContactItem>
            <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
        </Right>
    </Container>
  )
}
