import Image from "next/image";
import DropdownMenu from "./Dropmenu";
import UserProfileDropdown from "./UserDropDown";

const Header: React.FC = () => (
    <header
        className="w-full flex items-center justify-between px-4 py-3 bg-white"
    >
        <span className="font-bold text-lg text-gray-900hidden sm:inline">
            Job Portal
        </span>
        
        <div className="flex items-center space-x-2">
            <Image
                src="/logo.png"
                alt="Logo"
                width={40}
                height={40}
                className="rounded-full"
            />
            <span className="hidden sm:inline text-2xl font-extrabold text-blue-600 drop-shadow-md animate-pulse">Welcome, User</span>
        </div>
        <div>
            <UserProfileDropdown/>
            {/* <DropdownMenu /> */}
        </div>
    </header>
);

export default Header;