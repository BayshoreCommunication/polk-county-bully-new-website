export default function EmbeddedSite() {
  return (
    <section
      className="bg-cover bg-center bg-no-repeat lg:pt-[100px] pb-12"
      style={{ backgroundImage: "url('/images/homepage/embedded/bg.png')" }}
    >
      <div className="container px-8 mb-8 md:mb-16 mx-auto">
        <div className="textwidget">
          <p>
            <iframe
              loading="lazy"
              style={{ height: 800, width: "100%" }}
              src="https://www.wagtopia.com/search/org?id=1233589&iframe=normal"
            ></iframe>
          </p>
        </div>
      </div>
    </section>
  );
}
