/* When playing a video in youtube:

1. Advertisement
2. Related Videos*/


/* Playbutton the outcome is a related advertisment being played and a related video comes to the side of the sceen */


//Main Function 
function playVideo(onShowRelatedVideos,onplayAdv) { // parameter of a function

    console.log("Play the you tube video");

    onplayAdv() // calling sub function1
    onShowRelatedVideos() // calling sub function2
}

/* Now :
playAdv ==> onplayAdv ==> onplayAdv()
showRelatedVideos ==> onShowRelatedVideos ==> onShowRelatedVideos()

My requirement changes 
playAdv ==> onShowRelatedVideos ==> onShowRelatedVideos()
showRelatedVideos ==> onShowRelatedVideos ==> onPlayAdv()

After ch

 */
//Sub function 1
function playAdv() {
    console.log("Play Advertisement");
}

//Sub Function 2
function showRelatedVideos() {
    console.log("Show related videos");
}


playVideo(playAdv, showRelatedVideos) // when we pass a data during the calling of a function is called an argument