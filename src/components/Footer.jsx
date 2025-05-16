import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Footer = () => {

  const [courses, setCourses] = useState([])

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/courses`)
        setCourses(res.data.courses) // Asegúrate que la respuesta sea así
      } catch (err) {
        console.error(err)
      }
    }

    fetchCourses()
  }, [])




  return (
    <footer>
      <ul className="footer__courses">
        {courses.map(course => (
          <li key={course._id}>
            <Link to={`/posts/courses/${course.name}`}>{course.name}</Link>
          </li>
        ))}
      </ul>

    <div className="footer__copyright">
      <small>Todos los derechos reservados boludote. &copy; CopyRight, Santi.</small>
    </div>



    </footer>
  )
}

export default Footer
