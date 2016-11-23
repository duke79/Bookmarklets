javascript: var AddWord = function(value) {
    if (!value) return;
    var newArray = JSON.parse(localStorage.getItem("words")) || [];
    var isNotInside = newArray.indexOf(value) === -1;
    if (isNotInside) {
        newArray.push(value);
        console.log(newArray);
        localStorage.setItem("words", JSON.stringify(newArray));
    }
};
var ListWords = function() {
    return JSON.parse(localStorage.getItem("words"));
};
var getSelectionText = function() {
    var text = "";
    if (window.getSelection) {
        text = window.getSelection().toString();
    } else if (document.selection && document.selection.type != "Control") {
        text = document.selection.createRange().text;
    }
    return text.trim();
};
AddWord(getSelectionText());
