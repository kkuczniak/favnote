/* eslint-disable linebreak-style */
/* eslint-disable react/require-default-props */
/* eslint-disable react/default-props-match-prop-types */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import withContext from 'hoc/withContext';
import plusIcon from 'assets/plus.svg';
import NewItemBar from 'componets/organisms/NewItemBar';
import UserPageTemplate from './UserPageTemplate';
import Input from '../componets/atoms/Input/Input';
import Heading from '../componets/atoms/Heading/Heading';
import Paragraph from '../componets/atoms/Paragraph/Paragraph';
import ButtonIcon from '../componets/atoms/ButtonIcon/ButtonIcon';

const StyledWrapper = styled.div`
  position: relative;
  padding: 25px 150px 25px 70px;
`;

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 85px;
`;

const StyledPageHeader = styled.div`
  margin: 25px 0 50px 0;
`;

const StyledHeading = styled(Heading)`
  margin: 25px 0 0 0;

  ::first-letter{
    text-transform: uppercase;
  }
`;

const StyledParagraph = styled(Paragraph)`
  margin: 0;
  font-weight: ${({ theme }) => theme.bold};
`;

const StyledButtonIcon = styled(ButtonIcon)`
  position: fixed;
  bottom: 40px;
  right: 40px;
  background-color: ${({ activeColor, theme }) => theme[activeColor]};
  background-size: 35%;
  border-radius: 50px;
  z-index: 10000;
`;

class GridViewTemplate extends Component {
  state = {
    isNewItemBarVisible: false,
  };

  toggleNewItemBar = () => {
    this.setState(prevState => ({
      isNewItemBarVisible: !prevState.isNewItemBarVisible,
    }));
  };

  render() {
    const { children, pageContext } = this.props;
    const { isNewItemBarVisible } = this.state;

    return (
      <UserPageTemplate>
        <StyledWrapper>
          <StyledPageHeader>
            <Input search placeholder="search" />
            <StyledHeading big as="h1">
              {pageContext}
            </StyledHeading>
            <StyledParagraph>
              6 {pageContext}
            </StyledParagraph>
          </StyledPageHeader>
          <StyledGrid>
            {children}
          </StyledGrid>
          <StyledButtonIcon
            onClick={this.toggleNewItemBar}
            icon={plusIcon}
            activeColor={pageContext}
          />
          <NewItemBar handleClose={this.toggleNewItemBar}  isVisible={isNewItemBarVisible} />
        </StyledWrapper>
      </UserPageTemplate>
    );
  }
}

GridViewTemplate.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
  pageContext: PropTypes.oneOf(['notes', 'twitters', 'articles']),
};

GridViewTemplate.defaultProps = {
  pageContext: 'notes',
};

export default withContext(GridViewTemplate);
