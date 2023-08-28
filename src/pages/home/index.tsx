import Linkedin from '../../assets/LinkedinLogo.svg'
import Instagram from '../../assets/InstagramLogo.svg'
import Github from '../../assets/GithubLogo.svg'
import Twitter from '../../assets/TwitterLogo.svg'

import Banner from '../../assets/banner.png'

import Styles from './styles'

export function Home() {
  return (
    <Styles.ContainerHome>
      <Styles.ContentHome>
        <h1>Olá, eu sou o Nikolas Santana :)</h1>

        <p>
          Eu sou o Nikolas, tenho 20 anos e sou um dev movido à curiosidade e
          café, evangelista de ReactJs e defensor do TypesScript.
        </p>

        <div className="links">
          <a
            href="https://github.com/Nikaum-js"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Github} alt="github" />
          </a>
          <a
            href="https://www.linkedin.com/in/nikolas-santana-/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Linkedin} alt="linkedin" />
          </a>
          <a
            href="https://twitter.com/NikaumJs"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Twitter} alt="twitter" />
          </a>
          <a
            href="https://www.instagram.com/nikolas.jsx/?next=%2F"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Instagram} alt="Instagram" />
          </a>
        </div>
      </Styles.ContentHome>

      <img src={Banner} alt="" />
    </Styles.ContainerHome>
  )
}
