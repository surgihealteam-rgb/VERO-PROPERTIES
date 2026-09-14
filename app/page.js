'use client';

import { useState } from 'react';

const WHATSAPP = '919381087752'; // Replace with VERO's final WhatsApp number
const wa = (text) => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`;

export default function Home() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({name:'', phone:'', type:'', area:'', budget:'', timeline:''});

  function submit(e) {
    e.preventDefault();
    const msg = `VERO Property Enquiry\nName: ${form.name}\nMobile: ${form.phone}\nLooking for: ${form.type}\nPreferred area: ${form.area}\nBudget: ${form.budget}\nTimeline: ${form.timeline}`;
    window.open(wa(msg), '_blank');
    setSent(true);
  }

  return (
    <main>
      <nav className="nav">
        <div className="brand">
          <div className="logoMark">V</div>
          <div><b>VERO</b><span>PROPERTIES</span></div>
        </div>
        <div className="navlinks">
          <a href="#properties">Properties</a><a href="#why">Why VERO</a><a href="#about">About</a><a href="#contact">Contact</a>
        </div>
        <a className="navcta" href="#enquire">Find a Property</a>
      </nav>

      <section className="hero">
        <div className="heroText">
          <div className="eyebrow">HYDERABAD PROPERTY</div>
          <h1>Genuine Properties.<br/><em>Smarter Decisions.</em></h1>
          <p>Discover property opportunities in Hyderabad with clearer information, practical guidance and a straightforward buying journey.</p>
          <div className="actions"><a className="primary" href="#enquire">Find My Property →</a><a className="secondary" href={wa('Hi VERO, I am looking for a property in Hyderabad.')}>WhatsApp VERO</a></div>
          <div className="trust"><span>✓ Hyderabad focused</span><span>✓ Buyer-first approach</span><span>✓ Personal assistance</span></div>
        </div>
        <div className="heroCard">
          <div className="cardTop">PROPERTY MATCH</div>
          <h3>Tell us what you're looking for.</h3>
          <p>We'll help you identify suitable opportunities based on your location, property type and budget.</p>
          <a href="#enquire" className="cardLink">Start an enquiry →</a>
        </div>
      </section>

      <section id="properties" className="section">
        <div className="sectionHead"><div><div className="eyebrow">EXPLORE</div><h2>What are you looking for?</h2></div><p>Start with what matters most. VERO helps you narrow down the right opportunity.</p></div>
        <div className="tiles">
          {[
            ['01','Apartments','Homes for living, investing and upgrading.'],
            ['02','Plots & Land','Residential plots and land opportunities.'],
            ['03','Villas','Independent homes and premium communities.'],
            ['04','Commercial','Office, retail and investment opportunities.']
          ].map(x=><div className="tile" key={x[1]}><small>{x[0]}</small><h3>{x[1]}</h3><p>{x[2]}</p><a href="#enquire">Enquire →</a></div>)}
        </div>
      </section>

      <section id="why" className="dark section">
        <div className="sectionHead"><div><div className="eyebrow">WHY VERO</div><h2>A better way to choose property.</h2></div><p>Buying property is a major decision. We focus on making the process clearer, not more complicated.</p></div>
        <div className="features">
          {[
            ['01','Genuine Opportunities','Focus on relevant properties rather than endless listings.'],
            ['02','Smarter Shortlisting','We understand your requirements before suggesting options.'],
            ['03','Clear Communication','Straightforward conversations about property, budget and next steps.'],
            ['04','Local Focus','Built around Hyderabad’s neighbourhoods, projects and buyers.']
          ].map(x=><div className="feature" key={x[0]}><span>{x[0]}</span><h3>{x[1]}</h3><p>{x[2]}</p></div>)}
        </div>
      </section>

      <section id="about" className="split section">
        <div><div className="eyebrow">ABOUT VERO</div><h2>Property decisions should feel informed.</h2></div>
        <div><p>VERO PROPERTIES is a Hyderabad-focused property discovery and lead-generation brand. Our aim is simple: connect genuine buyer requirements with suitable property opportunities.</p><p>We believe the right property is not just about a listing. It is about location, purpose, budget, timing and confidence in the decision.</p></div>
      </section>

      <section id="enquire" className="enquiry">
        <div className="enquiryIntro"><div className="eyebrow">GET STARTED</div><h2>Tell us what you need.</h2><p>Share your requirement. VERO will help you explore suitable property opportunities in Hyderabad.</p></div>
        <form onSubmit={submit}>
          <div className="row"><label>Name<input required value={form.name} onChange={e=>setForm({...form,name:e.target.value})} placeholder="Your name"/></label><label>Mobile<input required pattern="[0-9]{10}" value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})} placeholder="10-digit mobile"/></label></div>
          <div className="row"><label>Property type<select required value={form.type} onChange={e=>setForm({...form,type:e.target.value})}><option value="">Select</option><option>Apartment</option><option>Plot / Land</option><option>Villa</option><option>Commercial</option></select></label><label>Preferred area<input required value={form.area} onChange={e=>setForm({...form,area:e.target.value})} placeholder="e.g. Kokapet, Kondapur"/></label></div>
          <div className="row"><label>Budget<select required value={form.budget} onChange={e=>setForm({...form,budget:e.target.value})}><option value="">Select</option><option>Below ₹50L</option><option>₹50L – ₹1Cr</option><option>₹1Cr – ₹2Cr</option><option>₹2Cr+</option></select></label><label>Buying timeline<select required value={form.timeline} onChange={e=>setForm({...form,timeline:e.target.value})}><option value="">Select</option><option>Immediately</option><option>Within 3 months</option><option>3–6 months</option><option>Just exploring</option></select></label></div>
          <button className="primary full" type="submit">Get Property Options →</button>
          {sent && <div className="success">Your enquiry has been prepared in WhatsApp. Please send the message to VERO.</div>}
          <small className="privacy">By submitting, you agree to be contacted by VERO PROPERTIES regarding your enquiry.</small>
        </form>
      </section>

      <section id="contact" className="contact section">
        <div><div className="eyebrow">CONTACT</div><h2>Let's find the right opportunity.</h2></div>
        <div className="contactLinks"><a href={wa('Hi VERO, I want to discuss a property requirement.')}>WhatsApp →</a><a href="tel:+919381087752">Call VERO →</a><a href="mailto:hello@veroproperties.co">Email →</a></div>
      </section>

      <footer><div className="brand"><div className="logoMark">V</div><div><b>VERO</b><span>PROPERTIES</span></div></div><p>Genuine Properties. Smarter Decisions.</p><small>© 2026 VERO PROPERTIES. Hyderabad, Telangana.</small></footer>
    </main>
  );
}
