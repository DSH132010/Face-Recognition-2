//Geting The DOM Element And Declaring ModelUrl In Const

const camera = document.getElementById("camera");
const result = document.getElementById("result");
const object = document.getElementById("object");
const accuracy = document.getElementById("acurracy");
const model = '';


Webcam.set({
    width:350,
    height:250,
    image_format:'png',
    png_quality:90
});

Webcam.attach('#camera');

function take_snapshot() {
    Webcam.snap(data_uri => {
        result.innerHTML = '<img id="captured_image" class="capturedImage" src="' + data_uri + '"/>';    
        console.log("Succesfully Captured Image !!");
    });
}

console.log('ml5 version: ', ml5.version);
classifier = ml5.imageClassifier(model , modelLoaded);

function modelLoaded() {
    console.log('Model Loaded !');
}    

function check() {
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
    console.log(classifier);
    console.log(img);
}     

function gotResult(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        object.innerHTML = results[0].label;
        accuracy.innerHTML = results[0].confidence.toFixed(3);
    }    
}    



