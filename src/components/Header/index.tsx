import { Sling as Hamburger } from 'hamburger-react'

import Logo from '../../assets/logo.svg'

import Styles from './styles'
import { useState } from 'react'

export function Header() {
  const [showMenu, setShowMenu] = useState(false)

  console.log(showMenu)

  return (
    <Styles.Header showMenu={showMenu}>
      <img src={Logo} alt="" />

      <nav>
        <ul>
          <li>
            <a href="">Sobre mim</a>
          </li>
          <li>
            <a href="">Projetos</a>
          </li>
          <li>
            <a href="">Blog</a>
          </li>
          <li>
            <a href="">Contato</a>
          </li>
          <li>
            <a href="https://drive.google.com/u/0/uc?id=1bwpF5xXSrjdGbRCrnu3U6bhgb9FAKald&export=download">
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
              <a href="">Sobre mim</a>
            </li>
            <li>
              <a href=""> Projetos</a>
            </li>
            <li>
              <a href=""> Blog</a>
            </li>
            <li>
              <a href=""> Contato</a>
            </li>
            <li>
              <a href="https://drive.google.com/u/0/uc?id=1bwpF5xXSrjdGbRCrnu3U6bhgb9FAKald&export=download">
                <button>Download CV</button>
              </a>
            </li>
          </ul>
        </nav>
      )}
    </Styles.Header>
  )
}
