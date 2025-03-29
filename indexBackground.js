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
  gmailIcon.style.opacity = "0%";
  
  const col = i % cols;
  const row = Math.floor(i / cols);
  const xOffset = 5 + Math.random() * 10;
  const yOffset = 5 + Math.random() * 10;
  
  gmailIcon.style.left = `${(col * (100/cols)) + xOffset}%`;
  gmailIcon.style.top = `${(row * (100/rows)) + yOffset}%`;
  
  gmailIcon.style.width = "5%";  
  body.appendChild(gmailIcon);
}

const authDiv = document.querySelector("#googleAuthLaunch");
const googleIcon = document.querySelector()

document.addEventListener('DOMContentLoaded', function() {
    authDiv.addEventListener('mouseenter', () => {
        const images = document.querySelectorAll('.grey-gmail');
        images.forEach(image => {
            const randomDuration = 2 + Math.random() * 5;
            image.style.animation = `animate ${randomDuration}s linear infinite`;
        });
    });
    
    authDiv.addEventListener('mouseleave', () => {
        const images = document.querySelectorAll('.grey-gmail');
        images.forEach(image => {
            image.style.animation = 'none';
        });
    });
});