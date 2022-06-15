import React from 'react';

import classes from './ErrorIndicator.module.scss'

const ErrorIndicator = () => {
  return (
    <div className={classes.error_indicator}>
      <span className={classes.boom}>Error!</span>
      <span>
        Something's wrong, the birds are flying south
      </span>
      <span>
        (But they will definitely be back in the spring)
      </span>
    </div>
  );
};

export default ErrorIndicator;
