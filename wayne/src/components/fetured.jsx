import React from 'react'
import "./fetured.css"

const fetured = () => {
  return (
    <>
          <section className="hero-section">
        <nav className="nav">
          <div className="logo">
            <img 
              src="../src/assets/42eaf984525ed3369eff2ddc136a37f84641dcdd.jpg" 
              alt="Buildlink Logo" 
            />
            <h1>Buildlink</h1>
          </div>

          <div className="links">
            <a href="#">Home</a>
            <a href="#">Service</a>
            <a href="#">About Us</a>
            <a href="#">Projects</a>
            <a href="#">Contact Us</a>
          </div>

          <div className="profile-pic">
            <button>Register</button>
            <img 
              src="../src/assets/d4b6a664ec940730736fbddd02d591232d944018.jpg" 
              alt="Profile" 
            />
          </div>
        </nav>

        <div className="content-section">
          <h3><span>Welcome</span> to Buildlinks</h3>
          <h1>Featured <span>Provider</span></h1>
          <h2>
            <span>Lets </span>find out what we are all looking for at Buildlink
          </h2>
        </div>

        <div className="explore-container">
          <button className="explore-btn">Explore more</button>
          <div className="icon-circle">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </section>
      <section className="features">
        <div className="cats">
          <button className="main">All</button>
          <button>Builders</button>
          <button>Plumbers</button>
          <button>Company</button>
          <button>Part Time</button>
        </div>

        <div className="featured-provider">
          <h3>Featured Providers</h3>
          <h1>Where <span>Our Links</span></h1>
          <div className="featured-images">
            <img src="../src/assets/53a38685379452e4d05627b126a9461494f0a1cb.jpg" alt="Provider 1" />
            <img src="../src/assets/0d7f2704ea1a776b4e72bde51408e2a32e660123.jpg" alt="Provider 2" />
            <img src="../src/assets/8b2f0d01979e92ec6d77c49663de9779b49c8e1e.jpg" alt="Provider 3" />
            <img src="../src/assets/37dc4574df89df4f61a121dee35cf59d779d1dd8.jpg" alt="Provider 4" />
          </div>
        </div>
      </section>
      <section className="search-results">
        <div className="top-text">
            <h1>Search Results</h1>
            <h1>More</h1>
        </div>
        <div className="cards">
            
        </div>
      </section>

    </>
  )
}

export default fetured