import Curriculo from '../../assets/curriculo.pdf'
import Logo from '../../assets/logo.svg'

import { useState } from 'react'
import { Sling as Hamburger } from 'hamburger-react'
import { Link, Navigate } from 'react-router-dom'

import Styles from './styles'

export function Header() {
  const [showMenu, setShowMenu] = useState(false)

  function handleChangePage(page: string) {
    setShowMenu(false)

    return <Navigate to={page} />
  }

  return (
    <Styles.Header showMenu={showMenu}>
      <Link to="/">
        <img src={Logo} alt="" />
      </Link>

      <nav>
        <ul>
          <li>
            <Link to="/about-me">Sobre mim</Link>
          </li>
          <li>
            <Link to="/projects">Projetos</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>

          <li>
            <a href={Curriculo} download>
              <button>Download CV</button>
            </a>
          </li>
        </ul>
      </nav>

      <Hamburger
        rounded
        toggled={showMenu}
        toggle={setShowMenu}
        duration={0.8}
      />

      {showMenu && (
        <nav className="responsive-navbar">
          <ul>
            <li>
              <Link to="/about-me" onClick={() => setShowMenu(false)}>
                Sobre mim
              </Link>
            </li>
            <li>
              <Link to="/projects" onClick={() => setShowMenu(false)}>
                Projetos
              </Link>
            </li>
            <li>
              <Link to="/blog" onClick={() => setShowMenu(false)}>
                Blog
              </Link>
            </li>
            <li>
              <a href={Curriculo} download>
                <button>Download CV</button>
              </a>
            </li>
          </ul>
        </nav>
      )}
    </Styles.Header>
  )
}
