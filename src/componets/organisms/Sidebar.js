/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import withContext from 'hoc/withContext';
import ButtonIcon from '../atoms/ButtonIcon/ButtonIcon';
import bulbIcon from '../../assets/bulb.svg';
import logoutIcon from '../../assets/logout.svg';
import penIcon from '../../assets/pen.svg';
import twitterIcon from '../../assets/twitter.svg';
import logoIcon from '../../assets/logo.svg';

const StyledWrapper = styled.nav`
  position: fixed;
  display: flex;
  flex-direction: column;
  background-color: ${({ activeColor, theme }) => (activeColor ? theme[activeColor] : theme.note)};
  width:150px;
  height: 100vh;
  padding: 25px 0;
  left: 0;
  top: 0;
  justify-content: space-between;
  align-items:center;
`;

const StyledLogoLink = styled(NavLink)`
  display: block;
  width: 67px;
  height: 67px;
  background-image: url(${logoIcon});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 80%;
  border: none;
  margin-bottom: 10vh;
`;

const StyledLogooutButton = styled(ButtonIcon)`
  margin-top: auto;
`;
const StyledLinkList = styled.ul`
  margin: 0;
  padding:0;
  list-style: none;
`;

const Sidebar = ({ pageContext }) => (
  <StyledWrapper activeColor={pageContext}>
    <StyledLogoLink to="/" />
    <StyledLinkList>
      <li>
        <ButtonIcon as={NavLink} to="/notes" icon={penIcon} activeclass="active" />
      </li>
      <li>
        <ButtonIcon as={NavLink} to="/twitters" icon={twitterIcon} activeclass="active" />
      </li>
      <li>
        <ButtonIcon as={NavLink} to="/articles" icon={bulbIcon} activeclass="active" />
      </li>
    </StyledLinkList>
    <StyledLogooutButton as={NavLink} to="/login" icon={logoutIcon} />
  </StyledWrapper>
);

Sidebar.propTypes = {
  pageContext: PropTypes.oneOf(['notes', 'twitters', 'articles']),
};

Sidebar.defaultProps = {
  pageContext: 'notes',
};

export default withContext(Sidebar);
