export default function ContectMe() {
  return (
    <article className="w-full min-h-screen flex items-center py-12 bg-[url(https://imagedelivery.net/anvL-_ABM0Z5KQo2YmJX4g/23ef26ea-3e50-494e-d24f-8ce7a6adf000/public)] bg-cover px-3 relative">
      <div className="container mx-auto">
        <section>
          <div className="flex items-center text-5xl md:text-7xl font-extrabold relative text-white">
            <span className="about text-transparent">Contact</span>
            <span className="ml-3">Me</span>
          </div>
          <p className="mt-12 text-zinc-200 leading-relaxed">
            항상 소중한 의견을 듣고 배우겠습니다. <br />
            어떤 말씀이건 귀담아 듣겠습니다.
          </p>
          <button
            type="button"
            className="mt-12 text-white bg-indigo-500 px-6 py-3 rounded-md hover:bg-indigo-600 transition-colors"
          >
            하실 말씀이 있으신가요?
          </button>
        </section>
      </div>
      <div className="absolute left-1/2 -translate-x-1/2 bottom-3 text-zinc-300 text-center">
        <span>010-8668-8918</span> / <span>design795@naver.com</span>
      </div>
    </article>
  );
}
