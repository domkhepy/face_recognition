const { getRandomValues } = require('crypto');
const express = require('express');  
const multer = require('multer');  
const fs = require('fs'); 
const path = require('path');  

const app = express();  
const PORT = 3000;  


// Configuração do armazenamento do multer  
const storage = multer.diskStorage({  
    destination: (req, file, cb) => {  
        const uploadPath = path.join(__dirname, 'uploads', id); // 'id' deve ser definido antes ou passado como parâmetro  
    
        // Verifica se a pasta existe, se não existir, cria a pasta  
        fs.mkdir(uploadPath, { recursive: true }, (err) => {  
          if (err) {  
            return cb(err);  
          }  
          cb(null, uploadPath);  
        });  
      },  
      filename: (req, file, cb) => {  
        console.log(file);  
        cb(null, `${Date.now()}-${file.originalname}`);  
      }  
});  

const upload = multer({ storage });  

// Serve static files from 'script/js' directory  
app.use('/script/js', express.static(path.join(__dirname, 'script/js')));  

// Serve static files from 'models' directory  
app.use('/models', express.static(path.join(__dirname, 'models')));  

// Rota para upload de imagens  
app.post('', upload.single('image'), (req, res) => {  
    res.redirect('/'); 
    console.log[users]; 
});  

// Serve static files from 'script/js' directory  
app.use('/script/js', express.static(path.join(__dirname, 'script/js')));  

// Serve static files from 'models' directory  
app.use('/models', express.static(path.join(__dirname, 'models')));  

// Rota para servir o arquivo HTML  
app.use(express.static('public'));  

// Iniciando o servidor  
app.listen(PORT, () => {  
    console.log(`Servidor rodando em http://localhost:${PORT}`);  
});  

