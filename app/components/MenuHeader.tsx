import Image from 'next/image';
import Link from 'next/link';
import display from '../../public/images/miami4.jpg';
import Header from './Header';

const MenuHeader = ({ title }: { title: string }) => {
  return (
    <div className="bg-local bg-hero bg-no-repeat bg-cover w-full h-60 md:h-72 bg-center  mb-0 md:mb-10">
      <div className="w-full h-full backdrop-brightness-75">
        <div>
          <Header />
          <div className="flex  h-40 flex-col justify-center items-center ">
            <div>
              <h3 className="text-[#fff] uppercase tracking-widest font-bold text-2xl md:text-4xl">
                {title}
              </h3>
            </div>
            <div className="text-[#fff] text-sm md:text-base  tracking-widest uppercase flex justify-center items-center gap-2 mt-2 md:mt-4">
              <Link href="/">
                <span className="hover:text-[#1890ff]">home</span>
              </Link>

              <p> &#10095; {title}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuHeader;
