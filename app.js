// Voice to Text functionality
const startRecognitionBtn = document.getElementById("start-recognition");
const transcription = document.getElementById("transcription");

if ("webkitSpeechRecognition" in window) {
  const recognition = new webkitSpeechRecognition();
  recognition.continuous = false;
  recognition.interimResults = false;
  recognition.lang = "en-US";

  startRecognitionBtn.addEventListener("click", () => {
    recognition.start();
    transcription.innerHTML = "Listening...";
  });

  recognition.onresult = function (event) {
    const transcript = event.results[0][0].transcript;
    transcription.innerHTML = `You said: ${transcript}`;
  };

  recognition.onerror = function (event) {
    transcription.innerHTML = "Error occurred in recognition: " + event.error;
  };
} else {
  transcription.innerHTML =
    "Speech Recognition API not supported in this browser.";
}

const speakTextBtn = document.getElementById("speak-text");
const textToSpeak = document.getElementById("text-to-speak");

speakTextBtn.addEventListener("click", () => {
  const text = textToSpeak.value;
  if (text.trim() !== "") {
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
  }
});
