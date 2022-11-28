import React from 'react'
import { useNavigate } from "react-router-dom"


export default function mark() {
  let navigate = useNavigate()
  return (
    <div>
    <h1>Mark Zuckerberg</h1>
    <div>
      <h2>biografia</h2>
      <p>
      Mark Elliot Zuckerberg (White Plains, Nueva York; 14 de mayo de 1984) es un programador y empresario estadounidense, uno de los creadores y fundadores de Facebook (desde 2021, Meta Platforms) y la red social homónima, y su actual presidente. Para desarrollar la red, Zuckerberg contó con el apoyo de sus compañeros de la Universidad de Harvard, el coordinador de ciencias de la computación y sus compañeros de habitación Eduardo Saverin, Dustin Moskovitz y Chris Hughes.

En abril de 2018, fue el personaje más joven en aparecer en la lista de multimillonarios de la revista Forbes, con una fortuna valorada en 73.200 millones de dólares, convirtiéndose en la octava persona más rica del mundo.1​

Desde 2010, la revista Time ha nombrado a Zuckerberg entre las 100 personas más ricas e influyentes del mundo como parte de su Persona del año. A mediados de 2018, Forbes lo colocó como la quinta persona más rica del mundo.

Zuckerberg nació en 1984 en White Plains, Nueva York. Es hijo de Karen Kempner, psiquiatra, y de Edward Zuckerberg, dentista. Sus antepasados provenían de Alemania, Austria y Polonia. Él y sus tres hermanas, Randi, Donna y Arielle, se criaron en Dobbs Ferry, Nueva York, pequeña aldea del condado de Westchester, aproximadamente 33 kilómetros al norte de Midtown Manhattan. Zuckerberg creció dentro de la comunidad judía, y tuvo su Bar Mitzvah cuando cumplió 13 años.
      </p>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg/800px-Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg" alt="" />
    </div>
    <button onClick={()=>{navigate("/Home")}}> change to Home page </button>
  </div>
  )
}
