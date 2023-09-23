const search = document.querySelector('.search')
const btn = document.querySelector('.btn')
const input = document.querySelector('.input')
let searchActive = false

// Arama formunu göster/gizle
btn.addEventListener('click', () => {
  if (!searchActive) {
    search.classList.toggle('active')
    input.focus()
    searchActive = true
  } else {
    aramaa()
  }
})

// Arama formunun submit olayı
document.getElementById('form').addEventListener('submit', function(e) {
  e.preventDefault()
  aramaa()
})

// Arama işlemini gerçekleştir
function aramaa() {
  // Input alanından arama kelimesini al
  var searchTerm = document.getElementById('search').value;

  // Kelime ve yönlendirme bilgilerini tutan bir veri yapısı
  var keywords = {
    'iletişim': '../iletişim/iletisim.html',
    'kayıt': '../LoginCompany/indexLoginCompany.html',
    'kayıtt ol': '../LoginCompany/indexLoginCompany.html',
    'anasayfa': './index.html'
  };

  // Kelimeyi keyword listesi içinde arat ve yönlendirme bilgisini al
  var url = keywords[searchTerm];

  // Eğer kelime bulunduysa yönlendir, bulunamadıysa hata mesajı göster
  if (url) {
    search.classList.toggle('active')
    searchActive = false
    window.location.href = url;
  } else {
    alert('Kelime bulunamadı!');
  }
}

