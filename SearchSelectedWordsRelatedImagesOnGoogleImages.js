javascript: var getSelectionText = function() {
    var text = "";
    if (window.getSelection) {
        text = window.getSelection().toString();
    } else if (document.selection && document.selection.type != "Control") {
        text = document.selection.createRange().text;
    }
    return text.trim();
};
var word = getSelectionText();
if (word) window.open("https://www.google.com/search?q=" + word + "+definition&tbm=isch");
