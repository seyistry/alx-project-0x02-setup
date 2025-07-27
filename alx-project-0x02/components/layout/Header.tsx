import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div>
      <ul className="flex gap-2 justify-center py-4">
        <li><Link href={'/home'}>Home</Link></li>
        <li><Link href={'/about'}>About</Link></li>
        <li><Link href={'/posts'}>Post</Link></li>
        <li><Link href={'/users'}>User</Link></li>
      </ul>
    </div>
  );
};

export default Header;
