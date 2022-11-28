import React from 'react'
import { useNavigate } from "react-router-dom"


export default function dennis() {
  let navigate = useNavigate()
  return (
    <div>
      <h1>Dennis Ritchie</h1>
      <div>
        <h2>biografia</h2>
        <p>
        Dennis MacAlistair Ritchie (9 de septiembre de 1941 - 12 de octubre de 2011), Graduado de Física y Matemáticas aplicadas de Harvard, fue un científico de la computación estadounidense.1​

Colaboró en el diseño y desarrollo de los sistemas operativos Multics y Unix, así como el desarrollo de varios lenguajes de programación como el C, tema sobre el cual escribió un célebre clásico de las ciencias de la computación junto a Brian Wilson Kernighan: El lenguaje de programación C.

Recibió el Premio Turing de 1983 por su desarrollo de la teoría de sistemas operativos genéricos y su implementación en la forma del sistema Unix. En 1998 le fue concedida la Medalla Nacional de Tecnología de los Estados Unidos de América. Se jubiló en 2007, siendo todavía entonces el jefe del departamento de investigación en software de sistemas de Alcatel-Lucent.

Nació en Bronxville (Nueva York) el 9 de septiembre de 1941. Obtuvo dos grados en física y matemática aplicada.

En 1967 entró a trabajar en los Laboratorios Bell, donde participó en los equipos que desarrollaron Multics, BCPL, ALTRAN y el lenguaje de programación B..
        </p>
        <img src="https://upload.wikimedia.org/wikipedia/commons/2/23/Dennis_Ritchie_2011.jpg" alt="" />
      </div>
      <button onClick={()=>{navigate("/Home")}}> change to Home page </button>
    </div>
  )
}
