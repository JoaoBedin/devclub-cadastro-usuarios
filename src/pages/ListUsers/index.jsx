import Button from '../../components/Button'
import { useNavigate } from 'react-router-dom'
import api from '../../services/api.js'
import { useEffect } from 'react'
import TopBackground from '../../components/TopBackground'


function ListUsers(){

useEffect(()=>{

async function getUsers(){
const usersFromApi = await api.get("/usuarios")
  console.log(usersFromApi.data)
  } 

getUsers()
 } , [])   


const navigate = useNavigate()




return(
<div>
<TopBackground />
<h1>Listagem de Usuários</h1>
<Button theme="primary" onClick={()=> navigate('/')}> Voltar</Button>
 
</div>


)

}

export default ListUsers