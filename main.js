/* This is an updated version of the Python IPA Study Tool */

IPA_English_dict = {
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
}

IPA_Sound_dict = { 
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
}

function parse(input) {
    const parsed = {};
    for (const [symbol, desc] of Object.entries(input)) {
        const [voicing, place, manner] = desc.split(" ");
        parsed[symbol] = {voicing, place, manner};
    }
    return parsed;
}

parsedDict = parse(IPA_English_dict); 

// computer chooses an IPA symbol, user has to give correct place, manner, and voicing
// if user is not correct, computer should tell user where they went wrong 
function getSymbol() {
    const symbols = Object.keys(IPA_English_dict); 
    const symbol = symbols[Math.floor(Math.random() * symbols.length)]; // picking a random symbol from the list 
    return symbol; 
}

symbol = getSymbol();
var message = `What is voicing, place, and manner of articulation of this symbol? ${symbol} `;
var userInput = prompt(message); 
const [userVoicing, userPlace, userManner] = userInput.split(" ");

function checkAnswer(symbol, parsed_dict, userVoicing, userPlace, userManner) {
    var correctAnswer = parsed_dict[symbol]; 
    correctAnswer = Object.values(correctAnswer); 
    let correctVoicing = correctAnswer[0]; 
    let correctPlace = correctAnswer[1]; 
    let correctManner = correctAnswer[2]; 
    
    if ((userVoicing === correctVoicing) && (userPlace === correctPlace) && (userManner === correctManner)) {
        return true; 
    } else {
        return false; 
    }
}

console.log(checkAnswer(symbol, parsedDict, userVoicing, userPlace, userManner)); 

function soundFind() {
    return;
}

function sagittalFind() {
    return;
}

