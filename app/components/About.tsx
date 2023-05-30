import React from 'react';
import miami10 from '../../public/images/miami10.jpg';
import Image from 'next/image';
import { BanknotesIcon } from '@heroicons/react/24/outline';
import { WrenchScrewdriverIcon } from '@heroicons/react/24/outline';
import { UsersIcon } from '@heroicons/react/24/outline';

const About = () => {
  return (
    <main>
      <section>
        <div className="max-w-5xl mx-auto md:h-[600px] flex flex-col gap-8 mt-4 md:flex-row md:gap-0 bg-slate-50">
          <div className="w-full md:w-[55%] md:p-0 flex items-center h-full">
            <div className="p-10 md:p-10 ">
              <ul className=" flex items-center flex-col gap-6">
                <li className="relative shadow-md p-4 rounded-sm">
                  <BanknotesIcon className="text-sm h-10 absolute -top-2 -left-4 border-1 border-gray-400 p-2 rounded-full" />
                  <div className="p-4">
                    <span className="text-lg font-semibold leading-tight pb-4 inline-block">
                      Affordable Price
                    </span>
                    <p className="text-base text-gray-600">
                      Most vehicles get completely damaged as a result of high
                      cost of service maintenance.
                    </p>
                  </div>
                </li>
                <li className="relative shadow-md p-4 rounded-sm">
                  <WrenchScrewdriverIcon className="text-sm h-10 absolute -top-2 -left-4 border-1 border-gray-400 p-2 rounded-full" />

                  <div className="p-4">
                    <span className="text-lg font-semibold leading-tight pb-4 inline-block">
                      Sophisticated Equiptments
                    </span>
                    <p className="text-base text-gray-600">
                      We have invested in the latest sophisticated tools and
                      diagnostic softwares that are specifically tailored for
                      the software in your vehicle.
                    </p>
                  </div>
                </li>
                <li className="relative shadow-md p-4 rounded-sm">
                  <UsersIcon className="text-sm h-10 absolute -top-2 -left-4 border-1 border-gray-400  p-2 rounded-full" />
                  <div className="p-4">
                    <span className="text-lg font-semibold leading-tight pb-4 inline-block">
                      Professional Standards
                    </span>
                    <p className="text-base text-gray-600">
                      Our auto repair shop is capable of servicing a variety of
                      models. We only do the work that is needed to fix your
                      problem.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full p-5  md:w-[45%] md:p-0">
            <Image
              src={miami10}
              alt="about"
              width={930}
              height={600}
              className="w-full object-cover object-center h-full aspect-square"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
