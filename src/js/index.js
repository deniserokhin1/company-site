import "@/css/style";
import "@/css/normolize";
import "@/css/media";

const play = document.querySelector(".about__play");
const video = document.querySelector(".about__video video");

play.addEventListener("click", () => {
  video.play();
  video.setAttribute("controls", "controls");
  play.setAttribute("hidden", true);
});
