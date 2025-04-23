 function dragElement(elmnt) {
   let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
   const header = elmnt.querySelector(".mydivheader");

   if (header) {
     header.onmousedown = dragMouseDown;
   } else {
     elmnt.onmousedown = dragMouseDown;
   }

   function dragMouseDown(e) {
     e.preventDefault();
     pos3 = e.clientX;
     pos4 = e.clientY;
     document.onmouseup = closeDragElement;
     document.onmousemove = elementDrag;
   }

   function elementDrag(e) {
     e.preventDefault();
     pos1 = pos3 - e.clientX;
     pos2 = pos4 - e.clientY;
     pos3 = e.clientX;
     pos4 = e.clientY;
     elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
     elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
   }

   function closeDragElement() {
     document.onmouseup = null;
     document.onmousemove = null;
   }
 }

 const container = document.getElementById('imageLaunch');
const launchButton = document.getElementById('launchBtn');
const launchSound = document.getElementById('launchSound');
const totalCards = 400;
const imageVariants = 10;

let imagesPreloaded = false;

function preloadImages(callback) {
  let loaded = 0;
  for (let i = 1; i <= imageVariants; i++) {
    const img = new Image();
    img.src = `cards/effect/img${i}.webp`;
    img.onload = img.onerror = () => {
      loaded++;
      if (loaded === imageVariants) {
        imagesPreloaded = true;
        callback();
      }
    };
  }
}

function launchCards() {
  container.style.opacity = 1;
  container.innerHTML = '';

  for (let i = 1; i <= totalCards; i++) {
    const img = document.createElement('img');
    img.src = `cards/effect/img${(i % imageVariants) + 1}.webp`;
    img.className = 'launch-img';
    img.alt = '';

    const randomDelay = Math.random() * 1 + 's'; // Super short delay
    const randomLeft = Math.random() * 100 + 'vw';
    const xShift = (Math.random() * 200 - 100).toFixed(2) + 'px';

    img.style.animationDelay = randomDelay;
    img.style.left = randomLeft;
    img.style.setProperty('--x-shift', xShift);

    container.appendChild(img);
  }

  container.addEventListener('animationend', () => {
    setTimeout(() => {
      container.style.opacity = 0;
    }, 300); // Quicker fade
  }, { once: true });
}

launchButton.addEventListener('click', () => {
  launchSound.currentTime = 0;
  launchSound.play();

  launchButton.classList.add('fade-out');

  if (imagesPreloaded) {
    launchCards();
  } else {
    preloadImages(() => {
      launchCards();
    });
  }
});

window.onload = () => {
  preloadImages(() => {
    console.log('Images preloaded.');
  });
};
