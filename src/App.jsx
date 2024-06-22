import { useState } from 'react'
import './app.scss'
import Nav from './components/nav/Nav'
import Hero from './components/hero/Hero'
import Why from './components/why/Why'
import What from './components/what/What'
import Recipe from './components/recipe/Recipe'
import TagPage from './components/tagPage/TagPage'
import Plans from './components/plans/Plans'
import Questions from './components/questions/Questions'
import Footer from './components/footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav />
      <Hero />
      <Why />
      <What />
      <Recipe />
      <TagPage />
      <Plans />
      <Questions />
      <Footer />
    </>
  )
}

export default App
