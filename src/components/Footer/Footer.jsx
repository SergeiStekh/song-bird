import React from 'react';
import classes from './Footer.module.scss';

const Footer = () => {
  const {footer, inner_wrapper, produced, thanks} = classes;

  return (
    <div className={footer}>
      <div className={inner_wrapper}>
        <div className={produced}>
          <p>Sergei Stekh</p>
          <p>2020</p>
        </div>
        <div className={thanks}>
          <p>Thanks for illustrations: Icons8</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
