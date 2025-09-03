import React from "react";

const CtaStartTrial: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20" />
      <div className="container mx-auto px-6 text-center relative z-10">
        <h2 className="text-5xl font-thin mb-6">Ready to Drive the Future?</h2>
        <p className="text-xl mb-12 max-w-2xl mx-auto opacity-90">Join thousands of automotive enthusiasts experiencing the next generation of vehicle visualization.</p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button className="btn btn-lg bg-white text-black hover:bg-gray-100 border-none px-12 py-4 text-lg font-semibold"><p>Start Free Trial</p></button>
          <button className="btn btn-lg btn-outline border-white text-white hover:bg-white hover:text-black px-12 py-4 text-lg"><p>Book Demo</p></button>
        </div>
      </div>
    </section>
  );
}

export default CtaStartTrial;
