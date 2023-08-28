import { styled } from 'styled-components'

const LayoutContainer = styled.main`
  margin: 0 11rem;
  height: 100vh;
  background: ${({ theme }) => theme.colors.gray_900};

  @media (max-width: 880px) {
    display: flex;
    justify-content: center;

    margin: 0 4rem;
  }
`

const LayoutContent = styled.aside`
  background: ${({ theme }) => theme.colors.gray_900};

  @media (max-width: 880px) {
    max-width: 550px;
  }

  @media (max-width: 620px) {
    max-width: 375px;
  }
`

export default {
  LayoutContainer,
  LayoutContent,
}
