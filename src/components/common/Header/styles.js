import styled from "styled-components";
import { Cart as CartIcons } from 'styled-icons/boxicons-regular';

export const Header = styled.header`
  width: 100%;
  height: 80px;
  max-height: 80px;
  @media (max-width: 768px) {
    height: auto;
    max-height: fit-content;
    padding: 5px;
  }
`;

export const Wrapper = styled.div`
  max-width: 1440px;

  padding: 0 20px;
  margin: 0 auto;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: inherit;
`;
export const WrapperLeft = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 40%;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Logo = styled.div`
  width: 46%;
  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
    margin: 10px 0;
  }
`;
export const Menu = styled.nav`
  width: 54%;

  ul {
    display: flex;
    justify-content: space-between;
    list-style: none;
    li a {
      text-decoration: none;
      color: var(--black);
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
export const WrapperRight = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 30%;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: flex-end;
  }
`;

export const Login = styled.div`
  a {
    text-decoration: none;
    color: var(--color-black);
  }

  @media (max-width: 768px) {
    padding: 5px;
  }
`;
export const Cart = styled.div`
  @media (max-width: 768px) {
    padding: 5px;
  }
`;

export const CartIcon = styled(CartIcons)`
  width: 25px;
  height: 25px;
  color: var(--color-black);
`