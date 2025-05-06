import React, { useCallback, useState } from 'react'

import Link from 'next/link';
import { useSidebar } from '@/context/SidebarContext';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { BsGridFill } from "react-icons/bs"; import { AiFillCalendar } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { SiGoogleforms } from "react-icons/si";
import { BsTable } from "react-icons/bs"; import { MdContactPage } from "react-icons/md";
import { FaChevronDown } from "react-icons/fa";
import { HiDotsHorizontal } from "react-icons/hi";
import { IoPieChartSharp } from "react-icons/io5";
import { FaBox } from "react-icons/fa";
import { BsPlugin } from "react-icons/bs";
type NavItem = {
  name: string,
  icon: React.ComponentType<any>,
  path?: string,
  subItems?: { name: string; path: string; pro?: boolean; new?: boolean }[];
}

const navItems: NavItem[] = [
  {
    icon: BsGridFill,
    name: "Dashboard",
    subItems: [{ name: "Ecommerce", path: "/", pro: false }],
  },
  {
    icon: AiFillCalendar,
    name: "Calendar",
    path: "/calendar",
  },
  {
    icon: FaUserCircle,
    name: "User Profile",
    path: "/profile",
  },

  {
    name: "Forms",
    icon: SiGoogleforms,
    subItems: [{ name: "Form Elements", path: "/form-elements", pro: false }],
  },
  {
    name: "Tables",
    icon: BsTable,
    subItems: [{ name: "Basic Tables", path: "/basic-tables", pro: false }],
  },
  {
    name: "Pages",
    icon: MdContactPage,
    subItems: [
      { name: "Blank Page", path: "/blank", pro: false },
      { name: "404 Error", path: "/error-404", pro: false },
    ],
  },
];

const othersItems: NavItem[] = [
  {
    icon: IoPieChartSharp ,
    name: "Charts",
    subItems: [
      { name: "Line Chart", path: "/line-chart", pro: false },
      { name: "Bar Chart", path: "/bar-chart", pro: false },
    ],
  },
  {
    icon: FaBox ,
    name: "UI Elements",
    subItems: [
      { name: "Alerts", path: "/alerts", pro: false },
      { name: "Avatar", path: "/avatars", pro: false },
      { name: "Badge", path: "/badge", pro: false },
      { name: "Buttons", path: "/buttons", pro: false },
      { name: "Images", path: "/images", pro: false },
      { name: "Videos", path: "/videos", pro: false },
    ],
  },
  {
    icon: BsPlugin ,
    name: "Authentication",
    subItems: [
      { name: "Sign In", path: "/signin", pro: false },
      { name: "Sign Up", path: "/signup", pro: false },
    ],
  },
];

