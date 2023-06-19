import React from 'react';

function BlogBanner() {
  return (
    <div className="max-w-5xl mx-auto flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold px-10 py-12 mb-10 md:px-0 ">
      <div className="w-full text-[#f6f7f8]">
        <h1 className="text-3xl lg:text-4xl mb-4">Miami Automechanical Blog</h1>
        <h2 className="mt-5 md:mt-0 text-lg">We Provide Daily</h2>{' '}
        <span className="text-sm md:text-lg">
          Cars diagnostic test & auto repair tips
        </span>
      </div>
      <p className="mt-5 md:mt-2 text-[#dadbdc] max-w-sm  text-sm md:text-lg">
        Life’s a road trip, trust us to getting your car back on the road to
        longevity and reliability.
      </p>
    </div>
  );
}

export default BlogBanner;
