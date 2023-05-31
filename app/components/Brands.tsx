import Image from 'next/image';
import honda from '../../public/icons/honda_miami.png';
import toyota from '../../public/icons/toyota_miami.png';
import benz from '../../public/icons/benz_miami.png';
import lexus from '../../public/icons/lexus_miami.png';
import acura from '../../public/icons/acura_miami.png';
import hyundai from '../../public/icons/hyundai_miami.png';
import ford from '../../public/icons/ford_miami.png';
import nissan from '../../public/icons/nissan_miami.png';

const Brands = () => {
  return (
    <div className="max-w-5xl mx-auto bg-[#f7f8f9] py-8 md:px-8">
      <div>
        <h2 className="font-bold text-2xl text-center pb-12 tracking-wide text-gray-700">
          Featured Brands
        </h2>
      </div>
      <div className="grid gap-8 p-5 grid-cols-2 md:grid-cols-4 md:p-0">
        <div className="shadow-md p-4 flex justify-center items-center">
          <Image src={honda} alt="honda" width={100} height={100} />
        </div>
        <div className="shadow-md p-4 flex justify-center items-center">
          <Image src={ford} alt="honda" width={100} height={100} />
        </div>
        <div className="shadow-md p-4 flex justify-center items-center">
          <Image src={nissan} alt="honda" width={100} height={100} />
        </div>
        <div className="shadow-md p-4 flex justify-center items-center">
          <Image src={benz} alt="honda" width={100} height={100} />
        </div>
        <div className="shadow-md p-4 flex justify-center items-center">
          <Image src={acura} alt="honda" width={100} height={100} />
        </div>
        <div className="shadow-md p-4 flex justify-center items-center">
          <Image src={toyota} alt="honda" width={100} height={100} />
        </div>
        <div className="shadow-md p-4 flex justify-center items-center">
          <Image src={lexus} alt="honda" width={100} height={100} />
        </div>
        <div className="shadow-md p-4 flex justify-center items-center">
          <Image src={hyundai} alt="honda" width={100} height={100} />
        </div>
      </div>
    </div>
  );
};

export default Brands;
