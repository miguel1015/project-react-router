import "./styles.css"
import  {Link} from "react-router-dom"
export function Home() {
  return(
      <div> <h1>THE BEST 5 PROGRAMERS </h1>
        <div className="links-links">
          <Link className="link1" to="/bill"> Bill </Link>
          <Link className="link2" to="/brenda"> Brenda </Link>
          <Link className="link3" to="/dennis"> Dennis </Link>
          <Link className="link4" to="/mark"> Mark </Link>
          <Link className="link5" to="/steve"> Steve </Link>
        </div>
        <div className="parrafo">
          <p>
          The job of a computer programmer is vitally important in today’s digital-focused economy, which is why the number of openings in this field continues to grow.

Programmers write code for computer programs and mobile applications. They also are involved in maintaining, debugging and troubleshooting systems and software to ensure that everything is running smoothly.

Programming skills are essential for many technology disciplines, but are in especially high demand for software and web development roles. According to the US Bureau of Labor Statistics (BLS), web development jobs are projected to grow by as much as 30% from 2021-2031, adding another 28,900 new jobs.

If you’re looking for an entry-level technology job with ample opportunities for career advancement and specialization, computer programming could be the right path for you.
          </p>
          <img src="https://www.limestone.edu/sites/default/files/styles/news_preview_image/public/2022-03/computer-programmer.jpg?h=2d4b268f&itok=JOcIEe9u" alt="" />
        </div>
      </div>
  )
  
}
