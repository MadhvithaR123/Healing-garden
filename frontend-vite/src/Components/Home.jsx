import React from "react"
import "./Home.css"
export default function Home() {
    return (
      <main className="home">
        <section className="hero">
          <h1>Therapeutic Workshops for Everyone</h1>
          <p>Join our programs to promote mental wellness and creativity.</p>
        </section>
        <p>hello madhvitha</p>
        <h>hello world</h>
  
        <section className="categories">
          <h2>Our Workshops</h2>
          <div className="cards">
            <div className="card">Mindful Leadership</div>
            <div className="card">Team Bonding</div>
            <div className="card">Creativity & Innovation</div>
          </div>
        </section>
  
        <section className="testimonials">
          <h2>What Our Clients Say</h2>
          <div className="testimonial">“Amazing experience! Highly recommend.”</div>
        </section>
      </main>
    )
  }