document.addEventListener("DOMContentLoaded", function () {
    var tekstDiv = document.getElementById("tekstDiv");
    var tekstovi = ["Implementacijom našeg BizUp rješenja upravljajte svojim troškovima.", "Uz Bizup rješenja Vaš biznis nema granice!"];
  
    var trenutniIndeks = 0;
  
    function promijeniTekst() {
      tekstDiv.textContent = tekstovi[trenutniIndeks];
      trenutniIndeks = (trenutniIndeks + 1) % tekstovi.length;
    }
  
    setInterval(promijeniTekst, 4000);
  });

  function posaljiEmail() {
    var primatelj = 'stakor.kd@gmail.com';  // Unesite e-mail adresu na koju želite poslati poruku
    var naslov = 'Pitanje ili komentar';  // Unesite naslov poruke
    var tijeloPoruke = 'Pozdrav,%0D%0A%0D%0A';  // Unesite tijelo poruke (upotrebom %0D%0A postižete prelazak u novi red)

    var emailLink = 'mailto:' + primatelj + '?subject=' + encodeURIComponent(naslov) + '&body=' + encodeURIComponent(tijeloPoruke);

    window.location.href = emailLink;
  }