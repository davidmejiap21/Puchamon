

const sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque");
const botonPuchamonJugador = document.getElementById("boton-puchamon");
const botonReiniciar = document.getElementById("boton-reiniciar");
const secctionReiniciar = document.getElementById("reiniciar");
const sectionSeleccionarPuchamon = document.getElementById("seleccionar-puchamon");
const spanPuchamonJugador = document.getElementById("puchamon-jugador");
const divImagenPuchamonJugador = document.getElementById("imagen-puchamon-jugador");
const spanPuchamonEnemigo = document.getElementById("puchamon-enemigo");
const divImagenPuchamonEnemigo = document.getElementById("imagen-puchamon-enemigo");
const spanVictoriasJugador = document.getElementById("victorias-jugador");
const spanVictoriasEnemigo = document.getElementById("victorias-enemigo");
const sectionMensajes = document.getElementById("resultado");
const ataquesDelJugador = document.getElementById("ataques-del-jugador");
const ataquesDelEnemigo = document.getElementById("ataques-del-enemigo");
const tarjetasPuchamon = document.getElementById("tarjetas-puchamon");
const contenedorBotones = document.getElementById("botones-ataques")
const botonJugar = document.getElementById('boton-jugar')
const sectionJugar = document.getElementById('jugar')
const sectionInstrucciones = document.getElementById('instrucciones')
const botonInstrucciones = document.getElementById('boton-instrucciones')
const botonVolverInicio = document.getElementById('volver-inicio')

const sectionVerMapa = document.getElementById('ver-mapa')
const mapa = document.getElementById('mapa')

let jugadorId = null
let enemigoId = null
let puchamones = []
let puchamonesEnemigos = []
let ataqueJugador = []
let ataqueEnemigo = []
let botones = []
let botonSound = new Audio('sonidos/botonsonido.mp3')
let musicaPelea = new Audio('sonidos/pokemon-battle.mp3')
let musicaMapa = new Audio('sonidos/musicaMapa.mp3')
let musicaEmpezarAJugar = new Audio('sonidos/musicaEmpezarAJugar.mp3')
let opcionDePuchamones;
let inputFeraligatr;
let inputIncineroar;
let inputSerperior;
let inputBlaziken;
let inputDecidueye;
let inputEmpoleon;
let imagenPuchamonJugador;
let imagenPuchamonEnemigo;
let puchamonJugador;
let puchamonJugadorObjeto;
let botonFuego;
let botonAgua;
let botonPlanta
let ataquesPuchamon;
let ataquesPuchamonEnemigo;
let indexAtaqueEnemigo
let indexAtaqueJugador
let victoriasJugador = 0
let victoriasEnemigo = 0
let modoDeJuego = 0
let num;
let numE;
let ia = 0;
let lienzo = mapa.getContext("2d")
let mapaBackground = new Image()
mapaBackground.src = 'img/puchamonMap.jpg'
let intervalo;

let alturaQueBuscamos;
let anchoDelMapa = window.innerWidth - 20
let anchoMaximoDelMapa = 800

if (anchoDelMapa < 450) {
    anchoMaximoDelMapa = 450
}
if (anchoDelMapa > anchoMaximoDelMapa) {
    anchoDelMapa = anchoMaximoDelMapa - 20

}


alturaQueBuscamos = anchoDelMapa * 600 / 800

mapa.width = anchoDelMapa;
mapa.height = alturaQueBuscamos;





class Puchamon {   // asi se crean clases y objetos 
    constructor(nombre, imagen, vida,  id = null) {
        this.id = id
        this.nombre = nombre
        this.imagen = imagen
        this.vida = vida
        this.ataques = []
        this.x = aleatorio(0, mapa.width - 30)
        this.y = aleatorio(0, mapa.height - 30)
        this.ancho = 90
        this.alto = 70
        this.mapaImagen = new Image()
        this.mapaImagen.src = imagen
        this.velocidadX = 0
        this.velocidadY = 0

    }
    pintarPuchamon() {
        lienzo.drawImage(
            this.mapaImagen,
            this.x,
            this.y,
            this.alto,
            this.ancho
        )
    }

}

