import React from 'react'
import styled from 'styled-components'
import SortingBar from './SortingBar'


const Title = styled.h1`
    font-weight: 500;
    color: ${({theme})=> theme.textCol};
    font-size: 1.3rem;
    display: flex;
    align-items: center;
`

const DepositsCount = styled.div`
    margin-left: 1rem;
    font-size : 1rem;
    background-color : ${({theme})=> theme.header};
    color : ${({theme}) => theme.headerNumber};
    width: 28px;
    height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    
`
const Deposits = ({title, count, data}) => {
  return (
    <div>
        <Title>{title}<DepositsCount>{count}</DepositsCount></Title>
        <SortingBar>
           
        </SortingBar>
    </div>
  )
}

export default Deposits