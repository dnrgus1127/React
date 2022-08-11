import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    /* 활성화된 메뉴 옆에 표시하는 CSS */
    border-left: 3px solid ${props => props.active ? props.theme.activeMenu : "transparent"};
    width: 100%;
    padding: 0.3rem;
    padding-left: 2rem;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 1rem;
    transition: 0.2s all ease-in-out;

    &:hover{
        background-color: rgba(0,0,0,0.1);
        /* color: #58528045; */
    };
`

const Icon = styled.span`
    font-size: 1rem;
    color: ${props => props.active ? props.theme.activeMenu : "AAA5A5"};
    margin-right: 1rem;

`

const Title = styled.h1`
    font-size: 1rem;
    color: ${props => props.active ? props.theme.activeMenu : "AAA5A5"};
    font-weight: 300;

`


const MenuItems = ({ title, active, icon }) => {
    return (
        <Container active={active}>
            <Icon active={active} className='iconify' data-inline="false" data-icon={`mdi-light:${icon}`}></Icon>
            <Title active={active}>{title}</Title>
        </Container>
    )
}

export default MenuItems