let incineroar = new Puchamon('Incineroar', 'img/incineroar.png', 5)
let feraligatr = new Puchamon('Feraligatr', 'img/Feraligatr.png', 5)
let serperior = new Puchamon('Serperior', 'img/Serperior.png',5 )
let blaziken = new Puchamon('Blaziken', 'img/blaziken.png',5) 
let empoleon = new Puchamon('Empoleon', 'img/empoleon.png',5) 
let decidueye = new Puchamon('Decidueye', 'img/decidueye.png',5 )




const INCINEROAR_ATAQUES = [
    { nombre: "LANZALLAMAS🔥", id: "boton-fuego", logo: 'FUEGO' },
    { nombre: "COLMILLO IGNEO🔥", id: "boton-fuego", logo: 'FUEGO' },
    { nombre: "ASCUAS🔥", id: "boton-fuego", logo: 'FUEGO' },
    { nombre: "HOJA AFILADA🌱", id: "boton-planta", logo: 'PLANTA' },
    { nombre: "PISTOLA DE AGUA🌊", id: "boton-agua", logo: 'AGUA' },
]
incineroar.ataques.push(...INCINEROAR_ATAQUES)

const FERALIGATR_ATAQUES = [
    { nombre: "PISTOLA DE AGUA🌊", id: "boton-agua", logo: 'AGUA' },
    { nombre: "RAYO BURBUJA🌊", id: "boton-agua", logo: 'AGUA' },
    { nombre: "AQUA JET🌊", id: "boton-agua", logo: 'AGUA' },
    { nombre: "LANZALLAMAS🔥", id: "boton-fuego", logo: 'FUEGO' },
    { nombre: "HOJA AFILADA🌱", id: "boton-planta", logo: 'PLANTA' },
]
feraligatr.ataques.push(...FERALIGATR_ATAQUES)

const SERPERIOR_ATAQUES = [
    { nombre: "HOJA AFILADA🌱", id: "boton-planta", logo: 'PLANTA' },
    { nombre: "LATIGO CEPA🌱", id: "boton-planta", logo: 'PLANTA' },
    { nombre: "HOJA MAGICA🌱", id: "boton-planta", logo: 'PLANTA' },
    { nombre: "LANZALLAMAS🔥", id: "boton-fuego", logo: 'FUEGO' },
    { nombre: "PISTOLA DE AGUA🌊", id: "boton-agua", logo: 'AGUA' },

]

serperior.ataques.push(...SERPERIOR_ATAQUES)


const EMPOLEON_ATAQUES = [
    { nombre: "PISTOLA DE AGUA🌊", id: "boton-agua", logo: 'AGUA' },
    { nombre: "RAYO BURBUJA🌊", id: "boton-agua", logo: 'AGUA' },
    { nombre: "AQUA JET🌊", id: "boton-agua", logo: 'AGUA' },
    { nombre: "LANZALLAMAS🔥", id: "boton-fuego", logo: 'FUEGO' },
    { nombre: "HOJA AFILADA🌱", id: "boton-planta", logo: 'PLANTA' },

]
empoleon.ataques.push(...EMPOLEON_ATAQUES)
const DECIDUEYE_ATAQUES = [
    { nombre: "HOJA AFILADA🌱", id: "boton-planta", logo: 'PLANTA' },
    { nombre: "LATIGO CEPA🌱", id: "boton-planta", logo: 'PLANTA' },
    { nombre: "HOJA MAGICA🌱", id: "boton-planta", logo: 'PLANTA' },
    { nombre: "LANZALLAMAS🔥", id: "boton-fuego", logo: 'FUEGO' },
    { nombre: "PISTOLA DE AGUA🌊", id: "boton-agua", logo: 'AGUA' },

]
decidueye.ataques.push(...DECIDUEYE_ATAQUES)

const BLAZIKEN_ATAQUES = [
    { nombre: "LANZALLAMAS🔥", id: "boton-fuego", logo: 'FUEGO' },
    { nombre: "COLMILLO IGNEO🔥", id: "boton-fuego", logo: 'FUEGO' },
    { nombre: "ASCUAS🔥", id: "boton-fuego", logo: 'FUEGO' },
    { nombre: "HOJA AFILADA🌱", id: "boton-planta", logo: 'PLANTA' },
    { nombre: "PISTOLA DE AGUA🌊", id: "boton-agua", logo: 'AGUA' },

]
blaziken.ataques.push(...BLAZIKEN_ATAQUES)






