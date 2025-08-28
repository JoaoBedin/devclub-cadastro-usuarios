import {useRef} from 'react'
import api from '../../services/api.js'
import { Container, Form, Title, InputLabel, Input, ContainerInputs } from "../Home/styles.js"
import { useNavigate } from 'react-router-dom'
import Button from '../../components/Button'
import TopBackground from '../../components/TopBackground'







function Home() {
       
const inputName = useRef()
const inputAge = useRef()
const inputEmail = useRef()

const navigate = useNavigate()


async function registerNewUser() {

 const data = await api.post("/usuarios" , {
  email: inputEmail.current.value,
  age: parseInt(inputAge.current.value),
  name: inputName.current.value
})
console.log(data)


}

  return (

  
      
      <Container>

      <TopBackground />
     <Form>
<Title>Cadastrar Usuário</Title>

<ContainerInputs>
  
  <div>
  <InputLabel>Nome <span>*</span></InputLabel>
<Input type="text" placeholder="Nome do usuário" ref={inputName}/>
</div>

<div>
  <InputLabel>Idade <span>*</span></InputLabel>
<Input type="number" placeholder="Idade do Usuário" ref={inputAge}/>
</div>
</ContainerInputs>


<div style={{width: "100%"}}>
 <InputLabel>Email <span>*</span></InputLabel>
<Input type="email" placeholder="Email do usuário" ref={inputEmail}/> 
</div>


<Button type="button" onClick={registerNewUser} theme="primary">
  Cadastrar Usuário</Button>




     </Form>
        
<Button type="button" onClick={ ()=> navigate('/lista-de-usuarios')}> Ver lista de usuários</Button>

      </Container>
         
 
 )
}


export default Home
/*  Exportar "Padrão"
    Apenas Exportar
*/