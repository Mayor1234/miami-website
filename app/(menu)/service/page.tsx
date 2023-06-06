import Brands from '@/app/components/Brands';
import MenuHeader from '@/app/components/MenuHeader';
import React from 'react';

const page = () => {
  const title = 'service';
  return (
    <div>
      <MenuHeader title={title} />
      <div className="max-w-5xl mx-auto my-12">
        <div className="my-8 p-5">
          <h2 className="text-2xl font-bold pb-8 text-center tracking-wide text-gray-700">
            Our Services
          </h2>
          <p className="px-5 text-gray-600 md:px-0">
            We are a team of highly skilled and experienced technicians
            dedicated to providing exceptional automotive repair and maintenance
            services. Whether you need routine maintenance, major repairs, or
            diagnostic services, we have you covered. With our state-of-the-art
            facilities and commitment to customer satisfaction, we strive to be
            your go-to destination for all your automobile repair needs. <br />
            We also offer a specialized training program designed to equip
            individuals with the skills and knowledge necessary to excel in the
            field of automobile repair and maintenance.
          </p>
        </div>
        <ul className="grid gap-8 grid-cols-1 p-5  lg:grid-cols-2 lg:p-0">
          <li className="">
            <div className="p-5 shadow-md hover:shadow-lg">
              <h3 className="font-semibold text-xl pb-4 text-[--sec-color]">
                Diagnostic Services
              </h3>
              <p className="text-base text-gray-600">
                Our skilled technicians utilize the latest diagnostic equipment
                to identify and troubleshoot issues with your vehicle. We have
                expertise in diagnosing problems with engine performance,
                electrical systems, transmission, brakes, suspension, and more.
                With our comprehensive diagnostic services, we can accurately
                pinpoint the root cause of any problem your vehicle may be
                experiencing.
              </p>
            </div>
          </li>
          <li className="">
            <div className="p-5 shadow-md hover:shadow-lg">
              <h3 className="font-semibold text-xl pb-4 text-[--sec-color]">
                Routine Maintenance
              </h3>
              <p className="text-base text-gray-600">
                Regular maintenance is crucial for keeping your vehicle in
                optimal condition and prolonging its lifespan. Our routine
                maintenance services include oil changes, filter replacements,
                fluid checks and top-ups, tire rotations, wheel alignments, and
                comprehensive vehicle inspections. We follow
                manufacturer-recommended maintenance schedules to ensure your
                vehicle operates at its best.
              </p>
            </div>
          </li>
          <li className="">
            <div className="p-5 shadow-md hover:shadow-lg">
              <h3 className="font-semibold text-xl pb-4 text-[--sec-color]">
                Brake Repair and Replacement
              </h3>
              <p className="text-base text-gray-600">
                Your safety on the road is our priority, and brakes are a
                critical component of your vehicle&apos;s safety system. We
                offer expert brake repair and replacement services, including
                brake pad replacement, rotor resurfacing or replacement, brake
                fluid flush, and brake system inspections. Our technicians are
                skilled in diagnosing and resolving braking issues efficiently.
              </p>
            </div>
          </li>
          <li className="">
            <div className="p-5 shadow-md hover:shadow-lg">
              <h3 className="font-semibold text-xl pb-4 text-[--sec-color]">
                Engine Repair and Rebuild
              </h3>
              <p className="text-base text-gray-600">
                If your engine is experiencing performance problems or requires
                major repairs, our technicians have the expertise to diagnose
                and repair a wide range of engine issues. From minor repairs to
                complete engine rebuilds, we use high-quality parts and advanced
                techniques to restore your engine&apos;s performance and
                reliability.
              </p>
            </div>
          </li>
          <li className="">
            <div className="p-5 shadow-md hover:shadow-lg">
              <h3 className="font-semibold text-xl pb-4 text-[--sec-color]">
                Transmission Services
              </h3>
              <p className="text-base text-gray-600">
                Transmission problems can significantly affect the performance
                and drivability of your vehicle. Our technicians are well-versed
                in both automatic and manual transmissions, and we offer a range
                of services, including transmission fluid flush, filter
                replacement, clutch repairs, gearbox inspections, and complete
                transmission rebuilds. We aim to restore your transmission to
                optimal condition.
              </p>
            </div>
          </li>
          <li className="">
            <div className="p-5 shadow-md hover:shadow-lg ">
              <h3 className="font-semibold text-xl pb-4 text-[--sec-color]">
                Suspension and Steering Repairs
              </h3>
              <p className="text-base text-gray-600">
                A smooth and comfortable ride depends on a well-maintained
                suspension and steering system. Our technicians are skilled in
                diagnosing and repairing issues with shocks, struts, springs,
                control arms, ball joints, tie rods, and more. We provide
                comprehensive suspension inspections, repairs, and replacements
                to ensure a safe and enjoyable driving experience.
              </p>
            </div>
          </li>
        </ul>
      </div>
      <Brands />
    </div>
  );
};

export default page;
