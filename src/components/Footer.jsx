import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
      <ul className="footer__courses">
        <li><Link to="/posts/courses/:Tecnologia">Tecnología</Link></li>
        <li><Link to="/posts/courses/:Biologia">Biología</Link></li>
        <li><Link to="/posts/courses/:Taller">Taller</Link></li>
      </ul>

    <div className="footer__copyright">
      <small>Todos los derechos reservados boludote. &copy; CopyRight, Santi.</small>
    </div>



    </footer>
  )
}

export default Footer
