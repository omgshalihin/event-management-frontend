import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => (
  <nav>
    {/* <h1>All Products</h1> */}
    <div className="logo">
      <Link className="logo" href="/">
        <Image href="/" src="/logo.png" width={60} height={60} alt="logo" />
      </Link>
    </div>
    <Link href="/">Home</Link>
    <Link href="/about">About</Link>
    <Link href="/users">Members</Link>
    <Link href="/form">Register</Link>
  </nav>
);

export default Navbar;
