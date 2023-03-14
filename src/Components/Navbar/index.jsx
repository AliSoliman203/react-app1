import React from "react";
import { Link } from 'react-router-dom'
import styled from "styled-components";
import {NavbarSection, Logo, LogoText, Ulist, ListItem, Anchor, Input, Label} from './style'


const Navbar = () => {

    const StyledLink = styled(Link)`
        display: block;
        color: #222;
        text-decoration: none;
        padding: 10px 15px;
        font-weight: bold;
        &:hover {
            color: #eb5424;
        }
    `

    return (
        <NavbarSection>
            
            <div className="container navbar">
                
                <Logo>
                    <LogoText>Ultra Profile</LogoText>
                </Logo>
                
                <Input type="checkbox" id="nav" />
                <Label htmlFor="nav"></Label>
                
                <Ulist>
                    <ListItem><StyledLink to="/react-app1/">Home</StyledLink></ListItem>
                    <ListItem><Anchor>Work</Anchor></ListItem>
                    <ListItem><Anchor>Portfolio</Anchor></ListItem>
                    <ListItem><Anchor>Resume</Anchor></ListItem>
                    <ListItem><Anchor>About</Anchor></ListItem>
                    <ListItem><StyledLink to="/contact">Contact</StyledLink></ListItem>
                </Ulist>
                
            </div>
            
        </NavbarSection>
    )
}

export default Navbar