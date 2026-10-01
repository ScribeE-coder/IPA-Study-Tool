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

function renderQuiz() {
    
    return; 
}


