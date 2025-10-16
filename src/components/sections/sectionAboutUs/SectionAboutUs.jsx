import './SectionAboutUs.css'
import photo1 from '../../../assets/Photo-Mask-group.jpg'


export default function SectionAboutUs() {
    return (
         <section className="about-us-section">
          <div className="container">
            <div className="about-us-text">
              <h2 className="section-title">About Us</h2>
              <h3>Charinity is a place where you can find harmony and balance.</h3>
              <p>We create the Charinity project for ourselves, for our friends and colleagues, and for all women who want to find inner harmony, balance, to feel the continuous joy of living here and now.</p>
              <p>In our space you will find local and global programs that empower Women's development.</p>
              <p>Each program and workshop focuses on finding and developing harmony and balance in a woman's work and life.</p>
              <button type="button">Read more</button>
            </div>
          <img src={photo1} alt="about us" loading="lazy" />
          </div>
        </section>
    )
}