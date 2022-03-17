
import styled from 'styled-components'
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import { Badge } from '@material-ui/core';
import {mobile} from "../responsive";
import {useSelector} from "react-redux"
import { Link } from "react-router-dom";


const Container = styled.div`
  height: 60px;
  ${mobile({height: "50px"})};
`

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between; 
  ${mobile({padding: "10px 0"})};
`
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({display: "none"})};
`
const SearchContainer = styled.div`
 border: 1px solid lightgray;
 display: flex;
 align-items: center;
 margin-left: 25px;
 padding: 5px; 
`
const Input = styled.input`
  border: none;
  ${mobile({width: "50px"})};
`

const Center = styled.div`
  flex: 2;
  text-align: center;
  ${mobile({flex: 1})};
`
const Logo = styled.h1`
  font-weight: bold;
  ${mobile({fontSize: "24px"})};
`

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({flex: 2, justifyContent: "center"})};
`
const MenuItems = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({fontSize: "12px", marginLeft: "10px"})};
`



export const Navbar = () => {
     
  const {quantity} = useSelector(state=>state.cart);
  
  return (
    <Container>
      <Wrapper>
        <Left>
            <Language>EN</Language>
            <SearchContainer>
                <Input placeholder="Search" />
                <Search style={{color: "gray", fontSize: "16px"}} />
            </SearchContainer>
        </Left>
        <Center>
            <Logo>SPIKE.</Logo>
        </Center>
        <Right>
            <MenuItems>REGISTER</MenuItems>
            <MenuItems>SIGN IN</MenuItems>
            <Link to="/cart">
              <MenuItems>
                  <Badge badgeContent={quantity} color="primary">
                      <ShoppingCartOutlined />
                  </Badge>
              </MenuItems>
            </Link>
        </Right>
      </Wrapper> 
    </Container>
  )
}
