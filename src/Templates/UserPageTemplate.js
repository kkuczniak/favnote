/* eslint-disable linebreak-style */
/* eslint-disable react/require-default-props */
/* eslint-disable react/default-props-match-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import Sidebar from '../componets/organisms/Sidebar';

const UserPageTemplate = ({ children }) => (
  <>
    <Sidebar />
    {children}
  </>
);

UserPageTemplate.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]).isRequired,
};

UserPageTemplate.defaultProps = {
  pageTypes: 'notes',
};

export default UserPageTemplate;
