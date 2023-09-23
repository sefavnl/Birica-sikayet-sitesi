const button2 = document.getElementById('close-button2');
const div = document.getElementById('modal2');
const div2 = document.getElementById('info-container2');
const buttons = div2.getElementsByClassName('button-33');
const cevapla = document.getElementById('cevapla');

for (let button of buttons){
  button.addEventListener('click', e => {
    div.style.display = 'block';
    cevapla.addEventListener('click', e => {
      alert('Rica cevaplandı.');
      e.preventDefault();
      const info = document.getElementById('info2').value;

      const infoo = button.parentNode;

      const header = document.createElement('h6');
      header.textContent = 'CEVAP';
      const infoContent = document.createElement('p');
      infoContent.classList.add('cevap');
      infoContent.textContent = info;

      infoo.appendChild(header);
      infoo.appendChild(infoContent);

      button.textContent = 'Cevaplandı';
      button.style.backgroundColor = 'green';
    });
  });
}

button2.addEventListener('click', function() {
  div.style.display = 'none';
});
function toggleMenu() {
  var menu = document.getElementById("menu");
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
}
