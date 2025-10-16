import './SectionConsultations.css'
import photo from '../../../assets/Mask-group-Marina-photo.jpg'

export default function SectionConsultations() {
    return (
        <section className="consultations-section">
          <div className="container">
          <img src={photo} alt="consultations" loading="lazy" />
          <div className='consultations-text'>
            <h2 className="section-title">Individual consultations</h2>
            <p>I am Marina Melnik, the founder of Charinity and leader coach. I've created a space where professional and conscious coaches can share their experiences with you. With our support and mentoring, you may improve your life fast and effectively.</p>
            <button type="button">Start here</button>
          </div>
          </div>
        </section>
    )
}
