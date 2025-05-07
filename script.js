
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
