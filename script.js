// Create a new SpeechSynthesisUtterance instance
const speech = new SpeechSynthesisUtterance();
let voices = [];
const voiceSelect = document.querySelector("select");
const playButton = document.querySelector("button");
const textArea = document.querySelector("textarea");

// Load available voices when they change
window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();

    // Populate the dropdown with available voices
    voiceSelect.innerHTML = voices
        .map((voice, i) => `<option value="${i}">${voice.name} (${voice.lang})</option>`)
        .join("");

    // Set the default voice
    if (voices.length > 0) {
        speech.voice = voices[0];
    }
};

// Change the speech voice based on the selected option
voiceSelect.addEventListener("change", () => {
    const selectedIndex = voiceSelect.value;
    if (voices[selectedIndex]) {
        speech.voice = voices[selectedIndex];
    }
});

// Play the text-to-speech when the button is clicked
playButton.addEventListener("click", () => {
    const text = textArea.value.trim();
    
    if (!text) {
        alert("Please enter some text to convert to speech.");
        return;
    }

    speech.text = text;
    window.speechSynthesis.speak(speech);
});
