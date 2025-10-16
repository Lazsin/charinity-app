import './SectionRetreats.css'
import photo from '../../../assets/Photo-intro-retreats.jpg'

export default function SectionRetreats() {
    return(
        <section className="retreats-section">
        <div className="container">
            <div className="retreats-text">
            <h2 className="section-title">Join our retreats</h2>
            <h4>With Charinity you can combine traveling and self-developing.</h4>
            <p>By visiting historical sites, we get to know the country and history, better and deeper, and, through an awareness of everyday life and the lives of women, we discover ourselves.</p>
            <p>It's ideal if the practices of personal development are performed where everything inspires, pacifies, and allows concentration. Ready to answer the question “why am I here?”</p>
            <button type="button">Choose retreat</button>
            <p>Join our Upcoming retreats</p>
            </div>
            <img src={photo} alt="retreats" loading="lazy" />
            
        </div>
        </section>
    )
}