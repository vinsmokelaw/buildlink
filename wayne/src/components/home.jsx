import React from 'react'
import "./home.css"

const Home = () => {
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
          <h1>Experts Near <span>You</span></h1>
          <h2>
            <span>Certified</span> builders, plumbers, and electricians across <span>Zimbabwe</span> —<br />
            compare, connect, and hire with confidence.
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

      <section className="about">
        <div className="about-img">
          <img src="../src/assets/Group 950.png" alt="About Buildlink" />
        </div>
      
        <div className="about-text">
          <span className="tag">About us</span>
          <h2 className="title">
            Who we <span>are</span>
          </h2>
          <p>
            At <strong>Buildlink Zimbabwe</strong>, we believe in building stronger communities—
            one project at a time. Whether you’re constructing a new home,
            fixing a burst pipe, or rewiring your office.
          </p>
          <ul className="features-list">
            <li>Our services are cheap and we accept credit discount. Prices that are affordable for you.</li>
            <li>We provide reliable plumbing and electrical solutions with experience you can trust.</li>
            <li>Affordable pricing while maintaining quality and customer satisfaction.</li>
          </ul>
          <a href="#" className="btn-read">Read more</a>
      
          <div className="author">
            <img src="https://via.placeholder.com/40" alt="Ayanda Masango" />
            <div className="author-info">
              <h5>Ayanda Masango</h5>
              <small>Call our office for help</small>
            </div>
          </div>
        </div>
      </section>
     <section className="mission">
       <div className="mission-container">
         <div className="mission-text">
           <h3>Our Mission</h3>
           <h1>Discover the Core Principles That Guide Us</h1>
         </div>
     
         <div className="mission-content">
           {/* Left Image */}
           <div className="mission-image-container">
             <div className="mission-image">
               <img src="../src/assets/Rectangle 283.png" alt="Our Mission" />
             </div>
           </div>
     
           {/* Right Cards */}
           <div className="cards">
             <div className="card">
               <div className="icon">👁️</div>
               <h2>Our Vision</h2>
               <p>
                 To be Zimbabwe’s leading digital platform for connecting people with
                 trusted, skilled service providers in the construction, plumbing, and
                 electrical sectors—empowering communities through accessible,
                 reliable, and professional services.
               </p>
               <div className="quote">❞</div>
             </div>
     
             <div className="card">
               <div className="icon">💡</div>
               <h2>Our Values</h2>
               <p>
                 Integrity, innovation, and inclusivity guide everything we do. We
                 believe in building trust, embracing new technology, and ensuring
                 equal opportunities for both clients and service providers.
               </p>
               <div className="quote">❞</div>
             </div>
           </div>
         </div>
       </div>
     </section>
    <div class="container">

        <header class="header">
            <div class="service-tag">
                <span class="tag-text">Our Service</span>
                <div class="tag-icon">
                    <i class="fas fa-tools"></i>
                </div>
            </div>
            
            <h1 class="main-heading">
                Connecting You to Trusted Builders,<br />
                Plumbers, and <span class="highlight">Electricians Across Zimbabwe</span>
            </h1>
        </header>

        <section class="services-grid">
            <div class="service-card primary-card">
                <div class="card-header">
                    <div class="icon-container">
                        <div class="service-icon construction-icon">
                            <i class="fas fa-hard-hat"></i>
                            <div class="worker-body">
                                <i class="fas fa-hammer"></i>
                            </div>
                        </div>
                        <div class="shield-badge">
                            <i class="fas fa-shield-alt"></i>
                            <i class="fas fa-check shield-check"></i>
                        </div>
                    </div>
                </div>
                <h3 class="service-title">General <span class="title-accent">Construction</span></h3>
                <p class="service-description">
                    From residential builds to commercial projects — find expert builders you can trust.
                </p>
            </div>

            <div class="service-card">
                <div class="card-header">
                    <div class="icon-container">
                        <div class="service-icon plumbing-icon">
                            <i class="fas fa-faucet"></i>
                            <div class="water-drops">
                                <span class="drop"></span>
                                <span class="drop"></span>
                                <span class="drop"></span>
                            </div>
                        </div>
                        <div class="shield-badge">
                            <i class="fas fa-shield-alt"></i>
                            <i class="fas fa-check shield-check"></i>
                        </div>
                    </div>
                </div>
                <h3 class="service-title">Plumbing <span class="title-accent">Service</span></h3>
                <p class="service-description">
                    Fix leaks, install water systems, or complete full bathroom fittings with skilled plumbers.
                </p>
            </div>

            <div class="service-card">
                <div class="card-header">
                    <div class="icon-container">
                        <div class="service-icon electrical-icon">
                            <i class="fas fa-bolt"></i>
                        </div>
                        <div class="shield-badge">
                            <i class="fas fa-shield-alt"></i>
                            <i class="fas fa-check shield-check"></i>
                        </div>
                    </div>
                </div>
                <h3 class="service-title">Electrical <span class="title-accent">Work</span></h3>
                <p class="service-description">
                    Hire certified electricians for installations, repairs, and wiring upgrades.
                </p>
            </div>

            <div class="service-card">
                <div class="card-header">
                    <div class="icon-container">
                        <div class="service-icon companies-icon">
                            <i class="fas fa-building"></i>
                        </div>
                        <div class="shield-badge">
                            <i class="fas fa-shield-alt"></i>
                            <i class="fas fa-check shield-check"></i>
                        </div>
                    </div>
                </div>
                <h3 class="service-title">Verified Service <span class="title-accent">Companies</span></h3>
                <p class="service-description">
                    Connect with registered companies for large-scale project
                </p>
            </div>
        </section>
    </div>
    <section class="featured-section">
    <div class="container">
 
      <div class="badge">
        <span class="badge-black">Featured</span>
        <span class="badge-white"> Service Providers</span>
      </div>

      <h2 class="main-heading">
        Meet Top-Rated Professionals Ready 
        <span class="highlight">to Work With You</span>
      </h2>

      <p class="description">
        We highlight trusted and highly-rated service providers from across Zimbabwe. 
        These professionals have demonstrated excellence in their work, received 
        outstanding client reviews, and are verified by our team. Whether you’re 
        building a home, fixing a leak, or installing power systems — you’re in good hands.
      </p>

      <div class="providers-grid">
        <div class="provider-card">
          <img class="profile" src="https://c.animaapp.com/mfikhslxIleQ1g/img/ellipse-44.png" alt="Samuel Moyo"/>
          <div class="card-content">
            <img class="service-icon" src="https://c.animaapp.com/mfikhslxIleQ1g/img/construction-2.png" alt="Construction"/>
            <h3 class="name">Samuel Moyo</h3>
            <p class="text">
              Specializes in residential and commercial construction, 
              including roofing, tiling, and renovations.
            </p>
          </div>
        </div>
        <div class="provider-card">
          <img class="profile" src="https://c.animaapp.com/mfikhslxIleQ1g/img/ellipse-44-3.png" alt="Grace Ncube"/>
          <div class="card-content">
            <img class="service-icon" src="https://c.animaapp.com/mfikhslxIleQ1g/img/map-plumber.svg" alt="Plumber"/>
            <h3 class="name">Grace Ncube</h3>
            <p class="text">
              Experienced in pipework, bathroom and kitchen installations, 
              and water system repairs.
            </p>
          </div>
        </div>
        <div class="provider-card">
          <img class="profile" src="https://c.animaapp.com/mfikhslxIleQ1g/img/ellipse-44-1.png" alt="John Chikwara"/>
          <div class="card-content">
            <img class="service-icon" src="https://c.animaapp.com/mfikhslxIleQ1g/img/quick-mode-on-3.png" alt="Electrician"/>
            <h3 class="name">John Chikwara</h3>
            <p class="text">
              Certified electrician offering wiring, lighting, 
              and solar power installations.
            </p>
          </div>
        </div>

        <div class="provider-card">
          <img class="profile" src="https://c.animaapp.com/mfikhslxIleQ1g/img/ellipse-44-2.png" alt="Buildwise Contractors"/>
          <div class="card-content">
            <img class="service-icon" src="https://c.animaapp.com/mfikhslxIleQ1g/img/organization.png" alt="Company"/>
            <h3 class="name">Buildwise Contractors</h3>
            <p class="text">
              A trusted team of builders with a strong portfolio 
              in housing development and structural renovations.
            </p>
          </div>
        </div>

      </div>

      <button class="view-more">View More</button>
    </div>
  </section>


     

    </>
  )
}

export default Home
