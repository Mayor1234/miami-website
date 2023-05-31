import Brands from '@/app/components/Brands';
import MenuHeader from '@/app/components/MenuHeader';
import React from 'react';

const page = () => {
  const title = 'service';
  return (
    <div>
      <MenuHeader title={title} />
      <Brands />
    </div>
  );
};

export default page;
