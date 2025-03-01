

// Função para obter os dados do user e a imagem capturada pelo usuário
document.getElementById('form').addEventListener('submit', function(event) {  
    event.preventDefault(); // Impede o envio padrão do formulário  

    const formData = new FormData(this); // 'this' refere-se ao formulário  

    const userName = formData.get('name');  
    const userEmail = formData.get('email');  
    const userPassword = formData.get('password')
    const userImage = formData.get('image')
    
    if (userImage) { 
        
        const newUser = new user(users);
        newUser.register(userName, userEmail, userPassword);
        newUser.getusers();
        console.log(newUser.users);
    } 

});  