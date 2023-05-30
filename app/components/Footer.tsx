import Image from 'next/image';
import logo from '../../public/newlogo.png';
import {
  BsFacebook,
  BsTwitter,
  BsYoutube,
  BsLinkedin,
  BsGithub,
} from 'react-icons/bs';
import { AiOutlineCopyrightCircle } from 'react-icons/ai';

const year = new Date().getFullYear();

const Footer = () => {
  return (
    <div className="w-full py-10 text-slate-700 px-4">
      <div className="max-w-[980px] mx-auto flex flex-col md:flex-row gap-4 justify-center items-center md:justify-between">
        <div className="flex items-center gap-2">
          <Image src={logo} width={50} height={50} alt="logo" />
          <p className="flex items-center text-sm font-titleFont gap-1">
            <span className="font-bold text-xl tracking-widest">MA</span> || all
            rights reserved <AiOutlineCopyrightCircle className="mt-[1px]" />{' '}
            {year}
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
