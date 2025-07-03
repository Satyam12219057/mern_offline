
const textHelper=require('./text-formeter.js')
function formatParagraph(text) {
    const sentences = text.split(".");
    const capitalizedSentences = sentences.map((sentence) => {
        return textHelper.getCapitalizedText(sentence);
    });
    return capitalizedSentences.join(".\n");
}
 module.export={
    formatParagraph:formatParagraph
 }