/* Produce sagittal diagram and user puts voice, manner, and place */

const IPA_English_dict = {
    "p": "voiceless bilabial plosive", /* p has pic */
    "b": "voiced bilabial plosive", /*b has pic */
    "t": "voiceless alveolar plosive", /*t has pic */
    "d": "voiced alveolar plosive", /*d has pic */
    "k": "voiceless velar plosive", /*k has pic */
    "g": "voiced velar plosive", /*g has pic*/
    "m": "voiced bilabial nasal", /*m has pic*/
    "n": "voiced alveolar nasal", /*n has pic*/
    "ŋ": "voiced velar nasal", /*n has pic */
    "f": "voiceless labiodental fricative", /*f has pic*/
    "v": "voiced labiodental fricative", /*v has pic */
    "θ": "voiceless dental fricative", /*theta has pic*/
    "ð": "voiced dental fricative", /*pic has been added*/
    "s": "voiceless alveolar fricative", /*s has pic*/
    "z": "voiced alveolar fricative", /*z has pic*/
    "ʃ": "voiceless postalveolar fricative",/*has pic*/
    "ʒ": "voiced postalveolar fricative", /*has pic*/
    "h": "voiceless glottal fricative", /*has pic*/
    "ʔ": "voiced glottal plosive", /*has pic*/
    "ɹ": "voiced alveolar approximant", /*has pic*/
    "j": "voiced palatal approximant", /*j has pic*/
    "l": "voiced alveolar lateral-approximant", /*l has pic*/
    "w": "voiced labial velar-approximant" /*w has pic*/
};

function parse(input) {
    const parsed = {};
    for (const [symbol, desc] of Object.entries(input)) {
        const [voicing, place, manner] = desc.split(" ");
        parsed[symbol] = {voicing, place, manner};
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