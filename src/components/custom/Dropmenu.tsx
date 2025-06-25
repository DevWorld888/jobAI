"use client";
import { useEffect, useRef, useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { 
  Edit3, 
  UserCheck , 
  HousePlug ,  
  SquareMenu
} from "lucide-react";
import Link from 'next/link';
const DropdownMenu: React.FC = ({}) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const { data: session, status } = useSession();
  const [role, setRole] = useState<string | null>(null);
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

  useEffect(() => {
    const storedRole = localStorage.getItem("next_user_role");
    setRole(storedRole);
  }, []);
  if (status === "loading") return <p>Cargando...</p>;
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

          </ul>
           {session && (
        <>
          <button onClick={() => signOut({ callbackUrl: "/" })}>
            Cerrar sesión
          </button>
          <span>👤 {session.user?.name}</span>

          {role === "seeker" && (
            <>
              <a href="/profile">Mi perfil</a>
              <a href="/tools">Herramientas</a>
            </>
          )}

          {role === "recruiter" && (
            <>
              <a href="/dashboard">Dashboard</a>
              <a href="/post-job">Publicar trabajo</a>
            </>
          )}
        </>
      )}
        </div>
      )}
    </div>
  );
}

export default DropdownMenu;