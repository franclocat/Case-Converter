let upper = document.getElementById("upper-case");
let lower = document.getElementById("lower-case");
let proper = document.getElementById("proper-case");
let sentence = document.getElementById("sentence-case");

let textArea = document.getElementById("text");

upper.addEventListener("click", function () {
    textArea.value = textArea.value.toUpperCase();
})

lower.addEventListener("click", function () {
    textArea.value = textArea.value.toLowerCase();
})

proper.addEventListener("click", function () {
    const text = textArea.value;
    let words = text.split(" ");

    words.forEach((word, index) => {
        words[index] = makeFirstLetterUpperCase(word);
    });
    textArea.value = words.join(" ");
})

sentence.addEventListener("click", function () {
    const text = textArea.value;
    let sentences = text.split(". ");

    sentences.forEach((word, index) => {
        sentences[index] = makeFirstLetterUpperCase(word);
    });
    textArea.value = sentences.join(". ");
})


function makeFirstLetterUpperCase(wordOrSentence) {
    return wordOrSentence.charAt(0).toUpperCase() + wordOrSentence.slice(1);
}