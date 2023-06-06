import Link from 'next/link';
import { MdOutlineMonitor } from 'react-icons/md';

const BannerDrop = () => {
  return (
    <div className="max-w-5xl mx-auto flex flex-col gap-10 lg:gap-4 lg:flex-row justify-center items-center h-auto lg:h-60 bg-[#1890ff] text-white py-8 px-8 -mt-10 z-50">
      <div className="w-full lg:w-[60%] flex flex-col gap-3">
        <p className="text-sm uppercase font-bodyFont font-semibold text-white/50">
          believe the hype
        </p>
        <h3 className="font-bold capitalize text-xl md:text-3xl">
          From routine maintenance to major repairs, we’ve got you covered
        </h3>
        <p className="text-xs text-white/50">
          Call us 24/7 on 08096430887, 08038074534
        </p>
      </div>
      <div className="w-full lg:w-[40%] flex items-center justify-center gap-2 lg:gap-8">
        <Link href="https://youtube.com/@miamiautomobile5566">
          <div className="w-full flex flex-col items-center group">
            <MdOutlineMonitor className="text-4xl text-gray-300 group-hover:text-white duration-300" />
            <p className="text-xs md:text-sm font-titleFont text-white/50 group-hover:text-white">
              Watch us on youtube
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default BannerDrop;
