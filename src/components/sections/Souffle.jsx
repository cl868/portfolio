import './Souffle.css';

export const Souffle = () => {
    return (
        <main className="souffle-page">
            <img src="/Final.png" alt="Final preview" className="final-image" />
            <div className="souffle-header-row">
                <section className="project-brief">
                    <div className="project-brief-label">PROJECT BRIEF</div>
                    <div className="project-brief-desc">
                        Innovative AI-powered platform that transforms how people discover, plan, and book travel experiences.
                    </div>
                </section>
                <section className="problem-section">
                    <div className="problem-section-label">PROBLEM</div>
                    <div className="problem-section-desc">
                        <span className="problem-highlight">Travel Feels Impersonal</span><br />
                        <span className="problem-highlight1" style={{ maxWidth: '1100px', display: 'inline-block', width: '100%' }}>Planning travel often means scrolling through impersonal blog posts, generic review sites, or overly curated Instagram photos. What users really want is to travel like people they trust—friends, creators they admire, or like-minded explorers. While millions of travelers invest time into crafting detailed trip plans, these valuable itineraries are often lost or go unused after the trip ends. There's currently no effortless way to share, buy, or monetize curated travel experiences, resulting in wasted effort and missed opportunities for connection and inspiration.</span>
                        <br /><br />
                        <span className="problem-highlight2" style={{ maxWidth: '700px', display: 'inline-block', width: '100%', fontWeight: 700, fontSize: '1.35rem' }}>User Research</span><br />
                        <span className="problem-highlight2" style={{ maxWidth: '700px', display: 'inline-block', width: '100%' }}>My goal in user research was to understand how travelers discover, save, and act on travel inspiration. Here are my findings:</span>
                        <br />
                        <span className="user-research-indent" style={{ marginBottom: '0rem', display: 'block' }}>1. Users want personalized and trustworthy travel recommendations, but find it hard to filter out generic content or irrelevant influencer posts.</span>
                        <br />
                        <span className="user-research-indent" style={{ marginBottom: '0.4rem', display: 'block' }}>2. Users spend hours piecing together travel plans from scattered sources (social media, blogs, reviews) and wish they had a single place to find and book curated experiences.</span>
                        <br />
                        <span className="user-research-indent" style={{ marginBottom: '0.5rem', display: 'block' }}>3. Users want to save and revisit trip ideas, but struggle to organize inspiration from platforms like Instagram or TikTok where saved content isn't easily actionable.</span>
                        <br />
                        <span className="problem-highlight2" style={{ maxWidth: '700px', display: 'inline-block', width: '100%' }}>Speaking with these participants, I realized that while travelers love discovering trip ideas socially, there's no centralized platform that merges authentic recommendations, creator itineraries, and seamless booking. Trip planning becomes a fragmented task, especially for busy users who don't want to build itineraries from scratch.</span>
                    </div>
                </section>
                <section className="project-meta-block">
                    <h1 className="souffle-title">SOUFFLÉ</h1>
                    <div className="souffle-subtitle">AI-Powered Travel Discovery Platform Case Study</div>
                    <div className="meta-info-row" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem', width: '70%', marginLeft: 0 }}>
                        <div className="meta-info-block">
                            <div className="meta-info-label">ROLE</div>
                            <div className="meta-info-value">Product Designer</div>
                        </div>
                        <div className="meta-info-block">
                            <div className="meta-info-label">TIMELINE</div>
                            <div className="meta-info-value">Feb 2025 - May 2025</div>
                        </div>
                        <div className="meta-info-block">
                            <div className="meta-info-label">TEAM</div>
                            <div className="meta-info-value">Myself</div>
                        </div>
                        <div className="meta-info-block">
                            <div className="meta-info-label">SKILLS/TOOLS</div>
                            <div className="meta-info-value">Ideation, Prototyping, Product Strategy, Figma, User Research</div>
                        </div>
                    </div>
                    <hr className="meta-divider" />
                </section>
            </div>
            <hr className="souffle-divider" />
            <div className="ideation-row" style={{ marginLeft: '0px', marginTop: '60px' }}>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', maxWidth: '900px', margin: '0 auto', width: '100%', gap: '2rem', justifyContent: 'flex-start' }}>
                    <div className="ideation-section-label">IDEATION</div>
                    <span className="problem-highlight3" style={{ fontWeight: 700, fontSize: '1.8rem' }}>Brainstorming</span>
                </div>
                <div>
                    <div className="ideation-section-desc">
                To generate ideas for solving Souffle's key user problems, I brought together a small group of travelers, content creators, and designers to brainstorm ways to make curated travel discovery and booking more seamless. After exploring a wide range of concepts, we narrowed down three main opportunity areas:
                <br /><br />
                <span className="ideation-indent">1. Personalized Discovery:
                How might we help users discover travel plans and experiences that feel uniquely relevant to their interests and social circle?</span>
                <br /><br />
                <span className="ideation-indent">2. Itinerary Sharing & Monetization:
                How might we make it easy for users and creators to share, sell, or reuse detailed travel itineraries?</span>
                <br /><br />
                <span className="ideation-indent ideation-indent-last">3. Seamless Planning & Booking:
                How might we reduce the friction in going from inspiration to actionable travel plans and purchases?</span>
                <br />
                With these opportunity areas in mind, we explored several potential features:
                <br /><br />
                <img src="/Feature1.png" alt="Feature 1 preview" className="feature-image" style={{ width: '600px' }} /><br />
                <b className="feature-title" style={{ fontWeight: 700 }}>Creator Capsules</b><br />
                This feature allows users to explore curated micro-itineraries created by influencers or friends, which they can save, remix, and book directly. Each Capsule includes visuals, maps, essential tips, and estimated costs—making discovery both inspiring and actionable.
                <br /><br />
                <img src="/Feature2.png" alt="Feature 2 preview" className="feature-image" style={{ width: '600px' }} /><br />
                <b className="feature-title" style={{ fontWeight: 700 }}>Souffle Circles</b><br />
                This feature allows users to create or join travel circles with friends, family, or creators, enabling members to share recommendations, itineraries, and trip updates through a private social feed.
                <br /><br />
                <img src="/Feature3.png" alt="Feature 3 preview" className="feature-image" style={{ width: '600px' }} /><br />
             <b className="feature-title" style={{ fontWeight: 700 }}>Moodboard Trips</b><br />
                This feature offers a visual planning tool where users can drag and drop inspiration (photos, places, activities) onto a digital moodboard to build their dream trip. Moodboards can be shared, remixed, or booked as a package.
                <br /><br />
                <div className="choosing-feature-label">Choosing a Feature</div>
                <div className="choosing-feature-desc">
                After evaluating each concept based on impact, scalability, and creator engagement, I moved forward with Creator Capsules for the MVP.
                Souffle Circles had high community potential but would require moderation tools and critical mass to deliver value upfront.
                MoodBoard Trips sparked strong interest but brought limitations on the AI-modeling side for phase one. Hence, I proceeded with the Creator Capsules feature.
                </div>
                <br /><br />
                <div className="medium-fidelity-label">Medium Fidelity Explorations</div>
                <div className="medium-fidelity-desc">
                  I initially designed Creator Capsules to feel like a scrollable set of "travel postcards" that users could tap to expand into full itineraries. My goal was to create something visually rich but highly functional, where each capsule felt like a trip you could see, feel, and book in a single motion. After the initial round of explorations, I conducted user testing to better understand how travelers and creators interacted with the feature.
                  <br /><br />
                  <img src="/Home.png" alt="Home screen medium fidelity" className="feature-image" /><br />
                  <div style={{ fontWeight: 700, maxWidth: '900px', width: '100%', marginBottom: '0.5rem', marginLeft:'3px' }}>Home Layout:</div>
                  <div style={{ maxWidth: '900px', width: '100%', marginLeft:'3px' }}>The Capsule Cards on the home screen were designed to feel editorial like a high-end magazine meets a booking app. I tested four card formats with varying levels of detail. It was essential that the cards quickly communicate who the trip was by, where it was going, and what the vibe was.</div>
                  <br /><br />
                  <img src="/Capsule.png" alt="Capsule View preview" className="feature-image" style={{ width: '850px' }} /><br />
                  
                  <div style={{ fontWeight: 700, maxWidth: '900px', width: '100%', marginBottom: '0.5rem', marginLeft:'3px' }}>Capsule Layout:</div>
                  <div style={{ maxWidth: '900px', width: '100%', marginLeft:'3px' }}>Users consistently preferred Screen D for its clear display of all three call-to-action buttons on a single screen, along with an embedded map preview that helped them spatially visualize the itinerary.</div>
                  <br /><br />
                  <img src="/Onboarding.png" alt="Onboarding preview" className="feature-image" style={{ width: '85m0px' }} /><br />
                  <div style={{ fontWeight: 700, maxWidth: '900px', width: '100%', marginBottom: '0.5rem', marginLeft:'3px' }}>Onboarding Screen:</div>
                  <div style={{ maxWidth: '900px', width: '100%', marginLeft:'3px' }}>Users found Screen B to be the most effective due to its clearly positioned progress bar at the top and a distinct 'Continue' call-to-action button at the bottom.</div>
                  <br /><br />
                  <hr className="prototype-divider" />
                  <div className="pinpointing-row">
                    <div className="prototype-section-label">PROTOTYPE</div>
                    <div className="pinpointing-solution-label">Pinpointing the Solution</div>
                  </div>
                  <div className="pinpointing-solution-desc">
                    After selecting Creator Capsules as the MVP, I focused on designing an experience that blends curated inspiration with seamless planning. The goal was to make each Capsule feel like a visual invitation where users can easily explore, save, or book. With this in mind, I explored different ways to present curated trip content on the home screen and within each Capsule. I wanted the experience to feel part magazine, part marketplace, and part memory lane.
From user feedback, I realized travelers wanted to know who the trip was by, what kind of traveler it was for, and whether it matched their vibe, time, and budget. This led to prioritizing visual clarity and fast scannability.
                  </div>
                </div>
                    </div>
                </div>
            </div>
            
            <div className="final-prototype-label">Final Prototype</div>
            <div style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '2rem',
              margin: '2rem auto',
              maxWidth: '900px',
              width: '100%',
              minHeight: '630px',
              marginLeft: '300px',
              marginTop: '50px'
            }}>
              <div
                style={{
                  width: '300px',
                  height: '630px',
                  borderRadius: '50px',
                  overflow: 'hidden',
                  background: 'transparent',
                  flexShrink: 0
                }}
              >
                <video
                  src="/Onboarding.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    background: 'transparent'
                  }}
                >
                  Your browser does not support the video tag.
                </video>
              </div>
              <div style={{ maxWidth: '340px', textAlign: 'left', display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%' }}>
                <h3 style={{ fontWeight: 700, fontSize: '1.25rem', margin: 0, marginBottom: '0.5rem' }}>Seamless Onboarding</h3>
                <p style={{ fontSize: '1rem', color: '#222', lineHeight: 1.5, margin: 0 }}>
                  Users can discover travel plans that match their interests by selecting traveler types, enabling personalized recommendations based on their preferences and social travel behavior.
                </p>
              </div>
            </div>
            <div style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '2rem',
              margin: '2rem auto',
              maxWidth: '900px',
              width: '100%',
              minHeight: '630px',
              marginLeft: '300px',
              marginTop: '60px'
            }}>
              <div
                style={{
                  width: '300px',
                  height: '630px',
                  borderRadius: '50px',
                  overflow: 'hidden',
                  background: 'transparent',
                  flexShrink: 0
                }}
              >
                <video
                  src="/Carousel.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    background: 'transparent'
                  }}
                >
                  Your browser does not support the video tag.
                </video>
              </div>
              <div style={{ maxWidth: '340px', textAlign: 'left', display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%' }}>
                <h3 style={{ fontWeight: 700, fontSize: '1.25rem', margin: 0, marginBottom: '0.5rem' }}>Effortless Trip Browsing</h3>
                <p style={{ fontSize: '1rem', color: '#222', lineHeight: 1.5, margin: 0 }}>
                  Users can explore curated travel plans that match their vibe through an intuitive carousel interface, where they can easily like, save, and filter by categories through AI-personalized recommendations.
                </p>
              </div>
            </div>
            <div style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '2rem',
              margin: '2rem auto',
              maxWidth: '900px',
              width: '100%',
              minHeight: '630px',
              marginLeft: '300px',
              marginTop: '60px'
            }}>
              <div
                style={{
                  width: '300px',
                  height: '630px',
                  borderRadius: '50px',
                  overflow: 'hidden',
                  background: 'transparent',
                  flexShrink: 0
                }}
              >
                <video
                  src="/Edit.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    background: 'transparent'
                  }}
                >
                  Your browser does not support the video tag.
                </video>
              </div>
              <div style={{ maxWidth: '340px', textAlign: 'left', display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%' }}>
                <h3 style={{ fontWeight: 700, fontSize: '1.25rem', margin: 0, marginBottom: '0.5rem' }}>Collect, Customize, and Share</h3>
                <p style={{ fontSize: '1rem', color: '#222', lineHeight: 1.5, margin: 0 }}>
                  Users can easily customize existing itineraries from creators or influencers, directly book trips, or curate and edit their own travel capsules to be saved and showcased on their personal profile.
                </p>
              </div>
            </div>
            <div className="final-prototype-desc">
            <hr className="final-divider"/>
              <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '2rem', marginBottom: '1.5rem' }}>
                <div className="reflection-section-label">reflection</div>
                <div className="conclusion-section-label">Conclusion</div>
              </div>

              
              <div className="conclusion-desc">Looking back at the design journey, I started with the broad idea of letting users explore curated travel experiences, and ended up refining that into a feature that feels deeply personal and shareable.<br /><br />
              The development of Creator Capsules pushed me to balance creator storytelling with transactional simplicity—a challenge that required careful prioritization of both content and UX. While MoodBoard Trips and Souffle Circles offered compelling paths, Capsules delivered the best balance of scalability.<br /><br />
              This experience reinforced an important product principle for me: great design doesn't just showcase information—it makes it feel intuitive, inspiring, and effortless to act on. I'm excited to continue applying the foundational skillsI gained to future projects.</div>
            </div>
            
        </main>
    );
}; 