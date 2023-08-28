import { css, styled } from 'styled-components'

interface HamburgerMenuHeaderProps {
  showMenu: boolean
}

const Header = styled.header<HamburgerMenuHeaderProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 120px;

  img {
    width: 150px;
    height: 35px;
  }

  nav {
    ul {
      display: flex;
      align-items: center;

      li {
        font-size: ${({ theme }) => theme.fontsSize.regular}rem;
        font-weight: medium;
        cursor: pointer;
        padding: 12px;

        a {
          color: ${({ theme }) => theme.colors.white};

          &:hover {
            opacity: 0.7;
            transition: 0.2s;
          }
        }

        button {
          width: 150px;
          height: 50px;
          background: ${({ theme }) => theme.colors.red};
          border-radius: 6px;

          font-size: ${({ theme }) => theme.fontsSize.small}rem;
          font-weight: bold;
          color: ${({ theme }) => theme.colors.white};

          &:not(:disabled):hover {
            background: ${({ theme }) => theme.colors.red_700};
            transition: background-color 0.2s;
          }
        }
      }
    }
  }

  .hamburger-react {
    z-index: 15;
    color: ${({ theme }) => theme.colors.gray_100};

    display: none;

    ${({ showMenu }) =>
      showMenu &&
      css`
        position: fixed !important;
        right: 28px;
      `}
  }

  .responsive-navbar {
    position: fixed;
    top: 0;
    left: 0;

    width: 100vw;
    height: 100vh;

    background-color: ${({ theme }) => theme.colors.gray_900};

    z-index: 10;

    display: flex;
    justify-content: center;
    align-items: center;

    ul {
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;

      transition-duration: 0.5s;

      li {
        padding: 1rem 0;

        a {
          font-size: 1.615rem;
          font-weight: medium;
          color: ${({ theme }) => theme.colors.gray_100};
        }
      }
    }
  }

  @media (max-width: 980px) {
    nav {
      display: none;
    }

    .hamburger-react {
      display: block;
    }
  }
`

export default {
  Header,
}
