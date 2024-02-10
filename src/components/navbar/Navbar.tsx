'use client';
import React from 'react';
import NavbarTitle from './NavbarTitle';
import Search from './Search';
import SocialIcon from './SocialIcon';
import UserMenu from './UserMenu';
import { ModeToggle } from '../Mode-toggle';
import { User } from '@prisma/client';

interface NavbarProps {
  currentUser?: User | null;
}

const Navbar: React.FC<NavbarProps> = ({ currentUser }) => {
  return (
    <div className="fixed w-full dark:bg-black dark:text-white bg-white z-10 shadow-sm  backdrop-filter backdrop-blur-xl">
      <div className="py-3 border-b-[1px]  ">
        <div>
          <div className="flex justify-between items-center  px-6 ">
            <div className="flex gap-6  ">
              <NavbarTitle />
            </div>
            <div className="hidden lg:block">
              <Search />
            </div>
            <div className="flex gap-4  ">
              <ModeToggle />
              <SocialIcon />
              <UserMenu currentUser={currentUser} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
