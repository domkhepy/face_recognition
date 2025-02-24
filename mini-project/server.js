const express = require('express');  
const multer = require('multer');  
const path = require('path');  

const app = express();  
const PORT = 3000;  

// Configuração do armazenamento do multer  
const storage = multer.diskStorage({  
    destination: (req, file, cb) => {  
        cb(null, 'uploads/');  
    },  
    filename: (req, file, cb) => {  
        cb(null, `${Date.now()}-${file.originalname}`);  
    }  
});  

const upload = multer({ storage });  

// Rota para upload de imagens  
app.post('/upload', upload.single('image'), (req, res) => {  
    res.send('Imagem salva com sucesso!');  
});  

// Rota para servir o arquivo HTML  
app.use(express.static('public'));  

// Iniciando o servidor  
app.listen(PORT, () => {  
    console.log(`Servidor rodando em http://localhost:${PORT}`);  
});  