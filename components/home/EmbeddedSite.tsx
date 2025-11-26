export default function EmbeddedSite() {
  return (
    <section
      className="bg-cover bg-center bg-no-repeat lg:pt-[100px] pb-12"
      style={{ backgroundImage: "url('/images/homepage/embedded/bg.png')" }}
    >
      <div className="container px-8 my-8  mx-auto ">
        <div className="textwidget ">
          <p>
            <iframe
              loading="lazy"
              style={{ height: 800, width: "100%" , borderRadius: "30px"}}
              src="https://www.wagtopia.com/search/org?id=1233589&iframe=normal"
            ></iframe>
          </p>
        </div>
      </div>
      
      {/* Optional gradient overlay at the top to match first section */}
      <div className="absolute top-0 w-full h-32 bg-gradient-to-t from-transparent to-white"></div>
      {/* Gradient overlay at the bottom for blending */}
      <div className="absolute bottom-0 w-full left-0 right-0 h-16 bg-gradient-to-b from-transparent to-white "></div>
    </section>
  );
}
