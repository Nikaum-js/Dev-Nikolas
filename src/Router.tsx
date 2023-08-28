import { Routes, Route } from 'react-router-dom'

import { DefaultLayout } from './layouts/DefaultLayout'
import { Home } from './pages/home'
import { Projects } from './pages/Projects'
import { AboutMe } from './pages/AboutMe'
import { Blog } from './pages/Blog'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
      </Route>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/projects" element={<Projects />} />
      </Route>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/about-me" element={<AboutMe />} />
      </Route>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/blog" element={<Blog />} />
      </Route>
    </Routes>
  )
}
