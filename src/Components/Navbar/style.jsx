import styled from 'styled-components'

export const NavbarSection =  styled.div`
    padding: 20px 0;
    overflow: hidden;
    background: #fff;
    position: relative;
    border-bottom: 1px solid #000
`

export const Logo = styled.div`
    width: 50%;
    float: left;

    @media (max-width : 991px) {
        width: 100%;
        float: none;
    }
`
export const LogoText = styled.h2`
    font-size: 30px;
    font-weight: bold
`

export const Input = styled.input`
    position: absolute;
    top: 13px;
    right: 25px;
    display: none;
    &:checked ~ ul {
        display: block;
    };
    :checked ~ label {
        background: url('images/close.png') no-repeat ;
        background-size: cover;
    }
`
export const Label = styled.label`
    position: absolute;
    top: 13px;
    right: 25px;
    display: block;
    width: 15px;
    height: 15px;
    background: url('images/open.png') no-repeat ;
    background-size: cover;
    padding: 20px;
    cursor: pointer;
    @media (min-width : 992px) {
        display: none;
    }
`

export const Ulist = styled.ul`
    width: 50%;
    float: left;
    list-style: none;

    @media (max-width : 991px) {
        width: 100%;
        float:  none;
        margin-top: 20px;
        display: none;
    }
`

export const ListItem = styled.li`
    display: inline-block;

    @media (max-width : 991px) {
        display: block;
        text-align: center;
    }
`
export const Anchor = styled.a`
    display: block;
    color: #222;
    text-decoration: none;
    padding: 10px 15px;
    font-weight: bold;

    &:hover {
        color: #eb5424
    }
`