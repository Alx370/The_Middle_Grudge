import middleLogo from '../assets/TheMiddleLogo.webp'
import '../styles/Home.css'

function Home() {
  return (
    <>
      <div className="hero-copy">
        <h1 className="page-title">
          The Middle
          <span>Grudge<span className="title-period">.</span></span>
        </h1>
        <p className="page-motto">No slight forgotten.</p>
        <p className="hero-description">
          Every grudge has a story. A record of those who crossed The Middle,
          drawn from the world of Project Moon.
        </p>

        <a className="archive-link" href="#/archive">
          Enter the archive
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M4 12h16m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </a>
      </div>

      <div className="emblem-display">
        <div className="card-back" aria-hidden="true" />
        <figure className="member-card">
          <div className="card-heading">THE FIVE FINGERS</div>
          <div className="emblem-frame">
            <span className="emblem-ring" aria-hidden="true" />
            <img
              className="middle-emblem"
              src={middleLogo}
              width="200"
              height="200"
              alt="The Middle emblem: a skull bound in purple chains"
              fetchPriority="high"
            />
          </div>
          <figcaption>
            <span className="card-caption">AFFILIATION</span>
            <span className="card-name">The Middle</span>
            <span className="card-rule" aria-hidden="true" />
          </figcaption>
        </figure>
        <span className="display-caption">EVERYTHING FOR FAMILY.</span>
      </div>
    </>
  )
}

export default Home
