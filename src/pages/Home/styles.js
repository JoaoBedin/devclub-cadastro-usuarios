import styled from "styled-components";


 export const Title = styled.h2`
color: #ffff;
text-align: center;
font-size: 3rem;
font-style:normal;
font-weight: 900;
`

export const Container = styled.div `
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
height: 100vh;
background-color: #181f36;
padding: 20px;
`



export const ContainerInputs = styled.div `
display: flex;
gap: 5rem;
 
`
export const Input = styled.input `
border-radius: 10px;
border: none;
background-color: #fff;
padding: 12px 20px;
outline: none;
width: 100%;
font-weight: 500;
font-size: 1rem;
`
export const Form = styled.form `

display: flex;
flex-direction: column;
align-items: center;
gap: 20px;
max-width: 500px;
`

export const InputLabel = styled.label`
color: #ffffffff;
font-size: 0.9rem;
font-weight: 500;

span{
    color: red;
    font-weight: bold;
}
`
