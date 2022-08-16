import React from 'react'
import styled from 'styled-components'
import ProfileUp from './ProfileUp'
const Container = styled.div`
    background-color: ${({theme}) => theme.secondary};
    position: fixed;
    left: 0;
    right:0;
    top: 0;
    /* bottom: 0; */
    height: 9rem;
    display: flex;
    /* flex-direction: column; */
    /* align-items: center; */
    padding-left :2rem;
    padding-top: 1rem;
`

const SidebarUp = () => {
  return (
    <Container>
      <ProfileUp/>
    </Container>
  )
}

export default SidebarUp