puchamones.push(feraligatr, incineroar, serperior, empoleon, decidueye, blaziken)



function pantallaEmpezarAJugar() {


    sectionJugar.style.display = 'flex'
    sectionInstrucciones.style.display = 'none'
    sectionVerMapa.style.display = "none"
    sectionSeleccionarAtaque.style.display = "none"
    sectionSeleccionarPuchamon.style.display = "none"
    botonInstrucciones.addEventListener('click', abrirSectionInstrucciones)

}

function abrirSectionInstrucciones() {
    sectionInstrucciones.style.display = 'flex'

    sectionJugar.style.display = 'none'
    sectionVerMapa.style.display = "none"
    sectionSeleccionarAtaque.style.display = "none"
    sectionSeleccionarPuchamon.style.display = "none"
    botonVolverInicio.addEventListener('click', pantallaEmpezarAJugar)
}

function iniciarJuego() {
    empezarMusicaEmpezarAJugar()
    sectionJugar.style.display = 'none'
    sectionSeleccionarPuchamon.style.display = "flex"
    sectionVerMapa.style.display = "none"
    sectionSeleccionarAtaque.style.display = "none"

    puchamones.forEach((puchamon) => {
        opcionDePuchamones = `
     <input type="radio" name="puchamon" id=${puchamon.nombre}>
    <label for=${puchamon.nombre} class="tarjeta-de-puchamon">
        <img src=${puchamon.imagen} alt=${puchamon.nombre}>
        <p>${puchamon.nombre}</p>
    </label>
    `
        tarjetasPuchamon.innerHTML += opcionDePuchamones
        inputFeraligatr = document.getElementById("Feraligatr");
        inputIncineroar = document.getElementById("Incineroar");
        inputSerperior = document.getElementById("Serperior");
        inputEmpoleon = document.getElementById('Empoleon')
        inputDecidueye = document.getElementById('Decidueye')
        inputBlaziken = document.getElementById('Blaziken')
        secctionReiniciar.style.display = "none"

    })

    botonPuchamonJugador.addEventListener("click", seleccionarPuchamonJugador)
    botonPuchamonJugador.addEventListener("click", empezarMusicaMapa)
    botonReiniciar.addEventListener("click", reiniciarJuego)

    unirseAlJuego()



}

function unirseAlJuego() {
    fetch('http://25.10.66.18:8080/unirse')
        .then(function (res) {
            if (res.ok) { //si la peticion sale bien, entonces muestra el res como texto
                res.text()
                    .then(function (respuesta) {
                        console.log(respuesta)
                        jugadorId = respuesta
                    })
            }
        })
}


function empezarMusicaEmpezarAJugar() {
    musicaEmpezarAJugar.play()
}

function empezarMusicaMapa() {
    musicaEmpezarAJugar.pause()
    musicaMapa.play()
}

