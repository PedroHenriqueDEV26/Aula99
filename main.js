var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
function start()
{
    document.getElementById("area").innerHTML = "";
    recognition.start()
}

recognition.onresult = function(event){

    var  content = event.results[0][0].transcript;
    document.getElementById("area").innerHTML = content;
    
    speak()
}

function speak(){
    var synth = window.speechSynthesis;
    speakData= document.getElementById("area").value;
    var utterThis = new SpeechSynthesisUtterance(speakData);
    synth.speak(utterThis);
    Webcam.attach( camera );
}

camera = document.getElementById("camera")

Webcam.set({
    width: 320,
    height: 240,
    image_format: 'jpeg',
    jpeg_quality: 90
});
