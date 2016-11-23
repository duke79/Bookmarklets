# Bookmarklets
It's a collection of useful bookmarklets. 
### More info on Bookmarklets
- [{What's a bookmarklet?}](https://en.wikipedia.org/wiki/Bookmarklet)
- [{How to use a bookmarklet?}](http://www.howtogeek.com/189358/beginner-geek-how-to-use-bookmarklets-on-any-device/)

### Selected Text Related
##### Google Word Definition [{Source}](SearchSelectedWordsDefinitionOnGoogle.js)

```
javascript:
    var getSelectionText = function() {
        var text = "";
        if (window.getSelection) {
            text = window.getSelection().toString();
        } else if (document.selection && document.selection.type != "Control") {
            text = document.selection.createRange().text;
        }
        return text.trim();
    };
var word = getSelectionText();
if (word) window.open("https://www.google.com/search?q=spartan#newwindow=1&q=define+" + word);
```
#####  Google Word Definition - Image [{Source}](SearchSelectedWordsRelatedImagesOnGoogleImages.js)
```
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
```
#####  Save word to local storage [{Source}](SaveSelectedWordToLocalStorage.js)
```
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
```

#####  List of Saved Words [{Source}](GetListOfSavedWordsFromLocalStorage.js)