function empezarMusicaCombate() {
    musicaMapa.pause()
    musicaPelea.play()
}
//funcion que ejecuta el boton
function seleccionarPuchamonJugador() {
    // sectionSeleccionarAtaque.style.display = "flex"
    sectionSeleccionarPuchamon.style.display = "none"



    if (inputFeraligatr.checked) {
        spanPuchamonJugador.innerHTML = inputFeraligatr.id
        imagenPuchamonJugador = `<img src=${feraligatr.imagen} alt=${feraligatr.nombre}>`
        divImagenPuchamonJugador.innerHTML = imagenPuchamonJugador
        puchamonJugador = inputFeraligatr.id
        num = 0

    }
    else if (inputIncineroar.checked) {
        spanPuchamonJugador.innerHTML = inputIncineroar.id;
        imagenPuchamonJugador = `<img src=${incineroar.imagen} alt=${incineroar.nombre}>`
        divImagenPuchamonJugador.innerHTML = imagenPuchamonJugador
        puchamonJugador = inputIncineroar.id
        num = 1
    }

    else if (inputSerperior.checked) {
        spanPuchamonJugador.innerHTML = inputSerperior.id;
        imagenPuchamonJugador = `<img src=${serperior.imagen} alt=${serperior.nombre}>`
        divImagenPuchamonJugador.innerHTML = imagenPuchamonJugador
        puchamonJugador = inputSerperior.id
        num = 2
    }
    else if (inputEmpoleon.checked) {
        spanPuchamonJugador.innerHTML = inputEmpoleon.id
        imagenPuchamonJugador = `<img src=${empoleon.imagen} alt=${empoleon.nombre}>`
        divImagenPuchamonJugador.innerHTML = imagenPuchamonJugador
        puchamonJugador = inputEmpoleon.id


        num = 3
    } else if (inputDecidueye.checked) {
        spanPuchamonJugador.innerHTML = inputDecidueye.id
        imagenPuchamonJugador = `<img src=${decidueye.imagen} alt=${decidueye.nombre}>`
        divImagenPuchamonJugador.innerHTML = imagenPuchamonJugador
        puchamonJugador = inputDecidueye.id

        num = 4
    } else if (inputBlaziken.checked) {
        spanPuchamonJugador.innerHTML = inputBlaziken.id
        imagenPuchamonJugador = `<img src=${blaziken.imagen} alt=${blaziken.nombre}>`
        divImagenPuchamonJugador.innerHTML = imagenPuchamonJugador
        puchamonJugador = inputBlaziken.id

        num = 5
    } else {

        alert("No has seleccionado ningun Puchamon")
        reiniciarJuego()
    }

    seleccionarPuchamon(puchamonJugador)
    extraerAtaques(puchamonJugador)
    sectionVerMapa.style.display = "flex"

    iniciarMapa()
    //seleccionarPuchamonEnemigo(num)


}

function seleccionarPuchamon(puchamonJugador) {
    fetch(`http://25.10.66.18:8080/puchamon/${jugadorId}`, {
        method: "POST",  //esto para indicar que se usara el metodo POST en esta peticion
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            puchamon: puchamonJugador
        })
    })

}



function extraerAtaques(puchamonJugador) {
    let ataques

    for (let i = 0; i < puchamones.length; i++) {
        if (puchamonJugador === puchamones[i].nombre) {
            ataques = puchamones[i].ataques
        }

    }

    ponerAtaques(ataques)

}


function ponerAtaques(ataques) {

    ataques.forEach((ataque) => {
        ataquesPuchamon = `
        <button id=${ataque.id} class="boton-ataque BAtaque"> ${ataque.nombre}</button>
        `
        contenedorBotones.innerHTML += ataquesPuchamon

    })
    botonFuego = document.getElementById("boton-fuego");
    botonAgua = document.getElementById("boton-agua");
    botonPlanta = document.getElementById("boton-planta");
    botones = document.querySelectorAll('.BAtaque')
    console.log(botones)

}




//modoDeJuego = 2

//inputSecuencia.checked
//  if (modoDeJuego == 1) {

// combate()

//inputNormal.checked
//  } else if (modoDeJuego == 2) {

//combateNormal()
// }
//}



function secuenciaAtaque() {
    botones.forEach((boton) => {
        boton.addEventListener('click', (e) => {
            if (e.target.textContent === ' LANZALLAMAS🔥' ||
                e.target.textContent === ' COLMILLO IGNEO🔥' ||
                e.target.textContent === ' ASCUAS🔥') {
                ataqueJugador.push('FUEGO')
                console.log(ataqueJugador)
                boton.style.background = '#5c5b60'
                boton.style.color = '#444'
                boton.disabled = true
                botonSound.play();
            } else if (e.target.textContent === ' PISTOLA DE AGUA🌊' ||
                e.target.textContent === ' RAYO BURBUJA🌊' ||
                e.target.textContent === ' AQUA JET🌊') {
                ataqueJugador.push('AGUA')
                console.log(ataqueJugador)
                boton.style.background = '#5c5b60'
                boton.style.color = '#444'
                boton.disabled = true
                botonSound.play();
            } else if (e.target.textContent === ' HOJA AFILADA🌱' ||
                e.target.textContent === ' LATIGO CEPA🌱' ||
                e.target.textContent === ' HOJA MAGICA🌱') {
                ataqueJugador.push('PLANTA')
                console.log(ataqueJugador)
                boton.style.background = '#5c5b60'
                boton.style.color = '#444'
                boton.disabled = true
                botonSound.play();
            }
            if (ataqueJugador.length === 5) {
                enviarAtaques()
            }

            //iniciarPelea()
        })
    })


}


