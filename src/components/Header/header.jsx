import React from 'react';
import classes from './header.module.scss'

function Header() {
    const {header, h1} = classes;
    const headerText = `Recognize a bird by its song`;
    
    return (
        <div className={header}>
            <h1 className={h1}>{headerText}</h1>
        </div>
    );
}

export default Header;
