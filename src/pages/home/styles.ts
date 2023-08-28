import { styled } from 'styled-components'

const ContainerHome = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: calc(100vh - 240px);

  img {
    width: 600px;
    height: 356px;
  }

  @media (max-width: 1380px) {
    flex-direction: column-reverse;
    justify-content: center;
  }

  @media (max-width: 620px) {
    img {
      width: 400px;
      height: 237px;
    }
  }

  @media (max-width: 430px) {
    margin-top: 20px;
  }
`

const ContentHome = styled.div`
  p {
    font-size: ${({ theme }) => theme.fontsSize.newRegular}rem;
    width: 500px;
    margin-bottom: 32px;
    line-height: 140%;
  }

  h1 {
    font-weight: 900;
    width: 400px;
    font-size: ${({ theme }) => theme.fontsSize.large}rem;
    line-height: 120%;
    color: ${({ theme }) => theme.colors.white};

    margin-bottom: 24px;
  }

  img {
    width: 36px;
    height: 36px;

    cursor: pointer;

    margin-right: 16px;
  }

  @media (max-width: 1380px) {
    padding: 2rem 0;
  }

  @media (max-width: 620px) {
    h1 {
      width: 320px;
    }

    p {
      width: 320px;
    }
  }
`

export default {
  ContainerHome,
  ContentHome,
}
