// Modal'ı açan butona tıklama olayını dinleyin
document.getElementById('openModal').addEventListener('click', function() {
  // Modal'ı gösterin
  document.getElementById('modal').style.display = 'block';
  document.getElementById('modal').classList.add('fadeIn');
});

// Modal'ı kapatan butona tıklama olayını dinleyin
document.getElementById('modal').addEventListener('click', function(event) {
  // Eğer tıklanan eleman bir buton ise
  if (event.target.tagName === 'BUTTON') {
    // Modal'ı gizleyin
    document.getElementById('modal').style.display = 'none';
  }
});

var current = null;
document.querySelector('#email').addEventListener('focus', function(e) {
  if (current) current.pause();
  current = anime({
    targets: 'path',
    strokeDashoffset: {
      value: 0,
      duration: 700,
      easing: 'easeOutQuart'
    },
    strokeDasharray: {
      value: '240 1386',
      duration: 700,
      easing: 'easeOutQuart'
    }
  });
});
document.querySelector('#password').addEventListener('focus', function(e) {
  if (current) current.pause();
  current = anime({
    targets: 'path',
    strokeDashoffset: {
      value: -336,
      duration: 700,
      easing: 'easeOutQuart'
    },
    strokeDasharray: {
      value: '240 1386',
      duration: 700,
      easing: 'easeOutQuart'
    }
  });
});
document.querySelector('#submit').addEventListener('focus', function(e) {
  if (current) current.pause();
  current = anime({
    targets: 'path',
    strokeDashoffset: {
      value: -730,
      duration: 700,
      easing: 'easeOutQuart'
    },
    strokeDasharray: {
      value: '530 1386',
      duration: 700,
      easing: 'easeOutQuart'
    }
  });
});
document.getElementById("register-form").addEventListener("submit", function(event) {
  // Form gönderme işlemini engelle
  event.preventDefault();
  // Kullanıcı adı ve şifre bilgilerini al
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // Tarayıcının çerezlerini kullanarak önbellekte sakla
  document.cookie = "username=" + username;
  document.cookie = "password=" + password;

  // Kullanıcıyı bilgilendir
  alert("Kayıt işlemi başarıyla tamamlandı!");
});
document.getElementById("login-form").addEventListener('submit', function(event) {
  // Form gönderme işlemini engelle
  event.preventDefault();

  // Kullanıcı adı ve şifre bilgilerini al
  var username = document.getElementById("usernamee").value;
  var password = document.getElementById("passwordd").value;

  // Önbellekte saklanan kullanıcı adı ve şifre bilgilerini al
  var storedUsername = getCookie("username");
  var storedPassword = getCookie("password");

  // Girilen bilgilerle önbellekte saklanan bilgileri karşılaştır
  if (username == storedUsername && password == storedPassword) {
    // Eğer bilgiler eşleşiyorsa, giriş başarılı
    window.location.href = "../firma anasayfa/firmaanasayfa.html";
  } else {
    // Eğer bilgiler eşleşmiyorsa, hata mesajı göster
    alert("Hatalı kullanıcı adı veya şifre!");
  }
});

// Tarayıcı çerezlerinden veri okuma işlemini yapacak fonksiyon
function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i=0;i < ca.length;i++) {
    var c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1,c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
  }
  return null;
}