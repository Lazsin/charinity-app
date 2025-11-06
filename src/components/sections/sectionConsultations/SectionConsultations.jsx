// import './SectionConsultations.css'
import photo from '../../../assets/Mask-group-Marina-photo.jpg'

// export default function SectionConsultations() {
//     return (
//         <section className="consultations-section">
//           <div className="container">
//           <img src={photo} alt="consultations" loading="lazy" />
//           <div className='consultations-text'>
//             <h2 className="section-title">Individual consultations</h2>
//             <p>I am Marina Melnik, the founder of Charinity and leader coach. I've created a space where professional and conscious coaches can share their experiences with you. With our support and mentoring, you may improve your life fast and effectively.</p>
//             <button type="button">Start here</button>
//           </div>
//           </div>
//         </section>
//     )
// }

export default function SectionConsultations() {
  return (
    <section className="bg-white md:px-5 mt-10 py-12 max-w-4/5 lg:max-w-3/4 mx-auto">
      <h2 className="text-center text-4xl font-serif text-[#b2bced] mb-5 uppercase">
            Individual consultations
          </h2>
      <div className="flex flex-col md:flex-row items-center justify-between w-full">
        {/* Фото */}
         <img
                  src={photo}
                  alt="about us"
                  loading="lazy"
                  className="max-w-[300px] xl:max-w-full rounded-xl my-10"
                />

        {/* Текстовый блок */}
        <div className="md:max-w-1/2 md:pr-2">
          

          <h3 className="text-xl font-medium mb-4">
            I am Marina Melnik, the founder of Charinity and leader coach.
          </h3>
          <p className='text-lg leading-relaxed mb-4'>
            I've created a space where professional and conscious coaches can share
            their experiences with you. With our support and mentoring, you may
            improve your life fast and effectively.
          </p>
          <p className='text-lg leading-relaxed mb-6'>
            We are providing individual consultations based on the fundamental principles of Charinity space and my own experience.
          </p>

          <button type="button" className='btn'>Start here</button>
        </div>
      </div>
    </section>
  );
}
