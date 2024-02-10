import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';

const NavbarTitle = () => {
  const router = useRouter();
  return (
    <div>
      <Image
        onClick={() => router.push('/')}
        alt="Logo"
        className=" cursor-pointer rounded-md "
        height="80"
        width="80"
        src="/logo.jpg"
      />
    </div>
  );
};

export default NavbarTitle;
