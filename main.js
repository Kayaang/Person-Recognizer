Webcam.set({
width:270,
height:300,
image_format:"png",
png_quality:100
});

camera=document.getElementById("camera");

Webcam.attach("#camera");

function takeSnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='captured_image' src="+data_uri+">";
    });
}

console.log(ml5.version);

classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/GcQrFG94n/model.json",modelLoaded);

function modelLoaded(){
    console.log("model is loaded");
}

function check(){
    img=document.getElementById("captured_image");
    classifier.classify(img,gotResults);
}
function gotResults(error,results){
if (error){
    console.error(error);
}else{
    console.log(results);
    document.getElementById("Object_result").innerHTML="Person Name: "+results[0].label;
    document.getElementById("Accuracy_result").innerHTML="Confidence: "+results[0].confidence.toFixed(2);
}
}