import React from "react";
import { Link } from 'react-router-dom'
import {NavbarSection, Logo, LogoText, Ulist, ListItem, Anchor, Input, Label} from './style'


const Navbar = () => {

    return (
        <NavbarSection>
            
            <div className="container navbar">
                
                <Logo>
                    <LogoText>Ultra Profile</LogoText>
                </Logo>
                
                <Input type="checkbox" id="nav" />
                <Label htmlFor="nav"></Label>
                
                <Ulist>
                    <ListItem><Link className="iXYjvU" to="/react-app1/">Home</Link></ListItem>
                    <ListItem><Anchor>Work</Anchor></ListItem>
                    <ListItem><Anchor>Portfolio</Anchor></ListItem>
                    <ListItem><Anchor>Resume</Anchor></ListItem>
                    <ListItem><Anchor>About</Anchor></ListItem>
                    <ListItem><Link className="iXYjvU" to="/contact">Contact</Link></ListItem>
                </Ulist>
                
            </div>
            
        </NavbarSection>
    )
}

export default Navbar