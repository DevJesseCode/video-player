const videoElement = document.getElementById("videoPlayer");

const changeSource = function () {
    let url = document.getElementById("videoURL").value;
    if (url.includes("youtube.com/watch?v=")) {
        url = url.replace("watch?v=", "embed/");
    }
    videoElement.setAttribute("src", url);
};

document.getElementById("playButton").addEventListener("click", changeSource);
