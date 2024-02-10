import React from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '../ui/button';
import { CreditCard, Keyboard, LogOut, Settings, User } from 'lucide-react';
import { FaUserCircle } from 'react-icons/fa';
import { Dialog, DialogContent, DialogTrigger } from '../ui/dialog';
import RegisterModal from '../modals/RegisterModal';
import LoginModal from '../modals/LoginModal';
import { User as PrismaUser } from '@prisma/client';
import { signOut } from 'next-auth/react';

interface UserMenuProps {
  currentUser?: PrismaUser | null;
}

const UserMenu: React.FC<UserMenuProps> = ({ currentUser }) => {
  return (
    <div className="lg:pl-10">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            className="flex gap-2 text-lg p-2 rounded-full"
          >
            <FaUserCircle className="h-full w-full " />
            {currentUser && (
              <span className="text-sm">{currentUser?.name}</span>
            )}
          </Button>
        </DropdownMenuTrigger>
        {currentUser ? (
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
                <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <CreditCard className="mr-2 h-4 w-4" />
                <span>Billing</span>
                <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
                <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Keyboard className="mr-2 h-4 w-4" />
                <span>Keyboard shortcuts</span>
                <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => signOut()}>
              <LogOut className="mr-2 h-4 w-4" />
              <span>Log out</span>
              <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuContent>
        ) : (
          <DropdownMenuContent className="w-56 ">
            <Dialog>
              <DialogTrigger style={{ width: '100%' }}>
                <DropdownMenuItem
                  style={{ width: '100%' }}
                  onSelect={(e) => e.preventDefault()}
                >
                  <div className="flex">
                    <User className="mr-2 h-4 w-4" />
                    <span>sign in</span>
                  </div>
                </DropdownMenuItem>
              </DialogTrigger>
              <DialogContent>
                <LoginModal />
              </DialogContent>
            </Dialog>
            <DropdownMenuSeparator />
            <Dialog>
              <DialogTrigger style={{ width: '100%' }}>
                <DropdownMenuItem
                  style={{ width: '100%' }}
                  onSelect={(e) => e.preventDefault()}
                >
                  <div className="flex items-center h-full w-full p-0">
                    <CreditCard className="mr-2 h-4 w-4" />
                    <span>Register</span>
                  </div>
                </DropdownMenuItem>
              </DialogTrigger>
              <DialogContent>
                <RegisterModal />
              </DialogContent>
            </Dialog>
          </DropdownMenuContent>
        )}
      </DropdownMenu>
    </div>
  );
};

export default UserMenu;
