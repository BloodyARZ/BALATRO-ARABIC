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

 document.querySelectorAll('.launch-img').forEach((img) => {
    const randomX = Math.random(); // Get random value between 0 and 1
    img.style.setProperty('--random-x', randomX);
  });

  const container = document.getElementById('imageLaunch');
  for (let i = 1; i <= 10; i++) {
    const img = document.createElement('img');
    img.src = `cards/effect/img${i}.webp`;
    img.className = 'launch-img';
    img.alt = '';
    
    // Randomize animation delay and starting position
    const randomDelay = Math.random() * 2 + 's'; // Random delay between 0-2 seconds
    const randomLeft = Math.random() * 100 + 'vw'; // Random horizontal position (0-100vw)
    
    img.style.animationDelay = randomDelay;
    img.style.left = randomLeft;

    container.appendChild(img);
  }