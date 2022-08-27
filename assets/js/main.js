
import { subscribeToFireBase } from "./firebase/hellfire.js";

const txtName = document.getElementById('txtName');
const txtEmail = document.getElementById('txtEmail');
const txtLevel = document.getElementById('txtLevel');
const txtCharacter = document.getElementById('txtCharacter');
const btnSubscribe = document.getElementById('btnSubscribe');

var mensagem = document.getElementById('mensagem');
var mensagem2 = document.getElementById('mensagem2');

btnSubscribe.addEventListener('click', async () =>{ //async para funções assincronas
        if(txtName.value === '' || txtEmail.value === '' || txtLevel.value === '' 
        || txtCharacter.value === '' ){
      
        mensagem.innerHTML = "<label>Preencha todos os campos</label>"
        mensagem2.innerHTML = '';
    }
        else{
            const subscription = { //adiciona os valores digitados dentro do formulário à constante subscription
                name: txtName.value,
                email: txtEmail.value,
                level: txtLevel.value,
                character: txtCharacter.value
            }
            //salvar no banco de dados
            const subId = await subscribeToFireBase(subscription); //await para executar um ação assincrona
            mensagem2.innerHTML = "<label>Cadastro Feito com sucesso</label>";
            mensagem.innerHTML = '';
                txtName.value ='';
                txtEmail.value = '';
                txtLevel.value = '' ;
                txtCharacter.value = '';
        }
      
})