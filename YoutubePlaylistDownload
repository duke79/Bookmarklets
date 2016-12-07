// Goto: http://www.downvids.net/download-youtube-playlist-videos
// Copy/Paste the youtube-playlist URL

// #Step1 : To convert all the videos to mp3
// After all the videos are loaded

for(var i=1;i<10000;i++)
{
	$("#sonucc > div:nth-child("+i+")").find("#search_more")[1].click();
}

// #Step2 : To click on the download links of all the videos
// After all the videos are converted
// This Step may not work**

for(var i=1;i<10000;i++)
{
	$("#sonucc > div:nth-child("+i+") > div.wrapper").find("#search_more")[0].click();
}


// #Step3 : To click on the next link to download (counter increments itself each time)
// If Step2 fails, use this step repeatedly to download videos

// This line to be called only once
var i = 1;

// Repeat the following blocks multiple times
{
	$("#sonucc > div:nth-child("+i+") > div.wrapper").find("#search_more")[0].click();
	i++;
}
