import './SectionFoundation.css'
import petal from '../../../assets/Infographics.svg'


export default function SectionFoundation() {
    return(
        <section className="foundation">
          <h2 className="section-title">Foundation of our space</h2>
          <p>We are convinced that everything starts with a whole personality, in which 4 key aspects are balanced</p>
          <div className='aspects'>
            <p>Physical</p>
            <p>Mental</p>
            <p>Emotional</p>
            <p>Spiritual</p>
          </div>
          <div className="collums" >
          <div className='collum'>
          <p>These aspects create the heart of your development and generate the Elements of Personality.</p>
          <ul class="petals">
            <li className='petal'>
              <h3>Attractive Image</h3>
              <p>Seeking for a beautiful self image, the course will help develop Personal Magnetism.</p>
            </li>
            <li className='petal'>
              <h3>Conscious Relationships</h3>
              <p>By wanting a conscious, fulfilling relationship you will enter the Harmony in your couple.</p>
            </li>
            <li className='petal'>
              <h3>Interesting Activity</h3>
              <p>Expecting to receive an interesting activity you will also receive the Joy of it.</p>
            </li>
            <li className='petal'>
              <h3>Financial Well-Being</h3>
              <p>Tune in to financial well-being and bring your finances into balance.</p>
            </li>
            <li className='petal'>
              <h3>Joy of Leisure</h3>
              <p>Now your hobby will be more than just a supplement to your varied leisure time and way of relaxing. A well-designed leisure time defines your Freedom of Expression.</p>
            </li>
            <li className='petal'>
              <h3>Cozy Space</h3>
              <p>By giving more to the cozy space around you, you are creating a hygge.</p>
            </li >
          </ul>
          </div>
          <div className='collum'>
            <p>Charinity will help you strengthen the necessary elements by following the Harmonious Development Map.</p>
            <img src={petal} alt="foundation" loading="lazy" />
          </div>
          </div>
          

        </section>
    )
}