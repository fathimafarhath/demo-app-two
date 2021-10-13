import React from 'react'
import styled from 'styled-components'
import Woman from '../img/Woman.jpg'
import AnimatedShapes from './AnimatedShapes'

const Container =styled.div`
    height: calc(100vh - 50px);
    display: flex;
    padding: 20px;
`
const Left =styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const Title =styled.h1`
    width: 60%;
    font-size: 60px;
`
const Desc =styled.p`
    width: 60%;
    font-size: 20px;
`
const Info =styled.div`
    width: 60%;
    margin-top: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const Button = styled.button`
    padding: 15px;
    background-color: crimson;
    color: white;
    border-radius: 10px;
    font-weight: bold;
    border: none;
    letter-spacing: 2px;

`
const Contact = styled.div`
    display: flex;
    flex-direction:column;
`
const Phone = styled.span`
    color: #f0667d;
    font-weight: bold;
`
const ConatctText = styled.span`
    color: gray;
    margin-top: 5px;
`

const Right =styled.div`
   width: 40%;
`
const Image =styled.img`
    
    width: 100%;
`

const Intro = () => {
    return (
    <Container>
        <Left><Title>Title here</Title>
            <Desc>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </Desc>
            <Info>
                <Button>START A PROJECT</Button>
                <Contact>
                    <Phone>Call us-987456321</Phone>
                    <ConatctText>For enquiry</ConatctText>
                </Contact>
            
            </Info>
        </Left>
        <Right><Image src={Woman} /></Right>
        <AnimatedShapes />

    </Container>
    )
}

export default Intro
