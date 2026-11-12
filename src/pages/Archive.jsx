import '../styles/Archive.css'

function Archive() {
  return (
    <>
      <a className="back-link" href="#/"> Back to The Middle Homepage</a>
      <h1 className="page-title">Grudge Archive<span className="title-period">.</span></h1>
      <p className="page-motto">No slight forgotten.</p>
      <div className="archive-empty">
        <img src="/The_Book_of_Vengeance.webp" width="120" height="120" alt="" />
        <h2>The book is yet to be opened.</h2>
        <p>Grudges and their stories will be recorded here.</p>
      </div>
    </>
  )
}

export default Archive