function enviarAtaques() {
    fetch(`http://25.10.66.18:8080/puchamon/${jugadorId}/ataques`, {
        method: "POST",
        headers: {
            "Content-Type": " application/json"
        },
        body: JSON.stringify({
            ataques: ataqueJugador
        })

    })
    intervalo = setInterval(obtenerAtaques, 50)
}

function obtenerAtaques() {
    fetch(`http://25.10.66.18:8080/puchamon/${enemigoId}/ataques`)
        .then((res) => {
            if (res.ok) {
                res.json()
                .then(function({ ataques })  {
                    if (ataques.length === 5) {
                        ataqueEnemigo = ataques
                        combate()
                    }
                })
            }
        })
}

function seleccionarPuchamonEnemigo(enemigo) {
    //  let puchamonAleatorio = aleatorio(0, puchamones.length - 1);


    spanPuchamonEnemigo.innerHTML = enemigo.nombre
    ataquesPuchamonEnemigo = enemigo.ataques
    imagenPuchamonEnemigo = `<img src=${enemigo.imagen} alt=${enemigo.nombre}>`
    divImagenPuchamonEnemigo.innerHTML = imagenPuchamonEnemigo

    secuenciaAtaque()
    //extraerAtaques(puchamonJugador)

}

function ataqueAleatorioEnemigo() {

    let ataqueAleatorio = aleatorio(0, ataquesPuchamonEnemigo.length - 1)

    ataqueEnemigo.push(ataquesPuchamonEnemigo[ataqueAleatorio].logo)
    ataquesPuchamonEnemigo.splice(ataqueAleatorio, 1)
    console.log(ataqueEnemigo)
    iniciarPelea()
}


function iniciarPelea() {
    if (ataqueJugador.length === 5) {
        combate()
    }
}

function indexAmbosOponente(jugador, enemigo) {
    indexAtaqueJugador = ataqueJugador[jugador]
    indexAtaqueEnemigo = ataqueEnemigo[enemigo]
}

function combate() {
    clearInterval(intervalo)

    for (let index = 0; index < ataqueJugador.length; index++) {
        if (ataqueJugador[index] === ataqueEnemigo[index]) {
            indexAmbosOponente(index, index)
            crearMensaje("EMPATE")
        } else if (ataqueJugador[index] === 'FUEGO' && ataqueEnemigo[index] === 'PLANTA') {
            indexAmbosOponente(index, index)
            crearMensaje("GANASTE")
            victoriasJugador++
            spanVictoriasJugador.innerHTML = victoriasJugador
        } else if (ataqueJugador[index] === 'AGUA' && ataqueEnemigo[index] === 'FUEGO') {
            indexAmbosOponente(index, index)
            crearMensaje("GANASTE")
            victoriasJugador++
            spanVictoriasJugador.innerHTML = victoriasJugador
        } else if (ataqueJugador[index] === 'PLANTA' && ataqueEnemigo[index] === 'AGUA') {
            indexAmbosOponente(index, index)
            crearMensaje("GANASTE")
            victoriasJugador++
            spanVictoriasJugador.innerHTML = victoriasJugador
        } else {
            indexAmbosOponente(index, index)
            crearMensaje("PERDISTE")
            victoriasEnemigo++
            spanVictoriasEnemigo.innerHTML = victoriasEnemigo
        }
    }


    revisarVictorias(victoriasJugador, victoriasEnemigo)
}



