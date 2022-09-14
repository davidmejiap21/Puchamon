const express = require('express') //asi se importan las librerias, importamos express js para usarlo en el proyecto
const cors = require('cors')

const app = express() // creamos una aplicacion con express js 

app.use(express.static('public'))
app.use(cors()) //ayuda a desabilitar los posibles errores relacionados con cors
app.use(express.json())// sirve para habilitar peticiones post que tengan contenido json

const jugadores = []

class Jugador {
    constructor(id) {
        this.id = id
    }

    asignarPuchamon(puchamon) {
        this.puchamon = puchamon
    }

    actualizarPosicion(x, y) {
        this.x = x
        this.y = y
    }

    asignarAtaques(ataques){
        this.ataques = ataques
    }
}

class Puchamon {
    constructor(nombre) {
        this.nombre = nombre
    }
}

app.get("/unirse", (req, res) => {
    const id = `${Math.random()}`

    const jugador = new Jugador(id)

    jugadores.push(jugador)

    res.setHeader('Access-Control-Allow-Origin', '*')

    res.send(id) // esto le dice a la aplicacion que cuando reciba una peticion responda un "hola pirobo"
})

app.post("/puchamon/:jugadorId", (req, res) => {
    const jugadorId = req.params.jugadorId || ""
    const nombre = req.body.puchamon || ""
    const puchamon = new Puchamon(nombre)

    const jugadorIndex = jugadores.findIndex((jugador) => jugadorId === jugador.id)
    if (jugadorIndex >= 0) {
        jugadores[jugadorIndex].asignarPuchamon(puchamon)
    }
    console.log(jugadores)
    console.log(jugadorId)
    res.end()
})

app.post("/puchamon/:jugadorId/posicion", (req, res) => {
    const jugadorId = req.params.jugadorId || ""
    const x = req.body.x || 0
    const y = req.body.y || 0

    const jugadorIndex = jugadores.findIndex((jugador) => jugadorId === jugador.id)

    if (jugadorIndex >= 0) {
      jugadores[jugadorIndex].actualizarPosicion(x, y)
    }

    const enemigos = jugadores.filter((jugador) =>{
        return jugadorId !== jugador.id && jugador.puchamon
    });


    res.send({
        enemigos
    })
    res.end()
})

app.post("/puchamon/:jugadorId/ataques", (req, res) => {
    const jugadorId = req.params.jugadorId || ""
    const ataques = req.body.ataques || []

  
  const jugadorIndex = jugadores.findIndex((jugador) => jugadorId === jugador.id)

  if (jugadorIndex >= 0) {
    jugadores[jugadorIndex].asignarAtaques(ataques)
  }
   
    res.end()
})

app.get("/puchamon/:jugadorId/ataques", (req, res) => {
    const jugadorId = req.params.jugadorId || ""
    const jugador = jugadores.find((jugador) => jugador.id === jugadorId)
    res.send({
      ataques: jugador.ataques || []
    })
  })

app.listen(8080, () => { // esto le indica al programa que debe escuchar todo el tiempo las peticiones que se le hagan al puerto 8080
    console.log('Servidor Funcionando')
})

