import { Container, Form, Title } from "./styles"
function Home() {
  

  return (

    
      
      <Container>
      <TopBackground>

      <img src="" alt="" />
      </TopBackground>

     
     <Form>
<Title>Cadastrar Usuários</Title>

<ContainerInputs>
<div>
  <div>
  <InputLabel>Nome <span>*</span></InputLabel>
<Input type="text" placeholder="Nome do usuário"> </Input>
</div>

<div>
  <InputLabel>Idade<span>*</span></InputLabel>
<Input type="number" placeholder="Idade do Usuário"> </Input>
</div>yarn run dev

<div>
 <InputLabel>Email<span>*</span></InputLabel>
<Input type="email" placaholder="Email do usuário"> </Input>
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