const AppSidebar: React.FC = () => {
  const { isExpanded, isMobileOpen, isHovered, setIsHovered } = useSidebar();
  const pathname = usePathname();
  const [openSubmenu, setOpenSubmenu] = useState<{
    type: "main" | "others";
    index: number;
  } | null>(null);

  const renderMenuItems = (
    items: NavItem[],
    menuType: "main" | "others"
  ) => {
    return (
      <>
        <ul className="flex flex-col gap-4 text-red-900 dark:text-gray-200 ">
          {items.map((nav, index) => {

            return (
              <li key={nav.name}>
                {nav.subItems ? (
                  <button onClick={() => handleSubmenuToggle(index, menuType)}
                    className={`menu-item group  ${openSubmenu?.type === menuType && openSubmenu?.index === index
                      ? "menu-item-active"
                      : "menu-item-inactive"
                      } cursor-pointer ${!isExpanded && !isHovered
                        ? "lg:justify-center"
                        : "lg:justify-start"
                      }`}
                  >
                    <span
                      className={` ${openSubmenu?.type === menuType && openSubmenu?.index === index
                        ? "menu-item-icon-active"
                        : "menu-item-icon-inactive"
                        }`}
                    >
                      <nav.icon />
                    </span>
                    {(isExpanded || isHovered || isMobileOpen) && (
                      <span className={`menu-item-text`}>{nav.name}</span>
                    )}
                    {(isExpanded || isHovered || isMobileOpen) && (
                      <FaChevronDown
                        className={`ml-auto w-5 h-5 transition-transform duration-200  ${openSubmenu?.type === menuType &&
                          openSubmenu?.index === index
                          ? "rotate-180 text-brand-500"
                          : ""
                          }`}
                      />
                    )}
                  </button>
                ) : (
                  nav.path && (
                    <Link
                      href={nav.path}
                      className={`menu-item group ${isActive(nav.path) ? "menu-item-active" : "menu-item-inactive"
                        }`}
                    >
                      <span
                        className={`${isActive(nav.path)
                          ? "menu-item-icon-active"
                          : "menu-item-icon-inactive"
                          }`}
                      >
                        <nav.icon />
                      </span>
                      {(isExpanded || isHovered || isMobileOpen) && (
                        <span className={`menu-item-text`}>{nav.name}</span>
                      )}
                    </Link>
                  )
                )}
              </li>
            )
          })}
        </ul>
      </>
    )
  };

  const isActive = useCallback((path: string) => path === pathname, [pathname]);
  const handleSubmenuToggle = (index: number, menuType: "main" | "others") => {
    setOpenSubmenu((prevOpenSubmenu) => {
      if (
        prevOpenSubmenu &&
        prevOpenSubmenu.type === menuType &&
        prevOpenSubmenu.index === index
      ) {
        return null;
      }
      return { type: menuType, index };
    });
  };
  return (
    <aside className={`fixed mt-16 flex flex-col lg:mt-0 top-0 px-5 left-0 bg-white dark:bg-gray-900 dark:border-gray-800 text-gray-900 h-screen transition-all duration-300 ease-in-out z-50 border-r border-gray-200   lg:translate-y-0 lg:shadow-none shadow-lg
      ${isExpanded || isMobileOpen
        ? "w-[290px]"
        : isHovered
          ? "w-[290px]"
          : "w-[90px]"
      }
      ${isMobileOpen ? "translate-x-0" : "-translate-x-full"}
      lg:translate-x-0`}
      onMouseEnter={() => !isExpanded && setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`py-8 flex  ${!isExpanded && !isHovered ? "lg:justify-center" : "justify-start"
        }`}>
        {isExpanded || isHovered || isMobileOpen ? (
          <>
            <Image
              className="dark:hidden"
              src="/images/logo/logo.svg"
              alt="Logo"
              width={150}
              height={40}
            />
            <Image
              className="hidden dark:block"
              src="/images/logo/logo-dark.svg"
              alt="Logo"
              width={150}
              height={40}
            />
          </>
        ) : (
          <Image
            src="/images/logo/logo-icon.svg"
            alt="Logo"
            width={32}
            height={32}
          />
        )}
      </div>
      <div className="flex flex-col overflow-y-auto duration-300 ease-linear no-scrollbar">
        <nav className="mb-6">
          <div className="flex flex-col gap-4">
            <div>
              <h2
                className={`mb-4 text-xs uppercase flex leading-[20px] text-gray-400 ${!isExpanded && !isHovered
                  ? "lg:justify-center"
                  : "justify-start"
                  }`}
              >
                {isExpanded || isHovered || isMobileOpen ? (
                  "Menu"
                ) : (
                  <HiDotsHorizontal />
                )}
              </h2>
              {renderMenuItems(navItems, "main")}
            </div>
            <div className="">
              <h2
                className={`mb-4 text-xs uppercase flex leading-[20px] text-gray-400 ${
                  !isExpanded && !isHovered
                    ? "lg:justify-center"
                    : "justify-start"
                }`}
              >
                {isExpanded || isHovered || isMobileOpen ? (
                  "Others"
                ) : (
                  <HiDotsHorizontal />
                )}
              </h2>
              {renderMenuItems(othersItems, "others")}
            </div>
          </div>
        </nav>
      </div >
    </aside >
  )
}

export default AppSidebar
