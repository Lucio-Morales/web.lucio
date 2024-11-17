import {
  FiHome,
  FiUser,
  FiLayers,
  FiBriefcase,
  FiSun,
  FiMoon,
} from 'react-icons/fi';
import { HeaderBox, Nav, NavItem, ThemeButton } from './styles';
import { useState } from 'react';

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <HeaderBox>
      <Nav>
        <NavItem to="/home">
          <FiHome />
        </NavItem>
        <NavItem to="/about">
          <FiUser />
        </NavItem>
        <NavItem to="/projects">
          <FiLayers />
        </NavItem>
        <NavItem to="/services">
          <FiBriefcase />
        </NavItem>
        <ThemeButton onClick={toggleTheme}>
          {isDarkMode ? <FiSun /> : <FiMoon />}
        </ThemeButton>
      </Nav>
    </HeaderBox>
  );
};

export default Header;
