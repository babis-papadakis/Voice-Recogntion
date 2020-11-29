const btn = document.querySelector(".talk-btn");
const inputs = document.querySelector(".name-input");

let names = ["Ο Μπαμπάς", "Η Βιολέτα", "Η Στέλλα", "Η Μαμά", "Ο Μπάμπης"];
const speechRecognition = window.speechRecognition || window.webkitSpeechRecognition;
const element1 = document.getElementById("FirstName").innerText;
const element2 = document.getElementById("SecondName").innerText;

//Names input function
function go(){
    inputs.style.display = "none"
}
const recognition = new speechRecognition();

recognition.onstart = function() {
    console.log("voice activated")
}

recognition.onresult = function(event){
    const current = event.resultIndex;
    
    const transcript = event.results[current][0].transcript;
    readOutLoud(transcript);
}
//button listener
btn.addEventListener("click", ()=>{
    recognition.start();
})

//REad out

function readOutLoud(message){
    const speech = new SpeechSynthesisUtterance();
    const finalTxt =  names[Math.floor(Math.random()* names.length)];
    speech.text = finalTxt;
    speech.volume = 1;
    speech.rate = 0.2;
    speech.pitch =1;
    if(message.includes("Hello")){
        speech.text = "Γεια σου μωρή πουτάνα "
    }

    window.speechSynthesis.speak(speech);
}