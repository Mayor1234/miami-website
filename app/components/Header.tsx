'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../public/newlogo.png';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full h-20 font-titleFont sticky top-0 z-30 bg-slate-50">
      <div className="max-w-full md:max-w-5xl h-full mx-auto flex justify-between items-center md:px-0">
        <Link href="/">
          <div className="flex items-center relative   h-8 w-8 md:h-12 md:w-12 ml-8 md:ml-0">
            <Image
              width={50}
              height={50}
              src={logo}
              alt="logo"
              className="object-cover"
            />
            <span className="text-gray-800 font-bold text-xl md:text-2xl tracking-widest">
              MA
            </span>
          </div>
        </Link>
        <div>
          <ul className="hidden lg:inline-flex gap-8 uppercase text-sm text-gray-800 font-semibold">
            <Link href="/">
              <li className="transition-all duration-300 ease-in-out hover:text-[--pry-color]">
                Home
              </li>
            </Link>
            <Link href="/service">
              <li className="transition-all  duration-300  ease-in-out hover:text-[--pry-color]">
                Services
              </li>
            </Link>
            <Link href="/blog">
              <li className="transition-all duration-300  ease-in-out hover:text-[--pry-color]">
                Blog
              </li>
            </Link>
            <Link href="/about">
              <li className="transition-all duration-300  ease-in-out hover:text-[--pry-color]">
                About
              </li>
            </Link>
            <Link href="/contact">
              <li className="transition-all duration-300 ease-in-out hover:text-[--pry-color]">
                Contact
              </li>
            </Link>
          </ul>
          <div className="relative top-0 right-0 w-full h-full flex items-center justify-center flex-col  md:hidden">
            <div
              onClick={toggleMenu}
              className="cursor-pointer absolute right-0 -top-4 z-50 mb-4"
            >
              {isOpen ? (
                <XMarkIcon className="h-8 font-bold text-black z-50 pr-5" />
              ) : (
                <Bars3Icon className="h-8 font-bold text-black z-50 pr-5" />
              )}
            </div>
            {isOpen && (
              <ul className="absolute right-0 top-0 flex flex-col h-screen p-12 mt-10 bg-slate-50 w-screen z-40 gap-8 uppercase text-sm text-gray-800 font-semibold shadow-md">
                <Link href="/">
                  <li className="transition-all py-4 px-8 duration-300 ease-in-out hover:text-[--pry-color]">
                    Home
                  </li>
                </Link>
                <Link href="/service">
                  <li className="transition-all py-4 px-8 duration-300  ease-in-out hover:text-[--pry-color]">
                    Services
                  </li>
                </Link>
                <Link href="/blog">
                  <li className="transition-all py-4 px-8 duration-300  ease-in-out hover:text-[--pry-color]">
                    Blog
                  </li>
                </Link>
                <Link href="/about">
                  <li className="transition-all py-4 px-8 duration-300  ease-in-out hover:text-[--pry-color]">
                    About
                  </li>
                </Link>
                <Link href="/contact">
                  <li className="transition-all py-4 px-8 duration-300 ease-in-out hover:text-[--pry-color]">
                    Contact
                  </li>
                </Link>
              </ul>
            )}
          </div>
        </div>

        {/* <div className="flex items-center gap-8 text-lg">
          <div className="flex items-center gap-1">
            <img
              className="w-8 h-8 rounded-full"
              src="https://www.noormohammad.live/static/media/roundedProfile.477a194221d255c8ce26.png"
              alt="logo"
            />
            <p className="text-sm font-medium">Hello Stranger!</p>
          </div>

          <button className="uppercase text-sm border-[1px] border-primaryColor hover:border-secondaryColor px-4 py-1 font-semibold hover:text-white rounded-md hover:bg-secondaryColor transition-all duration-300 active:bg-yellow-600">
            Sign In
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default Header;