function combateNormal() {
    clearInterval(intervalo)

    if (ataqueJugador[ia] === ataqueEnemigo[ia]) {
        console.log('Enemigo: ' + ataqueEnemigo[ia] + ' Jugador ' + ataqueJugador[ia])
        resultado = 'Empate'
        nombresAtaques(ia, ia)
        crearMensaje("Ambos Puchamones resistieron el ataque")
        ia++
    } else if (ataqueJugador[ia] == 'FUEGO' && ataqueEnemigo[ia] == 'PLANTA' ||
        ataqueJugador[ia] == 'PLANTA' && ataqueEnemigo[ia] == 'AGUA' ||
        ataqueJugador[ia] == 'AGUA' && ataqueEnemigo[ia] == 'FUEGO') {
        console.log('Enemigo: ' + ataqueEnemigo[ia] + ' Jugador ' + ataqueJugador[ia])
        resultado = 'Ganaste'
        nombresAtaques(ia, ia)
        victoriasJugador++
        spanVictoriasJugador.innerHTML = victoriasJugador
        crearMensaje(resultado)
        ia++
    } else {
        console.log('Enemigo: ' + ataqueEnemigo[ia] + ' Jugador ' + ataqueJugador[ia])
        resultado = 'Perdiste'
        nombresAtaques(ia, ia)
        victoriasEnemigo++
        spanVictoriasEnemigo.innerHTML = victoriasEnemigo
        crearMensaje(resultado)
        ia++
    }
    if (ataqueJugador.length === 5) {

        botones = document.querySelectorAll('.BAtaque')
        botones.forEach(boton => {
            boton.style.background = '#5c5b60'
            boton.style.color = '#444'
            boton.disabled = true

        });
        revisarVictorias(victoriasJugador, victoriasEnemigo)
    }
}
function nombresAtaques(j, e) {
    indexAtaqueJugador = ataqueJugador[j]
    indexAtaqueEnemigo = ataqueEnemigo[e]
}









function revisarVictorias(victorias, derrotas) {
    spanVictoriasJugador.innerHTML = victoriasJugador
    spanVictoriasEnemigo.innerHTML = victoriasEnemigo
    if (victorias == derrotas) {
        crearMensajeFinal("el encuentro es un empate")
    } else if (victorias > derrotas) {
        crearMensajeFinal("Has ganado el encuentro")
    } else {
        crearMensajeFinal("Has sido derrotado")
    }
}



function crearMensaje(resultado) {

    let nuevoAtaqueDelJugador = document.createElement('p')
    let nuevoAtaqueDelEnemigo = document.createElement('p')

    sectionMensajes.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = indexAtaqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = indexAtaqueEnemigo

    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}

function crearMensajeFinal(resultadoFinal) {

    sectionMensajes.innerHTML = resultadoFinal

    secctionReiniciar.style.display = "block"
}

function reiniciarJuego() {
    location.reload()

}

function aleatorio(min, max) {

    return Math.floor(Math.random() * (max - min + 1) + min)
}


function pintarCanvas() {


    puchamonJugadorObjeto.x = puchamonJugadorObjeto.x + puchamonJugadorObjeto.velocidadX
    puchamonJugadorObjeto.y = puchamonJugadorObjeto.y + puchamonJugadorObjeto.velocidadY
    lienzo.clearRect(0, 0, mapa.width, mapa.height)
    lienzo.drawImage(
        mapaBackground,
        0,
        0,
        mapa.width,
        mapa.height
    )
    puchamonJugadorObjeto.pintarPuchamon()

    enviarPosicion(puchamonJugadorObjeto.x, puchamonJugadorObjeto.y)

   

    puchamonesEnemigos.forEach((puchamon) => {
        

        puchamon.pintarPuchamon()

        if (puchamonJugadorObjeto.velocidadX != 0 ||
            puchamonJugadorObjeto.velocidadY != 0 ) {

            revisarColision(puchamon)

        }

    })


}


function enviarPosicion(x, y) {
    fetch(`http://25.10.66.18:8080/puchamon/${jugadorId}/posicion`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            x,
            y
        })
    })
        .then(function (res) {
            if (res.ok) {
                res.json()
                    .then(function ({ enemigos }) {
                        console.log("puto el que lo lea" + enemigos)
                        puchamonesEnemigos = enemigos.map(function (enemigo) { // map funciona como un forEch, pero permite retornar un valor, es decir, generara una lista con el mismo numero de elementos que la original
                            let puchamonEnemigo = null
                            const puchamonNombre = enemigo.puchamon.nombre || ""
                            if (puchamonNombre === 'Incineroar') {
                                puchamonEnemigo = new Puchamon('Incineroar', 'img/incineroar.png', 5, enemigo.id)

                            } else if (puchamonNombre === 'Feraligatr') {
                                puchamonEnemigo = new Puchamon('Feraligatr', 'img/Feraligatr.png', 5,  enemigo.id)

                            } else if (puchamonNombre === 'Serperior') {
                                puchamonEnemigo = new Puchamon('Serperior', 'img/Serperior.png', 5,  enemigo.id)

                            } else if (puchamonNombre === 'Blaziken') {
                                puchamonEnemigo = new Puchamon('Blaziken', 'img/blaziken.png', 5,  enemigo.id)

                            } else if (puchamonNombre === 'Empoleon') {
                                puchamonEnemigo = new Puchamon('Empoleon', 'img/empoleon.png', 5, enemigo.id)

                            } else if (puchamonNombre === 'Decidueye') {
                                puchamonEnemigo = new Puchamon('Decidueye', 'img/decidueye.png', 5, enemigo.id)

                            }

                            puchamonEnemigo.x = enemigo.x
                            puchamonEnemigo.y = enemigo.y


                            return puchamonEnemigo

                        })

                    })
            }
        })
}




