
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
  closeBtn.addEventListener('click', fecharMenu);
  overlay.addEventListener('click', fecharMenu);

function mudar(novaPagina){
    
    if (novaPagina == "Referencias"){
        location.replace("https://eduardotribst.github.io/24121_24126_Redes_Tema3/referencias.html")
    }
}

function voltar(){
    location.replace("https://eduardotribst.github.io/24121_24126_Redes_Tema3/index.html")
}

