import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components'
import Logo from '../assets/Logo.svg';

const HeaderContainer = styled.div`
    display: flex;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    border: 1px solid black;
    background-color: black;
`;

const HeaderLogo = styled.div`
    margin: auto 2rem;
`;

const HeaderRight = styled.div`
    margin-left: auto;
    margin-right: 0.5rem;
    padding: 1.7rem;
    font-size: 10pt;
`;

const Ul = styled.ul`
    display: flex;
    list-style: none;
`;

const Li = styled.li`
    margin: 0 1rem;
    color: white;
`;

const Img = styled.img`
    width: 8rem;
`;

const Header = () => {
    return (
        <HeaderContainer>
            {/* Header Left */}
            <HeaderLogo>
                <Link to='/'>
                    <Img src={Logo} alt='logo' />
                </Link>
            </HeaderLogo>

            {/* Header Right */}
            <HeaderRight>
                <Ul>
                    <Li>Introduce</Li>
                    <Li>Project</Li>
                    <Li>Application</Li>
                    <Li>Blog</Li>
                </Ul>
            </HeaderRight>
        </HeaderContainer>
    )
}

export default Header;