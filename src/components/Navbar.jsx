import './navbar.css'

export default function Navbar() {
  return(
    <header>
      <nav>
        <div className="logo">
          <h3>BUSSPASS</h3>
        </div>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#routes">Routes</a>
          <a href="#fares">Fares</a>
          <a href="#how-it-works">How It Works</a>
          <a href="#announcement">Announcement</a>
          <a href="#about">About</a>
          <a href="#faq">FAQ</a>
        </div>
        <div className="dl-links">
          <a href="#download-app">
            <button className="dl-btn">Download App</button>
          </a>
        </div>
      </nav>
    </header>
  )
}