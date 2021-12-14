function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/TbXEbg3S9/model.json',modelReady);
}
function modelReady(){
    classifier.classify(gotResults);
}
var bark=0;
var meow=0;
var roar=0;
var chirp=0;

function gotResults(error , results){
if(error){
    console.error(error);
}
else{
    console.log(results);

    random_number_r=Math.floor(Math.random()*255) +1;
    random_number_g=Math.floor(Math.random()*255) +1;
    random_number_b=Math.floor(Math.random()*255) +1;

    document.getElementById("result_label").innerHTML="Detected Dog- " + bark +"Detected Cat- " + meow +"Detected Lion- " + roar +"Detected Bird- " + chirp ;
    document.getElementById("result_label").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

    document.getElementById("result_audio").innerHTML="Detected Voice is of- " + results[0].label;
    document.getElementById("result_audio").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

    img=document.getElementById("animal_img");

    if (results[0].label == "barking"){
        img.src="bark.gif";
        bark=bark+1;
    }
    else if (results[0].label == "meowing"){
        img.src="meow.gif";
       meow=meow+1;
    }
    else if (results[0].label == "roaring"){
        img.src="roar.gif";
       roar=roar+1;
    }
    else if (results[0].label == "chirping"){
        img.src="chirp.gif";
       chirp=chirp+1;
    }
    else{
        img.src="listen.gif";
    }
}
}