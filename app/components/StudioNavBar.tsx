import Link from 'next/link';
import { ArrowUturnLeftIcon } from '@heroicons/react/24/solid';
// import { TbArrowBack } from 'react-icons/fa'

function StudioNavbar(props: any) {
  return (
    <div className="flex flex-col">
      <Link href="/">
        <div className=" flex items-center text-[#fff] p-5 hover:text-[#1890ff] ">
          <ArrowUturnLeftIcon className="h-4 mr-2 text-[#fff]" />
          Back To Website
        </div>
      </Link>
      <>{props.renderDefault(props)}</>
    </div>
  );
}

export default StudioNavbar;
