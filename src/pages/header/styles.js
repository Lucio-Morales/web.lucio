import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const HeaderBox = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;

  @media (min-width: 768px) {
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    width: 80px;
    bottom: auto;
    left: 0;
    top: 0;
  }
`;

const Nav = styled.nav`
  //  background-color: ${(props) => props.theme.colors.background.primary};
  border-right: 1px solid grey;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100%;

  @media (min-width: 768px) {
    flex-direction: column;
    justify-content: center;
  }
`;

const NavItem = styled(NavLink)`
  color: grey;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  transition: all 0.3s ease;

  &:hover {
    background-color: rgba(169, 169, 169, 0.2);
    color: white;
  }

  &.active {
    color: white;
    font-weight: bold;
  }

  svg {
    font-size: 26px;
  }

  @media (min-width: 768px) {
    svg {
      font-size: 34px;
    }

    padding: 20px;
  }
`;

const ThemeButton = styled.button`
  all: unset;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border-radius: 50%;
  cursor: pointer;
  color: grey;
  transition: all 0.3s ease;

  &:hover {
    background-color: rgba(169, 169, 169, 0.2);
    color: white;
  }

  svg {
    font-size: 26px;
  }

  @media (min-width: 768px) {
    svg {
      font-size: 34px;
    }

    padding: 20px;
  }
`;

export { HeaderBox, Nav, NavItem, ThemeButton };
