const video = document.getElementById('video');
const captureButton = document.getElementById('video');

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

      console.log(resizedDetections);
    }, 100);  
  });



  captureButton.addEventListener('click', () => {  
    // Pausar o vídeo  
    const stream = video.srcObject;  
    const tracks = stream.getTracks();  

    tracks.forEach(track => track.stop());  
    video.srcObject = null;  

    // Captura a imagem do vídeo  
    context.drawImage(video, 0, 0, canvas.width, canvas.height);  
    
    // Exibir a prévia da foto no canvas  
    canvas.style.display = 'block';  
});  

saveButton.addEventListener('click', () => {  
    const link = document.createElement('a');  
    link.href = canvas.toDataURL('image/png');  
    link.download = 'foto.png';  
    link.click();  
});  

