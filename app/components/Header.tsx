import Image from 'next/image';
import Link from 'next/link';
import logo from '../../public/newlogo.png';

const Header = () => {
  return (
    <div className="w-full h-20  font-titleFont sticky top-0 z-50 px-4 ">
      <div className="max-w-5xl px-4 md:px-8 md:max-w-7xl h-full mx-auto flex justify-between items-center">
        <Link href="/">
          <div className="flex items-center relative h-12 w-12">
            <Image
              width={50}
              height={50}
              src={logo}
              alt="logo"
              className="object-cover "
            />
            <span className="font-bold text-2xl tracking-widest">MA</span>
          </div>
        </Link>
        <div>
          <ul className="hidden lg:inline-flex gap-8 uppercase text-sm text-gray-900 font-semibold">
            <Link href="/">
              <li className="">Home</li>
            </Link>
            <Link href="/service">
              <li className="">Service</li>
            </Link>
            <Link href="/blog">
              <li className="">Blog</li>
            </Link>
            <Link href="/about">
              <li className="">About</li>
            </Link>
            <Link href="/contact">
              <li className="">Contact</li>
            </Link>
          </ul>
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
