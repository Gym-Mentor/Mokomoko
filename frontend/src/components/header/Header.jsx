import React from 'react';
import { Navbar ,Container} from 'react-bootstrap';
import {VscBell} from 'react-icons/vsc';
import ProfileHambar from './ProfileHambar';
import '../../css/header/Header.css';

const Header = () => {
    return (
        <>
            <div className="header">
            <Navbar bg="light">
                <Container className="logo">
                    <Navbar.Brand href="/account/login"><img src="../../img/logo-back.png"/></Navbar.Brand>
                </Container>
                <VscBell/>
                <ProfileHambar/>
            </Navbar>
            </div>
        </>
    );
};

export default Header;