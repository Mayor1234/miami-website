import MenuHeader from '@/app/components/MenuHeader';
import ceo from '../../../public/images/ceo.jpg';
import Image from 'next/image';
import Testimonial from '@/app/components/Testimonial';

const page = () => {
  const title = 'About';

  return (
    <div>
      <MenuHeader title={title} />
      <div className="max-w-5xl mx-auto md:h-[600px] flex flex-col-reverse gap-8 my-8 md:flex-row md:gap-0 bg-slate-50">
        <div className="w-full md:w-[55%] md:p-0 flex items-center h-full">
          <div className="p-8">
            <h2 className="text-2xl font-semibold pb-2">About Us</h2>
            <p className="max-w-lg text-sm text-gray-600 leading-loose">
              Miami Automechanic was established to deliver a global standard
              automobile diagnosis and repair. We are a dedicated team of
              experienced mechanics who are passionate about keeping your
              vehicles running smoothly. With our latest acquired sophisticated
              equipments, advanced technical skills, we provide top-notch auto
              repair services that are second to none. We also offer a training
              programme which involves learning basic fundamental skills of how
              a vehicle works, function of different components, how to perform
              auto diagnosis, and service repairs. Whether you need routine
              maintenance, major repairs, or diagnostic services, we have you
              covered. <br />
              If you are looking for reliable and professional auto repair
              services, Miami Automechanical is your go-to destination. Our
              skilled mechanics and state-of-the-art facilities make us the top
              choice in the area. Contact us today or visit our location to
              experience the difference in auto repair expertise.
            </p>
          </div>
        </div>
        <div className="w-full p-5  md:w-[45%] md:p-0">
          <Image
            src={ceo}
            alt="about"
            width={930}
            height={600}
            className="w-full object-cover object-center h-full aspect-square"
          />
        </div>
      </div>

      <Testimonial />
    </div>
  );
};

export default page;
