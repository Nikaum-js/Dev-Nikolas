import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'

import Styles from './styles'

export function DefaultLayout() {
  return (
    <>
      <Styles.LayoutContainer>
        <Styles.LayoutContent>
          <Header />

          <Outlet />
        </Styles.LayoutContent>
      </Styles.LayoutContainer>
    </>
  )
}
