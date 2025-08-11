import { Container, Form, Title, InputLabel, Button, Input, ContainerInputs, TopBackground  } from "./styles"

import UsersImage from '../src/assets/users.png'

function App() {
  

  return (

   
      
      <Container>
      <TopBackground>

      <img src={UsersImage}/>
      </TopBackground>

     
     <Form>
<Title>Cadastrar Usuários</Title>

<ContainerInputs>
<div>
  <div>
  <InputLabel>Nome <span>*</span></InputLabel>
<Input type="text" placeholder="Nome do usuário"/>
</div>

<div>
  <InputLabel>Idade<span>*</span></InputLabel>
<Input type="number" placeholder="Idade do Usuário"/>
</div>



<div>
 <InputLabel>Email<span>*</span></InputLabel>
<Input type="email" placeholder="Email do usuário"/> 
</div>

</div>
</ContainerInputs>
<Button> Cadastrar Usuário</Button>

     </Form>
        
      </Container>
         
 
 )
}

export default App

/*  Exportar "Padrão"
    Apenas Exportar
*/