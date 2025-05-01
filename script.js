document.addEventListener("DOMContentLoaded", function () {
  const wrapper = document.getElementById('swiperWrapper');
  wrapper.innerHTML += wrapper.innerHTML; 
  let pos = 0;
  const speed = 1; 
  function animate() {
    pos -= speed;
    const wrapperWidth = wrapper.scrollWidth / 2; 
    if (Math.abs(pos) >= wrapperWidth) {
      pos = 0;
    }
    wrapper.style.transform = `translateX(${pos}px)`;
    requestAnimationFrame(animate);
  }
  animate(); 
});

  const musicBtn = document.getElementById('musicToggle');
  const audio = new Audio('Around.mp3'); 
  let isPlaying = false;

  musicBtn.addEventListener('click', () => {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    isPlaying = !isPlaying;
  });  