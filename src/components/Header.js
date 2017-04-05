import React, { PropTypes } from 'react';

const Header = ({ message }) => {
  return (
    <h2 className='text-center'>
      {message}
    </h2>
  );
};

Header.propTypes = {
  message: PropTypes.string.isRequired
};

export default Header;

