'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Typewriter } from 'react-simple-typewriter';

export default function Home() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="bg-gray-500 text-white">
      {/* Navbar */}
      <nav className="bg-black p-4 fixed w-full top-0 left-0 z-10">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Left Side: Logo + Links */}
          <div className="flex items-center space-x-4">
            {/* Logo */}
            <Link href={'/'} className="flex items-center space-x-2">
              <Image
                src="/p3.jpg" // Replace with the path to your logo image
                alt="Logo"
                width={40} // Adjust width as needed
                height={40} // Adjust height as needed
                className="" // Optional: Add styles like rounded corners
              />
              <span className="text-white text-xl font-bold">Logo</span>
              </Link>
            {/* Links: Home + About */}
            <Link href="/" className="text-white hover:text-gray-400">
              DetailsMore
            </Link>
            <Link href="/about" className="text-white hover:text-gray-400">
              About
            </Link>
          </div>
          {/* Right Side: Register + Login (Desktop Only) */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
            href={'registrationfom'}
              className="text-white bg-yellow-500 px-4 py-2 rounded hover:bg-yellow-400"
            >
              Register
            </Link>
            <Link
              href={"button_login"}
              className="text-white bg-gray-500 px-4 py-2 rounded hover:bg-gray-400"
            >
              Login
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMobileMenu} className="text-white">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-black p-4">
            <Link href='/' className="block text-white hover:text-gray-400">
              ACCOUNT
            </Link>
            <Link href="/" className="block text-white hover:text-gray-400">
              MORE INFORMATION
            </Link>
            <Link
              href={"/register"}
              className="block text-white bg-blue-500 px-4 py-2 rounded mt-2 hover:bg-blue-400"
            >
              Register
            </Link>
            <Link
              href="/button_login"
              className="block text-white bg-gray-500 px-4 py-2 rounded mt-2 hover:bg-gray-400"
            >
              Login
            </Link>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="bg-gray-900 min-h-screen flex flex-col lg:flex-row items-center justify-between p-6 lg:p-12">
        {/* Left Content */}
        <div className="flex-1 flex flex-col items-start space-y-4">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-white">
            Vie Faucet
            <br className="hidden lg:inline-block" />
            <span className="text-yellow-500">
              <Typewriter
                words={[
                  'Iqra Waheed Ahmad!',
                  'Web Developer',
                  'IT Engineer',
                  'UI/UX Designer',
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h1>
          <h1 className="font-semibold text-lg text-white-300">
            "Watch Videos and Start Earning with Minimal Investment!"
          </h1>
          <p className="text-lg text-white-400 max-w-md">
            Looking for a quick and easy way to make money? Dive into an exciting opportunity where you can:
            <br />
            ✔️ <strong>Watch videos online</strong>
            <br />
            ✔️ <strong>Earn money effortlessly</strong>
            <br />
            ✔️ <strong>Start with low investment</strong>
            <br />
            It’s simple, fun, and perfect for beginners. Don't miss out on this chance to grow your income!
            <br />
            <strong>Get started today and see the difference.</strong> Your journey to earning begins now! 🚀
          </p>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center lg:justify-end mt-10 lg:mt-0">
          <Image
            className="object-cover object-center max-w-full h-auto rounded-md shadow-lg hover:scale-105 transition-transform duration-300"
            alt="About"
            width={600}
            height={600}
            src={require('../../../public/P4.jpg')} // Update to the correct image path
          />
        </div>
      </section>
    </div>
  );
}
