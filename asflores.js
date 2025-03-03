// Menü açma/kapama fonksiyonu
function toggleMenu() {
    var menu = document.getElementById("menu");
    var content = document.getElementById("content");
    
    // Menüyü açma/kapama
    if (menu.style.width === "250px") {
      menu.style.width = "0";
      content.style.marginLeft = "0";
    } else {
      menu.style.width = "250px";
      content.style.marginLeft = "250px";
    }
  }
  
  // Menü dışına tıklama ile menüyü kapama
  document.addEventListener('click', function(event) {
    var menu = document.getElementById("menu");
    var menuButton = document.querySelector('.menu-btn');
  
    // Eğer menü dışında bir yere tıklanırsa, menüyü kapat
    if (!menu.contains(event.target) && !menuButton.contains(event.target) && menu.style.width === "250px") {
      toggleMenu();
    }
  });
 
