
const video = document.getElementById('video');
const captureButton = document.getElementById('captureButton');



Promise.all([
    faceapi.nets.tinyFaceDetector.loadFromUri('../models'),
    faceapi.nets.faceLandmark68Net.loadFromUri('../models'),
    faceapi.nets.faceRecognitionNet.loadFromUri('../models'),
    faceapi.nets.faceExpressionNet.loadFromUri('../models')
]).then(startVideo)

function startVideo(){
    navigator.getUserMedia(
        {video:{}},
        stream => video.srcObject = stream, 
        err => console.error(err)
    )
}

video.addEventListener("play", () => {  
    const canvas = faceapi.createCanvasFromMedia(video);  
    document.body.append(canvas);  
    const displaySize = { width: video.width, height: video.height };  
    faceapi.matchDimensions(canvas, displaySize);  
  
    setInterval(async () => {  
      const detections = await faceapi  
        .detectAllFaces(video, new faceapi.TinyFaceDetectorOptions())  
        .withFaceLandmarks()  
        .withFaceExpressions();  
  
      const resizedDetections = faceapi.resizeResults(detections, displaySize);  
      canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);  
      faceapi.draw.drawDetections(canvas, resizedDetections);  
      //faceapi.draw.drawFaceLandmarks(canvas, resizedDetections);  
      faceapi.draw.drawFaceExpressions(canvas, resizedDetections);  

      //console.log(resizedDetections);
    }, 100);  
  });



  captureButton.addEventListener('click', () => {  
  
    
        // Pausa o vídeo  
        video.pause();  

        // Define as dimensões do canvas  
        const canvas = faceapi.createCanvasFromMedia(video); 
        const context = canvas.getContext('2d'); 
        const preview = document.getElementById('preview'); 
        canvas.width = video.videoWidth;  
        canvas.height = video.videoHeight;  

        // Desenha o frame atual no canvas  
        context.drawImage(video, 0, 0, canvas.width, canvas.height);  

 // Converte o canvas em um Blob  
 canvas.toBlob((blob) => {  
  const file = new File([blob], "captura.png", { type: 'image/png' });  
  
  // Usando DataTransfer para atribuir o arquivo ao input  
  const dataTransfer = new DataTransfer();  
  dataTransfer.items.add(file);  
  preview.files = dataTransfer.files; // Atribui o arquivo ao input  
}, 'image/png');  
/*
        // Obtém a imagem como URL  
        const dataURL = canvas.toDataURL('image/png');  

        // Define a fonte da imagem de pré-visualização  
        preview.src = dataURL;  
        preview.style.display = 'block'; // Mostra a imagem  
console.log(dataURL);
      */
    });  

   /* saveButton.addEventListener('click', () => {  
        // Cria um link para baixar a imagem  
        const canvas = faceapi.createCanvasFromMedia(video); 
        const link = document.createElement('a');  
        link.href = canvas.toDataURL('template/png');  
        link.download = 'captura.png';  
        link.click();  
    });
*/



