import Image from 'next/image';
import React from 'react';
import client1 from '../../public/images/client.jpg';
import client2 from '../../public/images/client2.jpg';
import client3 from '../../public/images/client3.jpg';

const Testimonial = () => {
  return (
    <div className="max-w-5xl mx-auto px-5 md:px-0 md:pt-8">
      <div>
        <h2 className="font-bold text-2xl text-gray-700 text-center tracking-wide pt-4 md:pt-0">
          Our Customers Are Happy
        </h2>
      </div>
      <div className="w-full md:py-5 mb-8 mt-8 md:flex mx-auto gap-8 ">
        <div className="mb-4 lg:mb-0  shadow-sm shadow-slate-400 flex overflow-hidden bg-slate-50 p-8 hover:shadow-lg hover:cursor-pointer ">
          <div>
            <Image
              src={client1}
              alt="customer"
              width={300}
              height={300}
              className="rounded-full object-cover object-top aspect-square"
            />
          </div>
          <div className="ml-3 overflow-hidden py-3">
            <blockquote className="relative inline-block  text-gray-700 pb-8 before:block  before:absolute before:content-['\201C'] before:text-3xl before:-top-4 before:-left-0 ">
              Throughout the entire process, Miami Automechanic demonstrated a
              commitment to honesty and transparency. They provided a detailed
              breakdown of the repairs needed and offered practical solutions to
              fit within my budget. I never felt pressured or coerced into
              unnecessary services.
            </blockquote>
            <span className="capitalize text-lg text-slate-900">
              Andy keneth
            </span>
            <h3 className="text-sm text-slate-500">CEO Andy Group</h3>
          </div>
        </div>
        <div className=" mb-4  lg:mb-0 flex shadow-sm shadow-slate-400  overflow-hidden bg-slate-50 p-8 hover:shadow-lg hover:cursor-pointer">
          <div>
            <Image
              src={client2}
              alt="customer"
              width={300}
              height={300}
              className="rounded-full object-cover object-top border border-red-6000 aspect-square"
            />
          </div>
          <div className="ml-3 overflow-hidden py-3">
            <blockquote className="relative inline-block text-base text-gray-700 pb-8 before:block  before:absolute before:content-['\201C'] before:text-3xl before:-top-4 before:-left-0">
              Miami Automehcanic took the time to carefully listen to my
              concerns and thoroughly inspect my vehicle. Their knowledge and
              attention to detail were truly impressive. They explained the
              issues in a clear and concise manner, ensuring I understood the
              necessary repairs and their associated costs.
            </blockquote>
            <span className="capitalize text-lg text-slate-900">
              Mrs Mary George
            </span>
            <h3 className="text-sm text-slate-500">TEACHER</h3>
          </div>
        </div>
        <div className="flex shadow-sm shadow-slate-400 overflow-hidden bg-slate-50 p-8 hover:shadow-lg hover:cursor-pointer">
          <div>
            <Image
              src={client3}
              alt="customer"
              width={300}
              height={300}
              className="rounded-full object-cover object-top border border-red-6000 aspect-square"
            />
          </div>
          <div className="ml-3 overflow-hidden py-3">
            <blockquote className="relative inline-block text-base text-gray-700 pb-8 before:block  before:absolute before:content-['\201C'] before:text-3xl before:-top-4 before:-left-0">
              Overall, my experience with Miami Automechanic was
              outstanding.They possess a rare combination of technical
              expertise, integrity, and genuine care for their customers. I will
              undoubtedly be returning to them for all my future automotive
              needs and will enthusiastically recommend them to family and
              friends.
            </blockquote>
            <span className="capitalize text-lg text-slate-900">
              Dr Ben Osagie
            </span>
            <h3 className="text-sm text-slate-500"> DOCTOR</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
