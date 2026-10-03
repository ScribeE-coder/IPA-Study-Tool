const IPA_English_dict = {
    "p": {"voiceless bilabial plosive": "./Sagittal-Diagrams/p.png"},
    "b": {"voiced bilabial plosive": "./Sagittal-Diagrams/b.png"},
    "t": {"voiceless alveolar plosive": "./Sagittal-Diagrams/t.png"},
    "d": {"voiced alveolar plosive": "./Sagittal-Diagrams/d.png"},
    "k": {"voiceless velar plosive": "./Sagittal-Diagrams/k.png"},
    "g": {"voiced velar plosive": "./Sagittal-Diagrams/g.png"},
    "m": {"voiced bilabial nasal": "./Sagittal-Diagrams/m.png"},
    "n": {"voiced alveolar nasal": "./Sagittal-Diagrams/n.png"},
    "ŋ": {"voiced velar nasal": "./Sagittal-Diagrams/ŋ.png"},
    "f": {"voiceless labiodental fricative": "./Sagittal-Diagrams/f.png"},
    "v": {"voiced labiodental fricative": "./Sagittal-Diagrams/v.png"},
    "θ": {"voiceless dental fricative": "./Sagittal-Diagrams/θ.png"},
    "ð": {"voiced dental fricative": "./Sagittal-Diagrams/ð.png"},
    "s": {"voiceless alveolar fricative": "./Sagittal-Diagrams/s.png"},
    "z": {"voiced alveolar fricative": "./Sagittal-Diagrams/z.png"},
    "ʃ": {"voiceless postalveolar fricative": "./Sagittal-Diagrams/ʃ.png"},
    "ʒ": {"voiced postalveolar fricative": "./Sagittal-Diagrams/ʒ.png"},
    "h": {"voiceless glottal fricative":"./Sagittal-Diagrams/h.png"},
    "ʔ": {"voiceless glottal plosive": "./Sagittal-Diagrams/ʔ.png"},
    "ɹ": {"voiced alveolar approximant": "./Sagittal-Diagrams/ɹ.png"},
    "j": {"voiced palatal approximant": "./Sagittal-Diagrams/j.png"},
    "l": {"voiced alveolar lateral-approximant": "./Sagittal-Diagrams/l.png"},
    "w": {"voiced labial-velar approximant": "./Sagittal-Diagrams/w.png"}
};

parsed = parse(IPA_English_dict); 

function parse(input) {
    const parsed = {}; 
    for (const [symbol, dict] of Object.entries(input)) {
        for (const [desc, img] of Object.entries(dict)) {
            const[voicing, place, manner] = desc.split(" "); 
            parsed[symbol] = {voicing, place, manner, img}; 
        }
    }
    return parsed;
}

function getSymbol(dict) {
    const symbols = Object.keys(dict); 
    return symbols[Math.floor(Math.random() * symbols.length)]; 
}

function getDiagram(char) { /* pass in symbol and get its corresponding diagram */
    imgSrc = parsed[char].img; 
    return imgSrc; 
}

function correctReveal(wrongAttempts) {
    if (wrongAttempts >= 3) {
        return true; 
    } else {
        return false; 
    }
}

function checkAnswer(symbol, voice, place, manner) {
    if ((parsed[symbol]["voicing"] === voice) && (parsed[symbol]["place"] === place) && (parsed[symbol]["manner"] === manner)) {
        return true;
    } else {
        return false;
    }
}

function renderQuiz() { 
    var symbol = getSymbol(parsed); 
    /* getting img element from HTML file with that name, then assiging img element's source to img pathway so it can be displayed */
    const diagram = document.getElementById("Sagittal-Diagrams"); 
    diagram.src = getDiagram(symbol); 
    /* container is ID element who's innerHTML gets assigned to create the buttons users will use to type in answers */
    const container = document.getElementById("answer-area");
    let wrongChecker = 0; 

    /* creating the buttons for user input */
    container.innerHTML = `
        <input type="text" id="voicing-input" placeholder="voicing">
        <input type="text" id="place-input" placeholder="place">
        <input type="text" id="manner-input" placeholder="manner">
        <button class="glass-button" id="submit-btn">Submit</button>
        <p id="feedback"></p>
    `;
   
    document.getElementById('submit-btn').addEventListener('click', () => {
        const userVoice = document.getElementById('voicing-input').value.trim().toLowerCase(); 
        const userPlace = document.getElementById('place-input').value.trim().toLowerCase(); 
        const userManner = document.getElementById('manner-input').value.trim().toLowerCase(); 
        const isCorrect = checkAnswer(symbol, userVoice, userPlace, userManner); 
        
        if (!isCorrect) {
            wrongChecker += 1;
            if (correctReveal(wrongChecker)) {
                document.getElementById('feedback').textContent = `The correct answer is ${parsed[symbol]["voicing"] + " " + parsed[symbol]["place"] + " " + parsed[symbol]["manner"]}`; 
            } else {
                document.getElementById('feedback').textContent = isCorrect ? "That's correct!": "Not quite, try again.";
            }
        } else {
            /* If answer is correct move on to the next diagram */
            document.getElementById('feedback').textContent = "That's correct!"; 
            setTimeout(renderQuiz, 1000); 
        }
    })

    return null;  
}

renderQuiz(); 



