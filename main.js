Webcam.set({
    width:300,
    height:300,
    image_format:"png",
    png_quality:90
})
Webcam.attach("#camera")

function capture(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='result_img' src='"+data_uri+"'>"
    })
}
console.log("ML5 version",ml5.version)
classifier= ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/kophugzk4/model.json",modelLoaded);
function modelLoaded(){
    console.log("model Is loaded")
}
function identify(){
    img=document.getElementById("result_img");
    classifier.classify(img,got_result);
}
function got_result(error,result){
    if(error){
        console.error(error)
    }
    else{console.log(result);
        document.getElementById("object_name").innerHTML=result[0].label;
       document.getElementById("accuracy").innerHTML=result[0].confidence.toFixed(2);
    }
}