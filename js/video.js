const speaker = document.getElementById("speaker");
const subtitle = document.getElementById("subtitle");

let number = 0;

function disableAllTracks(video) {
  for (let i = 0; i < video.textTracks.length; ++i) {
    video.textTracks[i].mode = "disabled";
  }
}

subtitle.onclick = () => {
  const video = document.getElementsByTagName("video")[0];
  disableAllTracks(video);
  if (number == 2) {
    number = 0;
    return;
  }
  video.textTracks[number].mode = "showing";
  ++number;
};

speaker.onclick = () => {
  const video = document.getElementsByTagName("video")[0];
  video.muted = !video.muted;
};
