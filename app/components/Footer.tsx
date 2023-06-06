import Image from 'next/image';
import logo from '../../public/newlogo.png';
import { BsFacebook, BsTwitter, BsYoutube, BsLinkedin } from 'react-icons/bs';
import { AiOutlineCopyrightCircle } from 'react-icons/ai';
import Link from 'next/link';

const year = new Date().getFullYear();

const Footer = () => {
  return (
    <div className="w-full py-10 text-slate-700">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-4 justify-center items-center md:justify-between">
        <div className="flex items-center gap-2">
          <Link href="/">
            <div className="h-8 w-8 md:h-10 md:w-10">
              <Image
                src={logo}
                width={50}
                height={50}
                alt="logo"
                className="object-cover"
              />
            </div>
          </Link>
          <p className="flex items-center text-sm font-titleFont gap-1">
            <span className="font-bold text-lg md:text-xl tracking-widest">
              MA
            </span>{' '}
            || all rights reserved{' '}
            <AiOutlineCopyrightCircle className="mt-[1px]" /> {year}
          </p>
        </div>

        <div className="flex gap-6">
          <BsYoutube className="w-6 h-6 hover:text-slate-500 duration-300 cursor-pointer" />
          <BsFacebook className="w-6 h-6  hover:text-slate-500 duration-300 cursor-pointer" />
          <BsLinkedin className="w-6 h-6  hover:text-slate-500 duration-300 cursor-pointer" />
          <BsTwitter className="w-6 h-6  hover:text-slate-500 duration-300 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
