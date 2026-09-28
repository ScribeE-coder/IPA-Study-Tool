const IPA_English_dict = {
    "p": "voiceless bilabial plosive",
    "b": "voiced bilabial plosive",
    "t": "voiceless alveolar plosive",
    "d": "voiced alveolar plosive",
    "k": "voiceless velar plosive",
    "g": "voiced velar plosive",
    "m": "voiced bilabial nasal",
    "n": "voiced alveolar nasal",
    "ŋ": "voiced velar nasal",
    "f": "voiceless labiodental fricative",
    "v": "voiced labiodental fricative",
    "θ": "voiceless dental fricative",
    "ð": "voiced dental fricative",
    "s": "voiceless alveolar fricative",
    "z": "voiced alveolar fricative",
    "ʃ": "voiceless postalveolar fricative",
    "ʒ": "voiced postalveolar fricative",
    "h": "voiceless glottal fricative",
    "ʔ": "voiceless glottal plosive",
    "ɹ": "voiced alveolar approximant",
    "j": "voiced palatal approximant",
    "l": "voiced alveolar lateral-approximant",
    "w": "voiced labial velar-approximant"
};

function parse(input) {
    const parsed = {};
    for (const [symbol, desc] of Object.entries(input)) {
        const [voicing, place, manner] = desc.split(" ");
        parsed[symbol] = { voicing, place, manner };
    }
    return parsed;
}

const parsedDict = parse(IPA_English_dict);

function getSymbol() {
    const symbols = Object.keys(parsedDict); 
    return symbols[Math.floor(Math.random() * symbols.length)]; 
}

let currentSymbol = getSymbol(); 

function playthenGo(url) {
    const audio = new Audio('Button Click.mp3'); 
    audio.play().catch(() => {}); 
    audio.onended = () => window.location.href = url; 
}

function displaySagittalQuiz(symbolKey) {
    const diagram = document.getElementById("Sagittal-Diagrams"); 
    const fallbackText = document.getElementById("diagram-fallback"); 

    diagram.onload = () => {
        diagram.style.display = "block";
        fallbackText.style.display = "none";
    };
    
    diagram.onerror = () => {
        diagram.style.display = "none";
        fallbackText.style.display = "block";
    };
    diagram.src = `./Sagittal-Diagrams/${symbolKey}.png`;
}

function checkAnswer() {
    const userVoicing = document.getElementById("voicing-select").value;
    const userPlace = document.getElementById("place-select").value;
    const userManner = document.getElementById("manner-select").value;
    const feedback = document.getElementById("feedback-msg");

    const target = parsedDict[currentSymbol];
    const container = document.querySelector("quiz-container"); 

    container.innerHTML = `
        <h2>${currentSymbol}</h2>
        <input type="text" id="voicing-input" placeholder="voicing">
        <input type="text" id="place-input" placeholder="place">
        <input type="text" id="manner-input" placeholder="manner">
        <button class="glass-button" id="submit-btn">Submit</button>
        <p id="feedback"></p>
    `;


    if (userVoicing === target.voicing && userPlace === target.place && userManner === target.manner) {
        feedback.style.color = "#4CAF50";
        feedback.textContent = "Correct! Loading next diagram...";
        setTimeout(() => {
            feedback.textContent = "";
            document.getElementById("voicing-select").value = "";
            document.getElementById("place-select").value = "";
            document.getElementById("manner-select").value = "";
            
            currentSymbol = getSymbol();
            displaySagittalQuiz(currentSymbol);
        }, 1500);
    } else {
        feedback.style.color = "#f44336";
        feedback.textContent = `Incorrect. The correct answer for /${currentSymbol}/ is: ${target.voicing} ${target.place} ${target.manner}.`;
    }
}

// Start quiz when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
    displaySagittalQuiz(currentSymbol);
});
