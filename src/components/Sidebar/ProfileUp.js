import React from 'react'
import styled from 'styled-components'
import Image from '../../assets/images/profile.jpg'

const Container = styled.div`
  /* margin-top: 3rem; */
`
const ProfileImg = styled.img`
  height: 5rem;
`
const ProfileName = styled.h1`
    font-size: 0.8rem;
    font-weight: 400;
    text-align: center;
    color: ${({theme}) => theme.textColor};
`

const ProfileUp = () => {
  return (
    <Container>
        <ProfileImg src={Image} ></ProfileImg>
        <ProfileName>Cinereous vulture</ProfileName>
    </Container>
  )
}

export default ProfileUp