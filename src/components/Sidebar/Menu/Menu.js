import React from 'react'
import styled from 'styled-components'
import MenuItems from './MenuItems'

const Container = styled.div`
    margin-top: 2rem;
    width: 100%;
`



const Menu = () => {
  return (
    <Container>
        <MenuItems title="Home" icon="home"  />
        <MenuItems title="Deposite" icon="file-multiple" active />
        <MenuItems title="OFFERS" icon="gift"  />
        <MenuItems title="PAYMENTS" icon="bank" />
        <MenuItems title="SETTINGS" icon="cog" />
    </Container>
  )
}

export default Menu