import React from 'react'
import styled from 'styled-components'
import Nav from './Nav'
import NewDespositBtn from './NewDespositBtn'
import Deposits from './Deposits/Deposits'


const Container = styled.div`
  width: auto;
  margin-left: 16rem;
  position: relative;
  padding: 0 4rem;
`

const Main = () => {
  return (
    <Container>
        <Nav/>
        <NewDespositBtn/>
        <Deposits title="Deposits" count={2} data={2}/>
        <Deposits title="Deposits" count={8} data={2}/>
        
    </Container>
  )
}

export default Main