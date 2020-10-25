import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const Header = () => (
    <nav className="header">
        <Link to="/" className="nav-logo-text">
            <h4 className="font-weight-500">
                Bootcamp DevSuperior
            </h4>
        </Link>
    </nav>
);

export default Header;