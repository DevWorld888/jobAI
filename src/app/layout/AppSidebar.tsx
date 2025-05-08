import React, { useCallback, useEffect, useRef, useState } from 'react'

import Link from 'next/link';
import { useSidebar } from '@/context/SidebarContext';
import Image from 'next/image';

import { Grid, ShoppingCart, Users, Settings, HelpCircle, ChevronDown, ChevronRight } from 'lucide-react';

type NavItem = {
  name: string,
  icon: React.ComponentType<any>,
  path?: string,
  subItems?: { name: string; path: string; pro?: boolean; new?: boolean }[];
}

const navItems: NavItem[] = [
  {
    icon: Grid,
    name: "Dashboard",
    subItems: [{ name: "Ecommerce", path: "/", pro: false }],
  },
  {
    icon: ShoppingCart,
    name: "Products",
    subItems: [
      { name: "List", path: "/products", pro: false },
      { name: "Add New", path: "/products/new", pro: true, new: true },
    ],
  },
  {
    icon: Users,
    name: "Customers",
    path: "/customers",
  },
  {
    icon: Settings,
    name: "Settings",
    subItems: [
      { name: "General", path: "/settings/general", pro: false },
      { name: "Security", path: "/settings/security", pro: true },
    ],
  },
  {
    icon: HelpCircle,
    name: "Help",
    path: "/help",
  },
];


//   {
//     icon: BsGridFill,
//     name: "Dashboard",
//     subItems: [{ name: "Ecommerce", path: "/", pro: false }],
//   },
//   {
//     icon: AiFillCalendar,
//     name: "Calendar",
//     path: "/calendar",
//   },
//   {
//     icon: FaUserCircle,
//     name: "User Profile",
//     path: "/profile",
//   },

//   {
//     name: "Forms",
//     icon: SiGoogleforms,
//     subItems: [{ name: "Form Elements", path: "/form-elements", pro: false }],
//   },
//   {
//     name: "Tables",
//     icon: BsTable,
//     subItems: [{ name: "Basic Tables", path: "/basic-tables", pro: false }],
//   },
//   {
//     name: "Pages",
//     icon: MdContactPage,
//     subItems: [
//       { name: "Blank Page", path: "/blank", pro: false },
//       { name: "404 Error", path: "/error-404", pro: false },
//     ],
//   },
// ];

// const othersItems: NavItem[] = [
//   {
//     icon: IoPieChartSharp ,
//     name: "Charts",
//     subItems: [
//       { name: "Line Chart", path: "/line-chart", pro: false },
//       { name: "Bar Chart", path: "/bar-chart", pro: false },
//     ],
//   },
//   {
//     icon: FaBox ,
//     name: "UI Elements",
//     subItems: [
//       { name: "Alerts", path: "/alerts", pro: false },
//       { name: "Avatar", path: "/avatars", pro: false },
//       { name: "Badge", path: "/badge", pro: false },
//       { name: "Buttons", path: "/buttons", pro: false },
//       { name: "Images", path: "/images", pro: false },
//       { name: "Videos", path: "/videos", pro: false },
//     ],
//   },
//   {
//     icon: BsPlugin ,
//     name: "Authentication",
//     subItems: [
//       { name: "Sign In", path: "/signin", pro: false },
//       { name: "Sign Up", path: "/signup", pro: false },
//     ],
//   },
// ];

const AppSidebar: React.FC = () => {
  const { isExpanded, isMobileOpen, isHovered, setIsHovered } = useSidebar();
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});


  const toggleSubMenu = (name: string) => {
    setOpenItems(prev => ({
      ...prev,
      [name]: !prev[name]
    }));
  };


  return (
    <aside
      className={`fixed mt-16 flex flex-col lg:mt-0 top-0 px-5 left-0 bg-white dark:bg-gray-900 dark:border-gray-800 text-gray-900 h-screen transition-all duration-300 ease-in-out z-50 border-r border-gray-200 dark:text-amber-50
        ${
          isExpanded || isMobileOpen
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
    <div
        className={`py-8 flex  ${
          !isExpanded && !isHovered ? "lg:justify-center" : "justify-start"
        }`}
      >
        <Link href="/">
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
        </Link>
      </div>
    <nav>
        <ul className="space-y-1">
          {navItems.map((item) => (
            <li key={item.name} className="mb-1">
              {/* Item with subitems */}
              {item.subItems ? (
                <div>
                  <button
                    onClick={() => toggleSubMenu(item.name)}
                    className="flex items-center justify-between w-full px-3 py-2 text-left rounded-md hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center">
                      <item.icon className="w-5 h-5 mr-3 text-gray-600" />
                      <span >{item.name}</span>
                    </div>
                    {openItems[item.name] ? (
                      <ChevronDown className="w-4 h-4" />
                    ) : (
                      <ChevronRight className="w-4 h-4" />
                    )}
                  </button>
                  
                  {/* Subitems */}
                  {openItems[item.name] && (
                    <ul className="pl-10 mt-1 space-y-1">
                      {item.subItems.map((subItem) => (
                        <li key={subItem.name}>
                          <a
                            href={subItem.path}
                            className="flex items-center px-3 py-2 text-sm rounded-md hover:bg-gray-200 transition-colors"
                          >
                            <span>{subItem.name}</span>
                            {subItem.pro && (
                              <span className="ml-2 text-xs bg-blue-500 text-white px-1.5 py-0.5 rounded-full">PRO</span>
                            )}
                            {subItem.new && (
                              <span className="ml-2 text-xs bg-green-500 text-white px-1.5 py-0.5 rounded-full">NEW</span>
                            )}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ) : (
                /* Regular item without subitems */
                <a
                  href={item.path}
                  className="flex items-center px-3 py-2 rounded-md hover:bg-gray-200 transition-colors"
                >
                  <item.icon className="w-5 h-5 mr-3 text-gray-600" />
                  <span>{item.name}</span>
                </a>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default AppSidebar
