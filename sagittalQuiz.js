/* Produce sagittal diagram and user puts voice, manner, and place */

const IPA_English_dict = {
    "p": "voiceless bilabial plosive", /* p has pic */
    "b": "voiced bilabial plosive", /*b has pic */
    "t": "voiceless alveolar plosive", /*t has pic */
    "d": "voiced alveolar plosive", /*d has pic */
    "k": "voiceless velar plosive", /*k has pic */
    "g": "voiced velar plosive", /*g has pic*/
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

function parse(input) {
    const parsed = {};
    for (const [symbol, desc] of Object.entries(input)) {
        const [voicing, place, manner] = desc.split(" ");
        parsed[symbol] = { voicing, place, manner };
    }
    return parsed;
}

const parsedDict = parse(IPA_English_dict);

function getDiagram() {
    return; 
}

function sagittalFind(symbol) { 
    return IPA_English_dict[symbol]; 
}