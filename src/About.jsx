function About() {
    return (
      <div className="w-full text-white bg-emerald-950">
        <section className="container mx-auto px-6 md:px-12 lg:px-40 py-16 text-xl">
          {/* Header Section */}
          <div className="mb-4">
            <h2 className="font-oswald font-bold text-3xl md:text-4xl text-center md:text-left">
              Babatunde Awotimilehin
            </h2>
          </div>
  
          {/* Subheading Section */}
          <div className="font-playwriteus text-lg text-blue-600 mb-5 text-center md:text-left">
            <p>A Seasoned Software Engineer.</p>
          </div>
  
          {/* Description Section */}
          <div className="font-Playwriteus text-lg italic hover:not-italic text-center md:text-left">
            <p>
              Transforming ideas into impactful software, one line of code at a time.
            </p>
          </div>
        </section>
      </div>
    );
  }
  
  export default About;
  