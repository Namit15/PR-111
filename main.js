prediction_1 = "";
prediction_2 = "";

Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

function takesnapshot()
{
    Webcam.snap(function(data_uri)
    {
        document.getElementById("result").innerHTML='<img id="capture_image" src="'+data_uri+'">';
    });
}

console.log("ml5 version - ",ml5.version);
Classifier=ml5.imageClassifier('https://storage.googleapis.com/tm-model/hwLR0TTK2/model.json',modelLodded);

function modelLodded()
{
    console.log("Your model is lodded");
}

function speak()
{
    var synth = window.speechSynthesis;
    speak_data1 = "The first Prediction is"+prediction_1;
    speak_data2 = "The second Prediction is"+prediction_2;
    var utterThis=new SpeechSynthesisUtterance(speak_data1+speak_data2);
    synth.speak(utterThis);
}

function check()
{
    
}