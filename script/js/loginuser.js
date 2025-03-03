
userDetails = document.getElementById('userDetails');
info= document.getElementById('info');
let msgLogin= document.getElementById('msgLogin');
 
// Função para obter os dados do user e a imagem capturada pelo usuário
document.getElementById('formLogin').addEventListener('submit', function(event) {  
    event.preventDefault(); // Impede o envio padrão do formulário  

    const formData = new FormData(this); // 'this' refere-se ao formulário  

    //const userName = formData.get('name');  
    const userEmail = formData.get('email');  
    const userPassword = formData.get('password')
    //const userImage = formData.get('image')
        let userExists = users.find(user => user.email === userEmail && user.password === userPassword);
        

        if(userExists){
             
        
            async function compareImages(uploadedImage) {  
                const storedImage = document.getElementById('storedImage');  
        
                // Carregar as imagens  
                const uploadedDetection = await faceapi.detectSingleFace(uploadedImage).withFaceLandmarks();  
                const storedDetection = await faceapi.detectSingleFace(storedImage).withFaceLandmarks();  
        
                if (!uploadedDetection || !storedDetection) {  
                    console.log("Uma das imagens não contém uma face.");  
                    return false;  
                }  
        
                const uploadedFaceDescriptor = await faceapi.computeFaceDescriptor(uploadedImage);  
                const storedFaceDescriptor = await faceapi.computeFaceDescriptor(storedImage);  
        
                // Comparar as descrições  
                const distance = faceapi.round(faceapi.euclideanDistance(uploadedFaceDescriptor, storedFaceDescriptor));  
                return distance < 0.6; // Ajuste o limite conforme necessário  
            }  
        
            document.getElementById('upload').addEventListener('change', async (event) => {  
                const imageUpload = event.target.files[0];  
                const img = await faceapi.bufferToImage(imageUpload);  
                
                const result = await compareImages(img);  
                if (result) {  
                    console.log("Usuário autenticado!");  
                } else {  
                    console.log("Falha na autenticação.");  
                }  
            });  
        
            // Inicializar  
            loadModels();
            /** 
            userDetails.hidden=false;
            formLogin.hidden=true;
            info.innerHTML="<H2>Welcome back<br>"+userExists.name+"</H2><p>User Information</p>";
            info.innerHTML +="<span id='name'>Image:</span><br> <span id='name'>Nome: "+userExists.name+"</span><br><span id='name'>E-mail: "+userExists.email+"</span><br>";
           // const campos = document.querySelectorAll('#form input[type="text"]');  
           //campos.forEach(campo => campo.value = '');  */
        }else{
            msgLogin.innerHTML = "<div class='alert'>E-mail or Password invalid!</div>";
        }
});  