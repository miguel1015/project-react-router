import "./pagina.css"
import React ,{Suspense, lazy} from "react"
// const img = lazy(() => import ("../components/"))
import { useNavigate } from "react-router-dom"

export default function Bill() {
  let navigate = useNavigate()

  return (
    <div>
      <h1>Bill Gates</h1>
      <div>
        <h2>biografia</h2>
        <p>
        William Henry Gates III (born October 28, 1955) is an American business magnate and philanthropist. He is a co-founder of Microsoft, along with his late childhood friend Paul Allen.[2][3] During his career at Microsoft, Gates held the positions of chairman, chief executive officer (CEO), president and chief software architect, while also being the largest individual shareholder until May 2014.[4] He was a major entrepreneur of the microcomputer revolution of the 1970s and 1980s.

Gates was born and raised in Seattle. In 1975, he and Allen founded Microsoft in Albuquerque, New Mexico. It became the world's largest personal computer software company.[5][a] Gates led the company as chairman and CEO until stepping down as CEO in January 2000, succeeded by Steve Ballmer, but he remained chairman of the board of directors and became chief software architect.[8] During the late 1990s, he was criticized for his business tactics, which have been considered anti-competitive. This opinion has been upheld by numerous court rulings.[9] In June 2008, Gates transitioned to a part-time role at Microsoft and full-time work at the Bill & Melinda Gates Foundation, the private charitable foundation he and his then-wife Melinda established in 2000.[10] He stepped down as chairman of the board of Microsoft in February 2014 and assumed a new post as technology adviser to support the newly appointed CEO Satya Nadella.[11] In March 2020, Gates left his board positions at Microsoft and Berkshire Hathaway to focus on his philanthropic efforts on climate change, global health and development, and education.[12]

Since 1987, Gates has been included in the Forbes list of the world's wealthiest people.[13][14] From 1995 to 2017, he held the Forbes title of the richest person in the world every year except from 2010 to 2013.[15] In October 2017, he was surpassed by Amazon founder and CEO Jeff Bezos, who had an estimated net worth of US$90.6 billion compared to Gates's net worth of US$89.9 billion at the time.[16] As of November 2022, Gates had an estimated net worth of US$107 billion, making him the fifth-richest person in the world.[17]

Later in his career and since leaving day-to-day operations at Microsoft in 2008, Gates has pursued many business and philanthropic endeavors. He is the founder and chairman of several companies, including BEN, Cascade Investment, bgC3, and TerraPower. He has given sizable amounts of money to various charitable organizations and scientific research programs through the Bill & Melinda Gates Foundation, reported to be the world's largest private charity.[18] Through the foundation, he led an early 21st century vaccination campaign that significantly contributed to the eradication of the wild poliovirus in Africa.[19][20] In 2010, Gates and Warren Buffett founded The Giving Pledge, whereby they and other billionaires pledge to give at least half of their wealth to philanthropy.
        </p>
        <Suspense fallback={<h1> esperaaaaaaa.... </h1>}> 
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Bill_Gates_2017_%28cropped%29.jpg/800px-Bill_Gates_2017_%28cropped%29.jpg" alt="" />
        </Suspense>

      </div>
      <button onClick={()=>{navigate("/Home")}}> change to Home page </button>
    </div>
  )
}