function moverDerecha() {
    puchamonJugadorObjeto.velocidadX = 5
}
function moverIzquierda() {
    puchamonJugadorObjeto.velocidadX = - 5

}

function moverArriba() {
    puchamonJugadorObjeto.velocidadY = -5

}
function moverAbajo() {
    puchamonJugadorObjeto.velocidadY = 5

}

function detenerMovimiento() {
    puchamonJugadorObjeto.velocidadX = 0
    puchamonJugadorObjeto.velocidadY = 0
}

function sePresionaUnaTecla(event) {
    switch (event.key) {
        case 'ArrowUp':
            moverArriba()

            break
        case 'ArrowDown':
            moverAbajo()
            break
        case 'ArrowRight':
            moverDerecha()
            break
        case 'ArrowLeft':
            moverIzquierda()
            break
        default:
            break
    }
}



function iniciarMapa() {

    puchamonJugadorObjeto = obtenerObjetoPuchamon(puchamonJugador)
    intervalo = setInterval(pintarCanvas, 50)  //esta funcion setInterval ejecuta cada 50 milisegundos la funcion pintarCanvas() 
    window.addEventListener('keydown', sePresionaUnaTecla)
    window.addEventListener('keyup', detenerMovimiento)
}

function obtenerObjetoPuchamon() {

    for (let i = 0; i < puchamones.length; i++) {
        if (puchamonJugador === puchamones[i].nombre) {
            //ataques = puchamones[i].ataques
            return puchamones[i]
        }

    }
}



function revisarColision(enemigo) {
    const arribaEnemigo = enemigo.y
    const abajoEnemigo = enemigo.y + enemigo.alto
    const derechaEnemigo = enemigo.x + enemigo.ancho
    const izquierdaEnemigo = enemigo.x


    const arribaJugador =
        puchamonJugadorObjeto.y + 25
    const abajoJugador =
        puchamonJugadorObjeto.y + puchamonJugadorObjeto.alto - 25
    const derechaJugador =
        puchamonJugadorObjeto.x + puchamonJugadorObjeto.ancho - 25
    const izquierdaJugador =
        puchamonJugadorObjeto.x + 25

    if ( abajoJugador < arribaEnemigo ||
        arribaJugador > abajoEnemigo ||
        derechaJugador < izquierdaEnemigo ||
        izquierdaJugador > derechaEnemigo
    ) {
        return
    }

    // asignarNumE(enemigo)
    detenerMovimiento()
    clearInterval(intervalo)
    enemigoId = enemigo.id
    sectionSeleccionarAtaque.style.display = "flex"
    sectionVerMapa.style.display = "none"

    seleccionarPuchamonEnemigo(enemigo)
    empezarMusicaCombate()
    //secuenciaAtaque()

}

function asignarNumE(enemigo) {
    if (enemigo === feraligatrEnemigo) {
        numE = 0
    }
    else if (enemigo === incineroarEnemigo) {
        numE = 1
    }
    else if (enemigo === serperiorEnemigo) {
        numE = 2
    }
    else if (enemigo === blazikenEnemigo) {
        numE = 5
    }
    else if (enemigo === empoleonEnemigo) {
        numE = 3
    }
    else if (enemigo === decidueyeEnemigo) {
        numE = 4
    }

}
botonJugar.addEventListener('click', iniciarJuego)
window.addEventListener("load", pantallaEmpezarAJugar)




