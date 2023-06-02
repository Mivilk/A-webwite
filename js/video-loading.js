const video = document.querySelector(".product__video")
let playing = false

video.addEventListener("click", () => {
  if (!playing) {
    playing = true
    video.insertAdjacentHTML("afterbegin", '<iframe width="560" height="315" src="https://www.youtube.com/embed/cWEH7ftG-BQ?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>')
  }
})