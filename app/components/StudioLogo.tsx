import React from 'react';
import Image from 'next/image';
import studioLogo from '../../public/newlogo.png';

function Logo(props: any) {
  return (
    <div className="flex justify-center items-center ml-2">
      <div>
        <Image width={40} height={40} src={studioLogo} alt="studio logo" />
      </div>
      <>{props.renderDefault(props)}</>
    </div>
  );
}

export default Logo;
