
let users = [{
name: 'Administrator',
email: 'admin@facerecognition.com',
password: 'admin25',
}];
const newUser = new user(users);
// Função para atualizar a lista de usuários exibida  
function atualizarLista() {  

    usuarios.forEach(usuario => {  
        const li = document.createElement('li'); // Cria um novo item de lista  
        li.textContent = usuario; // Define o texto do item como o nome do usuário  
        listaUsuarios.appendChild(li); // Adiciona o item à lista  
    });  
}  
// Função para obter os dados do user e a imagem capturada pelo usuário
document.getElementById('form').addEventListener('submit', function(event) {  
    event.preventDefault(); // Impede o envio padrão do formulário  

    const formData = new FormData(this); // 'this' refere-se ao formulário  

    const userName = formData.get('name');  
    const userEmail = formData.get('email');  
    const userPassword = formData.get('password')
    const userImage = formData.get('image')
    
    if (userImage) { 
        newUser.register(userName, userEmail, userPassword);
        console.log(newUser.getusers());    
        
    } 
users=[...newUser.getusers()];
});  