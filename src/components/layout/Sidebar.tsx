import {
  Element4,
  Grid4,
  I24Support,
  Notification,
  Setting,
  Wallet2,
} from 'iconsax-reactjs';
import React from 'react';
import Logo from '../ui/Logo';
import { usePathname, useRouter } from 'next/navigation';
import { cn } from '@/utils/cn';
import { useAtom } from 'jotai';
import { isSidebarOpenAtom } from '@/state/AppState';
import AuctionModule from '@/modules/LiveAuction';

type MenuItem = {
  label: string;
  icon: React.JSX.Element;
  href: string;
};

const menuItems: MenuItem[] = [
  { icon: <Element4 />, label: 'Marketplace', href: '/marketplace' },
  { icon: <Wallet2 />, label: 'Wallet', href: '/wallet' },
  { icon: <Notification />, label: 'Notification', href: '/notification' },
];

const bottomMenuItems: MenuItem[] = [
  { icon: <I24Support />, label: 'Help & Support', href: '/help' },
  { icon: <Setting />, label: 'Settings', href: '/settings' },
];

type SidebarProps = {
  children: React.ReactNode;
  hideAuctionSection?: boolean; 
};

const Sidebar = ({ children, hideAuctionSection = false }: SidebarProps) => {
  const router = useRouter();
  const pathName = usePathname();
  const [isOpen, setIsOpen] = useAtom(isSidebarOpenAtom);

  
  const gridTemplate = hideAuctionSection
    ? 'grid-cols-[auto_1fr]'
    : 'grid-cols-[auto_3fr_1fr]';

  return (
    <div className={cn('grid transition-all duration-300', gridTemplate)}>
      {/* Sidebar */}
      <div
        className={cn(
          'bg-background sticky top-0 h-dvh border border-gray-400 flex flex-col transition-all duration-300 ease-in-out p-[5px]',
          isOpen ? 'w-[200px]' : 'w-[60px]'
        )}
      >
        {/* Logo */}
        <div
          className="cursor-pointer"
          onClick={() => {
            if (!isOpen) setIsOpen(true);
          }}
        >
          {!isOpen && <Logo />}
          {isOpen && (
            <div className="flex justify-between items-center">
              <Logo isName />
              <Grid4
                size={24}
                color="#fff"
                variant="Outline"
                onClick={() => setIsOpen(false)}
              />
            </div>
          )}
        </div>

        {/* Top Menus */}
        <div className="flex flex-col gap-y-[5px] pt-[5px]">
          {menuItems.map((item, idx) => {
            const isActive = pathName.includes(item.href);
            return (
              <div
                key={idx}
                onClick={() => router.push(item.href)}
                className={cn(
                  'group p-[15px] h-[50px] rounded-[5px] flex items-center gap-x-2 cursor-pointer transition-colors duration-300',
                  isActive ? 'bg-orange-100' : 'bg-gray-200 hover:bg-orange-100',
                  isOpen ? 'w-[190px]' : 'w-[50px]'
                )}
              >
                {React.cloneElement(item.icon, {
                  className: cn(
                    'size-5 text-ghost-white transition-colors duration-300 group-hover:text-primary',
                    `${isActive && 'text-primary'}`
                  ),
                })}
                {isOpen && (
                  <span
                    className={cn(
                      'text-ghost-white text-base font-medium transition-all duration-300 ease-in-out group-hover:text-primary',
                      `${isActive && 'text-primary'}`
                    )}
                  >
                    {item.label}
                  </span>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Menus */}
        <div className="flex flex-col gap-y-[5px] pt-[5px] mt-auto">
          {bottomMenuItems.map((item, idx) => {
            const isActive = pathName.includes(item.href);
            const isHelp = item.label === 'Help & Support';
            const bgColor = isHelp
              ? 'bg-[#F7E733]'
              : isActive
                ? 'bg-orange-100'
                : 'bg-gray-200';

            return (
              <div
                key={idx}
                className={cn(
                  'group p-[15px] h-[50px] rounded-[5px] flex items-center gap-x-2 cursor-pointer transition-colors duration-300',
                  bgColor,
                  isHelp ? '' : 'hover:bg-orange-100',
                  isOpen ? 'w-[190px]' : 'w-[50px]'
                )}
              >
                {React.cloneElement(item.icon, {
                  className: cn(
                    'size-5 transition-colors duration-300',
                    isHelp
                      ? 'text-black'
                      : isActive
                        ? 'text-primary'
                        : 'text-ghost-white group-hover:text-primary'
                  ),
                })}
                {isOpen && (
                  <span
                    className={cn(
                      'text-base font-medium transition-all duration-300 ease-in-out',
                      isHelp
                        ? 'text-black'
                        : isActive
                          ? 'text-primary'
                          : 'text-ghost-white group-hover:text-primary'
                    )}
                  >
                    {item.label}
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Children */}
      <div className="p-5 overflow-y-auto">{children}</div>

      {/* Auction Module */}
      {!hideAuctionSection && (
        <div className="bg-black-200 border-l border-gray-400 px-4 py-[28px] h-dvh sticky top-0 overflow-y-auto scrollbar-hide">
          <AuctionModule />
        </div>
      )}
    </div>
  );
};

export default Sidebar;
