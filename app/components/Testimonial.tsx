import Image from 'next/image';
import React from 'react';
import client1 from '../../public/images/client.jpg';
import client2 from '../../public/images/client2.jpg';
import client3 from '../../public/images/client3.jpg';

const Testimonial = () => {
  return (
    <div className="max-w-5xl mx-auto px-5 md:px-0 md:pt-8">
      <div>
        <h2 className="font-bold text-2xl text-center  tracking-wide">
          Our Customers Are Happy
        </h2>
      </div>
      <div className="w-full py-5 mb-8 mt-8 md:flex mx-auto gap-8 ">
        <div className="mb-4 lg:mb-0  shadow-sm shadow-slate-400 flex overflow-hidden bg-slate-50 p-8 hover:shadow-lg hover:cursor-pointer ">
          <div>
            <Image
              src={client1}
              alt="customer"
              width={200}
              height={200}
              className="rounded-full object-cover object-top border border-red-6000 aspect-square"
            />
          </div>
          <div className="ml-3 overflow-hidden py-3">
            <blockquote className="relative inline-block text-gray-700 pb-8 before:block  before:absolute before:content-['\201C'] before:text-3xl before:-top-4 before:-left-0 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              delectus cum numquam sunt magni quis nobis. Illum illo ipsum nam
              nemo,
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
              width={200}
              height={200}
              className="rounded-full object-cover object-top border border-red-6000 aspect-square"
            />
          </div>
          <div className="ml-3 overflow-hidden py-3">
            <blockquote className="relative inline-block text-gray-700 pb-8 before:block  before:absolute before:content-['\201C'] before:text-3xl before:-top-4 before:-left-0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              delectus cum numquam sunt magni quis nobis. Illum illo ipsum nam
              nemo,
            </blockquote>
            <span className="capitalize text-lg text-slate-900">
              Andy keneth
            </span>
            <h3 className="text-sm text-slate-500">CEO Andy Group</h3>
          </div>
        </div>
        <div className="flex shadow-sm shadow-slate-400 overflow-hidden bg-slate-50 p-8 hover:shadow-lg hover:cursor-pointer">
          <div>
            <Image
              src={client3}
              alt="customer"
              width={200}
              height={200}
              className="rounded-full object-cover object-top border border-red-6000 aspect-square"
            />
          </div>
          <div className="ml-3 overflow-hidden py-3">
            <blockquote className="relative inline-block text-gray-700 pb-8 before:block  before:absolute before:content-['\201C'] before:text-3xl before:-top-4 before:-left-0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              delectus cum numquam sunt magni quis nobis. Illum illo ipsum nam
              nemo
            </blockquote>
            <span className="capitalize text-lg text-slate-900">
              Andy keneth
            </span>
            <h3 className="text-sm text-slate-500">CEO Andy Group</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
