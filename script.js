function carregar(){
    var msg = window.document.getElementById('msg')
    var foto = window.document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >= 0 && hora < 12){
        foto.src = 'fotomanha.png'
        document.body.style.background = '#fdbc5c'
    }else if (hora >=12 && hora < 18){
        foto.src = 'fototarde.png'
        document.body.style.background = '#c33a08'
    }else{
        foto.src = 'fotonoite.png'
        document.body.style.background = '#03101f'
    }
}
