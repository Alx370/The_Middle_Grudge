import { useEffect, useRef, useState } from 'react'
import chainsOfLoyalty from './assets/LCB-Chains_of_Loyalty.webp'
import './styles/App.css'
import Home from './pages/Home.jsx'
import Archive from './pages/Archive.jsx'
import Soundtrack from './components/Soundtrack.jsx'

function App() {
  const [page, setPage] = useState(window.location.hash)
  const main = useRef(null)
  const isArchive = page === '#/archive'

  useEffect(() => {
    function changePage() {
      setPage(window.location.hash)
      main.current?.focus({ preventScroll: true })
      window.scrollTo(0, 0)
    }

    window.addEventListener('hashchange', changePage)
    return () => window.removeEventListener('hashchange', changePage)
  }, [])

  useEffect(() => {
    document.title = isArchive ? 'Grudge Archive — The Middle' : 'The Middle Grudge'
  }, [isArchive])

  return (
    <div className="app-shell">
      <header className="site-header">
        <a className="brand" href="#/" aria-label="The Middle Grudge home">
          <img src={chainsOfLoyalty} width="44" height="44" alt="" />
          <span>
            THE MIDDLE
            <span className="brand-subtitle">GRUDGE ARCHIVE</span>
          </span>
        </a>
        <span className="header-note">A PROJECT MOON FAN PROJECT</span>
      </header>

      <main ref={main} tabIndex={-1} className={isArchive ? 'archive' : 'hero'}>
        {isArchive ? <Archive /> : <Home />}
      </main>

      <footer className="site-footer">
        <span className="archive-status">
          <span aria-hidden="true" />
          THE ARCHIVE IS TAKING SHAPE
        </span>
        <Soundtrack />
      </footer>
    </div>
  )
}

export default App
