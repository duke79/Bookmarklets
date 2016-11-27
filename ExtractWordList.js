var wordList = "";

for(i=1;i<263;i++)
{
  var word = $("#loadx5 > table > tbody > tr:nth-child("+i+") > td:nth-child(1) > a")[0].text;
  wordList += " "+word;
  //console.log(word);
}

console.log(wordList);
