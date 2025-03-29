const body = document.querySelector("body");
const iconCount = 30;
const cols = 6;
const rows = 5;

for (let i = 0; i < iconCount; i++) {
  const gmailIcon = document.createElement("img");
  gmailIcon.src = "images/greyGmailIcon.png";
  gmailIcon.alt = "Gmail Icon";
  gmailIcon.classList.add("grey-gmail");
  gmailIcon.style.position = "absolute";
  gmailIcon.style.zIndex = -1;
  gmailIcon.style.opacity = "45%";
  
  const col = i % cols;
  const row = Math.floor(i / cols);
  const xOffset = 5 + Math.random() * 10;
  const yOffset = 5 + Math.random() * 10;
  
  gmailIcon.style.left = `${(col * (100/cols)) + xOffset}%`;
  gmailIcon.style.top = `${(row * (100/rows)) + yOffset}%`;
  
  
  gmailIcon.style.width = "5%";
  gmailIcon.style.transform = `rotate(${Math.random() * 360}deg)`;
  
  body.appendChild(gmailIcon);
}

document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.grey-gmail');
    images.forEach(image => {
        const randomDuration = 3 + Math.random() * 7;
        image.style.animation = `animate ${randomDuration}s linear infinite`;
    });
});

googleAuthLaunch

const authDiv = 