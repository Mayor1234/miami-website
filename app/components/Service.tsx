import miami5 from '../../public/images/miami5.jpg';
import Link from 'next/link';
import Image from 'next/image';
import { CheckIcon } from '@heroicons/react/24/solid';

const Service = () => {
  return (
    <main>
      <section>
        <div className="max-w-5xl mx-auto md:h-[600px] flex flex-col-reverse gap-8 mt-4 md:flex-row md:gap-0 bg-slate-50">
          <div className="w-full p-5  md:w-[45%] md:p-0">
            <Image
              src={miami5}
              alt="about"
              width={930}
              height={600}
              className="w-full object-cover object-center h-full aspect-square"
            />
          </div>
          <div className="w-full mt-4 md:w-[55%] md:p-0">
            <div className="flex items-center h-full">
              <div className="p-5 md:p-10">
                <div>
                  <h2 className="text-3xl font-semibold leading-tight py-2 text-gray-800">
                    Miami Automechanic
                  </h2>
                  <h3 className="text-xl text-[#3673ac]  pb-8">
                    We pride ourselves on getting your car back on the road
                    without delay
                  </h3>
                  <div className="text-gray-600 text-sm">
                    <p className="pb-8 leading-relaxed">
                      We offer a training programme which involves learning
                      basic fundamental skills of how a vehicle works, function
                      of different components, how to perform diagnosis,
                      maintenance and service repairs. Our professionals know
                      how to handle a wide range of car services. We strive to
                      ensure your vehicle will be performing at its best before
                      leaving our workshop.
                    </p>
                    <ul
                      role="list"
                      className="marker:text-[#1890ff] list-inside pb-4 space-y-1 overflow-hidden"
                    >
                      <li className="flex">
                        <CheckIcon className="h-6 mr-3 text-[#1890ff]" />
                        We are one of the leading auto repair shops serving
                        customers across Nigeria.
                      </li>
                      <li className="flex">
                        <CheckIcon className="h-6 mr-3 text-[#1890ff]" />
                        Our professionals enroll on short courses on new
                        industry standards and techniques.
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mt-8">
                  <Link
                    href="#"
                    className="px-10 py-3 border-1 border-[#3673ac] text-[#3673ac] leading-relaxed transition-all delay-100 rounded-sm ease-in-out hover:bg-[#3673ac] hover:text-[#fff]"
                  >
                    Read more
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Service;
