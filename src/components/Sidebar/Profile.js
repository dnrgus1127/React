import React from 'react'
import styled from 'styled-components'
import Image from '../../assets/images/profile.jpg'

const Container = styled.div`
  margin-top: 5rem;
`
const ProfileImg = styled.img`
  height: 6rem;
`
const ProfileName = styled.h1`
    font-size: 1rem;
    font-weight: 300;
    text-align: center;
    color: ${({theme}) => theme.textColor};
`

const Profile = () => {
  return (
    <Container>
        <ProfileImg src={Image} ></ProfileImg>
        <ProfileName>Cinereous vulture</ProfileName>
    </Container>
  )
}

export default Profile