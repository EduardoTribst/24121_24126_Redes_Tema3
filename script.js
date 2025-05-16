
const toggleBtn = document.getElementById('menu-toggle');
const closeBtn = document.getElementById('close-menu');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');

function openMenu() {
    sidebar.classList.add('show');
    overlay.classList.add('show');
  }
  
  function fecharMenu() {
    sidebar.classList.remove('show');
    overlay.classList.remove('show');
  }
  
  toggleBtn.addEventListener('click', openMenu);
  closeBtn.addEventListener('click', closeMenu);
  overlay.addEventListener('click', closeMenu);

function mudar(novaPagina){
    
    if (novaPagina == "Autores"){
        location.replace("http://127.0.0.1:5500/autores.html")
    }
    else if (novaPagina == "Referencias"){
        location.replace("http://127.0.0.1:5500/referencias.html")
    }
}

function voltar(){
    location.replace("http://127.0.0.1:5500/index.html")
}

