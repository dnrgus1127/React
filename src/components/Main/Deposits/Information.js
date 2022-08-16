import React from 'react'
import styled from 'styled-components'

const Container =  styled.div`
    display: flex;
    padding: 0.4rem 1rem;
    background-color: ${({ theme }) => theme.secondary};
    margin: 2rem 0;
    border-radius: 5px;
    height: 14rem;
    box-shadow: 0px 0px 15px ${({theme})=> theme.shadowColor};
`

const Information = () => {
  return (
    <Container>Information</Container>
  )
}

export default Information