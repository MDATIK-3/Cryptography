function contactheader() {
  return (
    <header className="bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 text-white py-10 sm:py-12 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-pattern opacity-10"></div>
      <div className="max-w-6xl mx-auto relative z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight">
          Get in Touch
        </h1>
        <p className="text-lg md:text-xl max-w-2xl font-light leading-relaxed">
          Have a question or want to work together? Reach out through the form
          below or connect with me on social media.
        </p>
      </div>
    </header>
  );
}

export default contactheader;
