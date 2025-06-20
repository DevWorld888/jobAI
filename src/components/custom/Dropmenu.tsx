"use client";
import { useEffect, useRef, useState } from "react";
import { 
  Edit3, 
  UserCheck , 
  HousePlug ,  
  SquareMenu
} from "lucide-react";
import Link from 'next/link';
const DropdownMenu: React.FC = ({}) => {
  const menuRef = useRef<HTMLDivElement>(null);

  const [isOpen, setIsOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && event.target && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, setIsOpen]);


  return (
    <div className="relative">
      <button 
        onClick={toggleMenu} 
        className="flex items-center gap-2 p-2 bg-white border rounded-4xl hover:bg-black transition-colors group"
        
      >
        <SquareMenu className={`h-4 w-4 ${isOpen ? "transform rotate-180" : ""} group-hover:bg-white`} />
      </button>
      {isOpen && (
        <div ref={menuRef} className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg z-10">
          <ul className="p-2">
            <li className="flex items-center gap-2 p-2  hover:bg-black cursor-pointer group">
              <Edit3 className="h-4 w-4 transition-colors group-hover:text-white " />
              <Link href="/dashboard" className="text-gray-700 group-hover:text-white transition-colors">
                Post a Job
              </Link>
            </li>
            
            <li className="flex items-center gap-2 p-2 hover:bg-black cursor-pointer group">
              <UserCheck  className="h-4 w-4 group-hover:text-white transition-colors" />
             <Link href="/login" className="text-gray-700 group-hover:text-white transition-colors">
                Login
              </Link>
            </li>
            <li className="flex items-center gap-2 p-2 hover:bg-black cursor-pointer group">
              <HousePlug  className="h-4 w-4 group-hover:text-white transition-colors" />
              <Link href="/" className="text-gray-700 group-hover:text-white transition-colors">
                 Home
              </Link>
              
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default DropdownMenu;