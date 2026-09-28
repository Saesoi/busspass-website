import './home.css'
import "../components/hero.css"
import Hero from '../components/Hero'

export default function Home() {
  return(
    <>
      <main>
        <div className='hero-section'>
          <Hero className="hero-section-props"
          eyebrow="P2P SMART TRANSPORTATION"
          title="BUSSPASS"
          tagline="Smart. Simple. Seamless."
          intro={
            <>
            A biometric-based smart fare collection <br/> system designed for P2P transportation.
            </>
          }
          primaryButton="Learn More"
          secondaryButton="Get Started"
          />
        </div>
        <div>
              
        </div>
        
      </main>

      {/*Home Grid Layout*/}

      <section className='home-grid'>
        <div className='home-grid-item latest-announcements'>
          <h2 className="item1">Latest Announcements</h2>
          <div className="item2">
            <div className='area1'>
              <img src="src/assets/announcement-icon.png" alt="" />
            </div>
            <div className='area2'>
              <h2>System Maintenance</h2>
              <p>October 27, 2026</p>
              <p>Update here</p>
            </div>
            <div className='area3'>
              <a href="#">View Details →</a>
            </div>
          </div>
          <div className="item3">
            <div className='area1'>
              <img src="src/assets/announcement-icon.png" alt="" />
            </div>
            <div className='area2'>
              <h2>System Maintenance</h2>
              <p>October 27, 2026</p>
              <p>Update here</p>
            </div>
            <div className='area3'>
              <a href="#">View Details →</a>
            </div>
            <div className='area2'></div>
            <div className='area3'></div>
            <div className='area4'></div>
          </div>
        </div>
      </section>
    </>   
  )
}

      