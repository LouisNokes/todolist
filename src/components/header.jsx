import logo from '../logo.svg';
import React from 'react';

export const Header = () => {
    return (
        <header>
            <nav className='navbar navbar-expand-sm'>
                <a href='https://www.qa.com'
                    className="navbar-brand"
                    target="_blank"
                    rel="noopener noreferrer"></a>
                <img src={logo} alt='QA Ltd' style={{ width: '100px' }}></img>
                <a className="navbar-brand" href="/"></a>
                <h1>Todo App</h1></nav>
        </header>
    )
}
