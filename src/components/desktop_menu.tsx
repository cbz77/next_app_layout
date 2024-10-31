import React from "react";
import url_adresy from "./url_adresy";

const DesktopMenu = () => {

    return (
        <div className="hidden md:flex space-x-4">

            {Object.entries(url_adresy).map(([name, url]) => (
                <a key={name} href={url} className="hover:text-gray-400">{name}</a>
            ))}

        </div>
    );
};  

export default DesktopMenu;