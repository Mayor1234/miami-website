import React from 'react';

function BlogBanner() {
  return (
    <div className="">
      <div className="container mx-auto flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold px-10 py-5 mb-10 ">
        <div className="w-full">
          <h1 className="text-3xl lg:text-4xl mb-4">
            Miami Automechanical Blog
          </h1>
          <h2 className="mt-5 md:mt-0 text-lg">We Provide Daily</h2>{' '}
          <span className="text-sm md:text-lg font-medium">
            Cars diagnostic test & auto repair tips
          </span>
        </div>
        <p className="mt-5 md:mt-2 text-[#dadbdc] max-w-sm  text-sm md:text-lg">
          Life’s a road trip, trust us to getting your car back on the road to
          longevity, durability and reliability.
        </p>
      </div>
    </div>
  );
}

export default BlogBanner;
