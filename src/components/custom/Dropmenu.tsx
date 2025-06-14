"use client";
import { useState } from "react";
import { 
  Edit3, 
  Copy, 
  Archive, 
  ArrowRight,  
  Heart, 
  Trash2,
  SquareMenu
} from "lucide-react";

const DropdownMenu: React.FC = ({}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button 
        onClick={toggleMenu} 
        className="flex items-center gap-2 p-2 bg-white border rounded-4xl hover:bg-gray-100 transition-colors"
      >
        
        <SquareMenu className={`h-4 w-4 ${isOpen ? "transform rotate-180" : ""}`} />
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg z-10">
          <ul className="p-2">
            <li className="flex items-center gap-2 p-2 hover:bg-gray-100 cursor-pointer">
              <Edit3 className="h-4 w-4" />
              Edit
            </li>
            <li className="flex items-center gap-2 p-2 hover:bg-gray-100 cursor-pointer">
              <Copy className="h-4 w-4" />
              Copy
            </li>
            <li className="flex items-center gap-2 p-2 hover:bg-gray-100 cursor-pointer">
              <Archive className="h-4 w-4" />
              Archive
            </li>
            <li className="flex items-center gap-2 p-2 hover:bg-gray-100 cursor-pointer">
              <ArrowRight className="h-4 w-4" />
              Share
            </li>
            <li className="flex items-center gap-2 p-2 hover:bg-gray-100 cursor-pointer">
              <Heart className="h-4 w-4" />
              Save
            </li>
            <li className="flex items-center gap-2 p-2 hover:bg-gray-100 cursor-pointer">
              <Trash2 className="h-4 w-4" />
              Delete
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default DropdownMenu;