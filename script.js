
const typingEl = document.getElementById('typing');
const roles = ['Computer System Engineer', 'ML Developer', 'DL Developer','AI Expert'];
let roleIndex = 0, charIndex = 0;

function type() {
  if (charIndex < roles[roleIndex].length) {
    typingEl.textContent += roles[roleIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, 100);
  } else {
    setTimeout(erase, 1500);
  }
}
function erase() {
  if (charIndex > 0) {
    typingEl.textContent = roles[roleIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 50);
  } else {
    roleIndex = (roleIndex + 1) % roles.length;
    setTimeout(type, 300);
  }
}
document.addEventListener('DOMContentLoaded', type);

document.getElementById('toggleMode').addEventListener('click', () => {
  document.body.classList.toggle('dark');
});
