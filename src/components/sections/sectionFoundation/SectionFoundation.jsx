// import './SectionFoundation.css'
import petal from '../../../assets/Infographics.svg'


// export default function SectionFoundation() {
//     return(
//         <section className="foundation">
//           <h2 className="section-title">Foundation of our space</h2>
//           <p>We are convinced that everything starts with a whole personality, in which 4 key aspects are balanced</p>
//           <div className='aspects'>
//             <p>Physical</p>
//             <p>Mental</p>
//             <p>Emotional</p>
//             <p>Spiritual</p>
//           </div>
//           <div className="collums" >
//           <div className='collum'>
//           <p>These aspects create the heart of your development and generate the Elements of Personality.</p>
//           <ul class="petals">
//             <li className='petal'>
//               <h3>Attractive Image</h3>
//               <p>Seeking for a beautiful self image, the course will help develop Personal Magnetism.</p>
//             </li>
//             <li className='petal'>
//               <h3>Conscious Relationships</h3>
//               <p>By wanting a conscious, fulfilling relationship you will enter the Harmony in your couple.</p>
//             </li>
//             <li className='petal'>
//               <h3>Interesting Activity</h3>
//               <p>Expecting to receive an interesting activity you will also receive the Joy of it.</p>
//             </li>
//             <li className='petal'>
//               <h3>Financial Well-Being</h3>
//               <p>Tune in to financial well-being and bring your finances into balance.</p>
//             </li>
//             <li className='petal'>
//               <h3>Joy of Leisure</h3>
//               <p>Now your hobby will be more than just a supplement to your varied leisure time and way of relaxing. A well-designed leisure time defines your Freedom of Expression.</p>
//             </li>
//             <li className='petal'>
//               <h3>Cozy Space</h3>
//               <p>By giving more to the cozy space around you, you are creating a hygge.</p>
//             </li >
//           </ul>
//           </div>
//           <div className='collum'>
//             <p>Charinity will help you strengthen the necessary elements by following the Harmonious Development Map.</p>
//             <img src={petal} alt="foundation" loading="lazy" />
//           </div>
//           </div>
          

//         </section>
//     )
// }

export default function SectionFoundation() {
  const liIcon = "url('data:image/svg+xml;charset=utf-8;base64,PHN2ZyB3aWR0aD0nNDInIGhlaWdodD0nNTUnIHZpZXdCb3g9JzAgMCA0MiA1NScgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz48cGF0aCBkPSdNMTIuMjI1NiAzNy43Njk3QzE1LjU5NTYgNTIuNzIzOCAyNi43MDQxIDU0LjU2MDggMzEuODM3MSA1My42MUMzMC41MzExIDMzLjc3NjYgNDguNDQ1OSAxMC4xNjI2IDM2LjQzNTQgMi4zMzY2NUM0NC45NTE4IDEwLjU2MzQgOC4wMTMgMTkuMDc3MSAxMi4yMjU2IDM3Ljc2OTdaJyBmaWxsPScjQUFCNUU3Jy8+PHBhdGggZD0nTTI2LjQyMzcgNTIuODc0NkMzMy45NTggNDYuMDM1MSAzNC43MzA4IDM0LjUzMTEgMjguMDExMiAyNi43MTlMMTUuNTc2MyAxMi4yNjIyQzguMDQyMDEgMTkuMTAxNyA3LjI2OTIxIDMwLjYwNTcgMTMuOTg4OCAzOC40MTc4TDI2LjQyMzcgNTIuODc0NlonIHN0cm9rZT0nIzQ0MTQ1QScgc3Ryb2tlLW9wYWNpdHk9JzAuOScgc3Ryb2tlLXdpZHRoPScyJy8+PC9zdmc+Cg==')"
  const items = [
    {
      title: "Attractive Image",
      text: "Seeking for a beautiful self image, the course will help develop Personal Magnetism.",
    },
    {
      title: "Conscious Relationships",
      text: "By wanting a conscious, fulfilling relationship you will enter the Harmony in your couple.",
    },
    {
      title: "Interesting Activity",
      text: "Expecting to receive an interesting activity you will also receive the Joy of it.",
    },
    {
      title: "Financial Well-Being",
      text: "Tune in to financial well-being and bring your finances into balance.",
    },
    {
      title: "Joy of Leisure",
      text: "Now your hobby will be more than just a supplement to your varied leisure time and way of relaxing. A well-designed leisure time defines your Freedom of Expression.",
    },
    {
      title: "Cozy Space",
      text: "By giving more to the cozy space around you, you are creating a hygge.",
    },
  ];

  return (
    <div className='bg-[#F7F7F7] rounded-br-[10rem]'>
      <section className="md:px-5 mt-10 py-12 max-w-4/5 lg:max-w-3/4 mx-auto">
      {/* Заголовок */}
      <h2 className="text-center text-4xl font-serif text-[#b2bced] mb-5 uppercase">
        Foundation of our space
      </h2>

      {/* Подзаголовок */}
      <p className="text-center font-serif text-neutral-500 text-lg mb-8">
        We are convinced that everything starts with a whole personality,
        in which 4 key aspects are balanced
      </p>

      {/* Аспекты */}
      <div className="flex md:flex-row md:justify-around text-center gap-2 flex-col font-serif font-medium text-[#7E6BA5] mb-10 uppercase">
        <p>Physical</p>
        <p>Mental</p>
        <p>Emotional</p>
        <p>Spiritual</p>
      </div>

      {/* Две колонки */}
      <div className="flex flex-col md:flex-row justify-between gap-1">
        {/* Левая колонка */}
        <div className="flex flex-col flex-1 items-center bg-[#f9f9f9] rounded-xl p-5">
          <p className="text-base mb-4 text-left font-serif text-neutral-600 ">
            These aspects create the heart of your development and generate the
            Elements of Personality.
          </p>
           <ul className="grid grid-cols-1 gap-6 w-full">
  {items.map(({ title, text }, i) => (
    <li
      key={i}
      className="relative pl-12 before:content-[''] before:absolute before:translate-y-1/3 before:left-0 before:top-1 before:h-13 before:w-10 before:bg-no-repeat before:bg-contain before:bg-center before-bg-icon"
      style={{ "--icon": liIcon }}
    >
      <h3 className="text-lg font-serif mb-2">{title}</h3>
      <p className="text-sm leading-relaxed text-gray-700">{text}</p>
    </li>
  ))}
</ul>

        </div>

        {/* Правая колонка */}
        <div className="flex flex-col flex-1 items-center justify-center bg-[#f9f9f9] rounded-xl p-5">
          <p className="text-base mb-4 text-left font-serif text-neutral-600 ">
            Charinity will help you strengthen the necessary elements by
            following the Harmonious Development Map.
          </p>
          <img
            src={petal}
            alt="foundation"
            loading="lazy"
            className="max-w-full h-auto rounded-md object-contain"
          />
        </div>
      </div>
    </section>
    </div>
  );
}
