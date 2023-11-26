let speech = new SpeechSynthesisUtterance();

let voice= [];
let voiceSelect =document.querySelector("select");


window.speechSynthesis.onvoiceschanged = () => {
voices = window.speechSynthesis.getVoices();
speech.voice=voice[0];


voices.forEach(
    (voice, i) =>(voiceSelect.options[i] = new option(voice.name, i))

);
};

voiceSelect.addEventListener("change", () =>{
    speech.voice = voice[voiceSelect.value];
});

document.querySelector("button").addEventListener("click", () =>{
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);

});
