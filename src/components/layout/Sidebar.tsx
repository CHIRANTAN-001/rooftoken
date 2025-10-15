import { Element4, Grid4, I24Support, Notification, Setting, Wallet2 } from 'iconsax-reactjs';
import React from 'react';
import Logo from '../ui/Logo';
import { usePathname } from 'next/navigation';
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
  { icon: <Notification />, label: 'Notification', href: '/Notification' },
];

const bottomMenuItems: MenuItem[] = [
  { icon: <I24Support />, label: 'Help & Support', href: '/help' },
  { icon: <Setting />, label: 'Settings', href: '/settings' },
];

const Sidebar = ({ children }: { children: React.ReactNode }) => {
  const pathName = usePathname();

  const [isOpen, setIsOpen] = useAtom(isSidebarOpenAtom);
  // const [isHovered, setIsHovered] = React.useState<boolean>(false);

  return (
    <div className="grid grid-cols-[auto_3fr_1fr] transition-all duration-300">
      {/* Sidebar (col-1, auto width) */}
      <div
        className={`bg-background sticky top-0 h-dvh border border-gray-400 flex flex-col transition-all duration-300 ease-in-out p-[5px] ${
          isOpen ? 'w-[200px]' : 'w-[60px]'
        }`}
      >
        {/* Icon */}
        <div
          className="cursor-pointer"
          onClick={() => {
            if (!isOpen) setIsOpen(!isOpen);
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
                onClick={() => {
                  setIsOpen(false);
                }}
              />
            </div>
          )}
        </div>

        {/* Top Menus */}
        <div className="flex flex-col gap-y-[5px] pt-[5px]">
          {menuItems?.map((item, idx) => {
            const isActive = pathName === item.href;
            return (
              <div
                key={idx}
                className={`
                  group
                  ${isActive ? 'bg-orange-100' : 'bg-gray-200'}
                  hover:bg-orange-100
                  ${isOpen ? 'w-[190px]' : 'w-[50px]'}
                  p-[15px]
                  h-[50px]
                  rounded-[5px]
                  flex items-center gap-x-2
                  cursor-pointer
                  transition-colors duration-300
                `}
              >
                {React.cloneElement(item.icon, {
                  className: `
                    size-5
                    text-ghost-white
                    ${isActive ? 'text-primary' : ''}
                    transition-colors duration-300
                    group-hover:text-primary
                  `,
                })}

                {isOpen && (
                  <span
                    className={cn(
                      'text-ghost-white text-base font-medium',
                      `${isActive ? 'text-primary' : ''}`,
                      'transition-all duration-300 ease-in-out',
                      'group-hover:text-primary'
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
          {bottomMenuItems?.map((item, idx) => {
            const isActive = pathName === item.href;
            const isHelp = item.label === 'Help & Support';

            const bgColor = isHelp
              ? 'bg-[#F7E733]'
              : isActive
                ? 'bg-orange-100'
                : 'bg-gray-200';

            const hoverClass = isHelp ? '' : 'hover:bg-orange-100';

            return (
              <div
                key={idx}
                className={cn(
                  'group',
                  bgColor,
                  hoverClass,
                  isOpen ? 'w-[190px]' : 'w-[50px]',
                  'p-[15px] h-[50px] rounded-[5px] flex items-center gap-x-2 cursor-pointer transition-colors duration-300'
                )}
              >
                {React.cloneElement(item.icon, {
                  className: cn(
                    'size-5 transition-colors duration-300',
                    `${isHelp
                      ? 'text-black' 
                      : isActive
                        ? 'text-primary'
                        : 'text-ghost-white'}`,
                    `${!isHelp && 'group-hover:text-primary'}`
                  ),
                })}

                {isOpen && (
                  <span
                    className={cn(
                      'text-base font-medium transition-all duration-300 ease-in-out',
                      `${isHelp
                        ? 'text-black'
                        : isActive
                          ? 'text-primary'
                          : 'text-ghost-white'}`,
                      `${!isHelp && 'group-hover:text-primary'}`
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

      <div className="p-5 overflow-y-auto">{children}</div>

      <div className="bg-black-200 border-l border-gray-400 px-4 py-[28px] h-dvh sticky top-0 overflow-y-auto scrollbar-hide">
        <AuctionModule />
      </div>
    </div>
  );
};

export default Sidebar;
