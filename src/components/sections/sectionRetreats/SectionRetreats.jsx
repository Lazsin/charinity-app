// import './SectionRetreats.css'
import photo from '../../../assets/Photo-intro-retreats.jpg'

// export default function SectionRetreats() {
//     return(
//         <section className="retreats-section">
//         <div className="container">
//             <div className="retreats-text">
//             <h2 className="section-title">Join our retreats</h2>
//             <h4>With Charinity you can combine traveling and self-developing.</h4>
//             <p>By visiting historical sites, we get to know the country and history, better and deeper, and, through an awareness of everyday life and the lives of women, we discover ourselves.</p>
//             <p>It's ideal if the practices of personal development are performed where everything inspires, pacifies, and allows concentration. Ready to answer the question “why am I here?”</p>
//             <button type="button">Choose retreat</button>
//             <p>Join our Upcoming retreats</p>
//             </div>
//             <img src={photo} alt="retreats" loading="lazy" />
            
//         </div>
//         </section>
//     )
// }

export default function SectionRetreats() {
  return (
    <div className='bg-[#F7F7F7] rounded-br-[10rem]'>
    <section className="md:px-5 mt-10 py-12 max-w-4/5 lg:max-w-3/4 mx-auto">
      <h2 className="text-4xl font-serif text-[#AAB5E7] uppercase text-center m-2">
            Join our retreats
          </h2>
      <div className="flex flex-col-reverse lg:flex-row items-center justify-around w-full">
        {/* Текстовый блок */}
        
        <div className="md:max-w-1/2 md:pr-2">
          

          <h3 className="text-xl font-medium mb-4">
            With Charinity you can combine traveling and self-developing.
          </h3>

          <p className="text-lg leading-relaxed mb-5">
            By visiting historical sites, we get to know the country and
            history, better and deeper, and, through an awareness of everyday
            life and the lives of women, we discover ourselves.
          </p>

          <p className="text-lg leading-relaxed mb-8">
            It's ideal if the practices of personal development are performed
            where everything inspires, pacifies, and allows concentration. Ready
            to answer the question “why am I here?”
          </p>

          <button
            type="button"
            className="btn"
          >
            Choose retreat
          </button>

          <p className="text-xl text-gray-600 my-10">Join our Upcoming retreats</p>
        </div>

        {/* Фото */}
        <img
          src={photo}
          alt="retreats"
          loading="lazy"
          className="max-w-[300px] xl:max-w-full rounded-xl my-10"
        />
      </div>
    </section>
    </div>
  );
}