/* This is an updated version of the Python IPA Study Tool */

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
    "ʔ": "voiced glottal plosive",
    "ɹ": "voiced alveolar approximant",
    "j": "voiced palatal approximant",
    "l": "voiced alveolar lateral-approximant",
    "w": "voiced labial velar-approximant" 
};

const IPA_Sound_dict = { 
    "p": "[p]ut my shit back",
    "b": "[b]itch ass", 
    "t": "[t]ake yo ass to sleep", 
    "d": "[d]on't touch my shit", 
    "k": "[k]rackhead", 
    "g": "[g]ive me that fucking phone", 
    "m": "[m]ove [m]f", 
    "n": "[n]o dumbass", 
    "ŋ": "no you fucki[ng] dumbass", 
    "f": "[f]uck you", 
    "v": "[v]ery much no", 
    "θ": "you need [th]erapy", 
    "ð": "[th]e fuck",
    "s": "you a [s]nake",
    "z": "Mark [z]ukerberg is ugly", 
    "ʃ": "[sh]ut yo ass up", 
    "ʒ": "it is not a plea[z]ure to meet you ugly ass", 
    "h": "[h]ating ass mf", 
    "ʔ":"uh[]uh hell no",
    "ɹ": "[r]atio mf", 
    "j": "[y]ou're done", 
    "l": "[l]et me catch yo ass in my shit again", 
    "w": "[w]hy is you in my business?"                
};

const IPA_Sag = {
    "p": null, 
    "b": null, 
    "t": null, 
    "d": null, 
    "k": null, 
    "g": null, 
    "m": null, 
    "n": null, 
    "ŋ": null, 
    "f": null, 
    "v": null, 
    "θ": null, 
    "ð": null, 
    "s": null, 
    "z": null, 
    "ʃ": null, 
    "ʒ": null, 
    "h": null, 
    "ʔ": null, 
    "ɹ": null, 
    "j": null, 
    "l": null, 
    "w": null
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
    const symbols = Object.keys(IPA_English_dict);
    return symbols[Math.floor(Math.random() * symbols.length)];
}

function checkAnswer(symbol, parsed_dict, userVoicing, userPlace, userManner) {
    const correctAnswer = Object.values(parsed_dict[symbol]);
    const correctVoicing = correctAnswer[0];
    const correctPlace = correctAnswer[1];
    const correctManner = correctAnswer[2];

    return (userVoicing === correctVoicing) && (userPlace === correctPlace) && (userManner === correctManner);
}

function soundFind(symbol) { /* Pick a symbol, play its corresponding sound, user has to put voice, manner, and place */
    var sound = IPA_Sound_dict[symbol]; 
    return;
}

function sagittalFind(symbol) { /* Produce sagittal diagram and user puts voice, manner, and place */

    return IPA_English_dict[symbol]; 
}

/* once user gets it's wrong 3 times in a row, reveal the correct answer */
function correctReveal(wrongAttempts) {
    if (wrongAttempts >= 3) {
        return true; 
    } else {
        return false; 
    }
}

let currentSymbol;

function renderQuiz() {
    currentSymbol = getSymbol();
    const container = document.querySelector('.quiz-container');
    let wrongCheck = 0; 

    container.innerHTML = `
        <h2>${currentSymbol}</h2>
        <input type="text" id="voicing-input" placeholder="voicing">
        <input type="text" id="place-input" placeholder="place">
        <input type="text" id="manner-input" placeholder="manner">
        <button class="glass-button" id="submit-btn">Submit</button>
        <p id="feedback"></p>
    `;

    document.getElementById('submit-btn').addEventListener('click', () => {
        const userVoicing = document.getElementById('voicing-input').value.trim().toLowerCase();
        const userPlace = document.getElementById('place-input').value.trim().toLowerCase();
        const userManner = document.getElementById('manner-input').value.trim().toLowerCase();

        const isCorrect = checkAnswer(currentSymbol, parsedDict, userVoicing, userPlace, userManner);
        if (!isCorrect) {
            wrongCheck += 1; 
        }

        if (correctReveal(wrongCheck)) {
            document.getElementById('feedback').textContent = IPA_English_dict[currentSymbol]; 
        } else {
            document.getElementById('feedback').textContent = isCorrect ? "Correct" : "Not quite, try again.";
        }
        
        if (isCorrect) {
            setTimeout(renderQuiz, 1000);
        }
    });
}

renderQuiz();

