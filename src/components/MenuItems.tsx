import Link from "next/link";
import React, { ReactElement } from "react";
import { IconType } from "react-icons";
interface MenuItemsProps {
  text: string;
  address: string;
  Icon: IconType;
}

const MenuItems: React.FC<MenuItemsProps> = ({ Icon, address, text }) => {
  return (
    <Link
      className="hover:text-amber-500 px-4 flex items-center"
      href={address}
    >
      <Icon className="sm:hidden" />
      <p className="hidden sm:inline uppercase text-sm">{text}</p>
    </Link>
  );
};

export default MenuItems;
