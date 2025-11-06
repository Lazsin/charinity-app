// import './SectionHero.css'

// export default function SectionHero() {
//     return(
//         <section className="flex justify-between">
//                   <h1 className="h0 text-9xl">Charinity</h1>
//                   <p className="hero-text">Welcome to Space of Harmonious Development</p>
//         </section>
//     )
// }

export default function SectionHero() {
  return (
    <section id="hero" className="flex flex-col items-center justify-center rounded-br-[10rem] text-center min-h-screen px-5 py-20 bg-[radial-gradient(circle_at_bottom,#6BBBDB_0%,#6BBBDB_10%,#7789dc_40%,#7789dc_100%)] text-white relative overflow-hidden">
      <h1 className="font-[Lora] font-semibold text-5xl md:text-[8vh] p-10 uppercase">
        Charinity
      </h1>
      <p className="font-[Montserrat] text-[2vh] max-w-[30vh] mt-12">
        Welcome to Space of Harmonious Development
      </p>
    </section>
  );
}
