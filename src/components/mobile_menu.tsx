import React from "react";
import url_adresy from "./url_adresy";

interface MobileMenuProps {
    isOpen: boolean;
    toggleMenu: () => void;
  }

const MobileMenu = ({isOpen, toggleMenu}: MobileMenuProps) : JSX.Element => {

    return (
        
        <div>

            {/* Dropdown Menu for Mobile */}
            {isOpen && (
                <div className="md:hidden px-2 pt-2 pb-3 space-y-1">
                    
                    {Object.entries(url_adresy).map(([name, url]) => (
                        <a key={name} href={url} className="block text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md">{name}</a>
                    ))}

                </div>
            )}

        </div>

    );
};  

export default MobileMenu;