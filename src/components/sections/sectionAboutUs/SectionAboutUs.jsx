// import './SectionAboutUs.css'
import photo1 from '../../../assets/Photo-Mask-group.jpg'


// export default function SectionAboutUs() {
//     return (
//          <section className="about-us-section">
//           <div className="container">
//             <div className="about-us-text">
//               <h2 className="section-title">About Us</h2>
//               <h3>Charinity is a place where you can find harmony and balance.</h3>
//               <p>We create the Charinity project for ourselves, for our friends and colleagues, and for all women who want to find inner harmony, balance, to feel the continuous joy of living here and now.</p>
//               <p>In our space you will find local and global programs that empower Women's development.</p>
//               <p>Each program and workshop focuses on finding and developing harmony and balance in a woman's work and life.</p>
//               <button type="button">Read more</button>
//             </div>
//           <img src={photo1} alt="about us" loading="lazy" />
//           </div>
//         </section>
//     )
// }


export default function SectionAboutUs() {
  return (
    <section className="bg-white md:px-5 mt-10 py-12 max-w-4/5 lg:max-w-3/4 mx-auto">
      <h2 className="text-4xl font-serif text-[#AAB5E7] uppercase text-center m-2">
            About Us
          </h2>
      <div className="flex flex-col-reverse lg:flex-row items-center justify-around w-full">
        
        <div className="md:max-w-1/2 md:pr-2">
          
          <h3 className="text-xl font-medium mb-4">
            Charinity is a place where you can find harmony and balance.
          </h3>
          <p className="text-lg leading-relaxed mb-4">
            We create the Charinity project for ourselves, for our friends and colleagues, and for all women who want to find inner harmony, balance, to feel the continuous joy of living here and now.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            In our space you will find local and global programs that empower Women's development.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            Each program and workshop focuses on finding and developing harmony and balance in a woman's work and life.
          </p>
          <button
            type="button"
            className="btn"
          >
            Read more
          </button>
        </div>

        <img
          src={photo1}
          alt="about us"
          loading="lazy"
          className="max-w-[300px] md:max-w-[350px] lg:max-w-[400px] xl:max-w-full rounded-xl my-10"
        />
      </div>
    </section>
  );
}
