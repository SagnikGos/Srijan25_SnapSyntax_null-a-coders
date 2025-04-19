import React, { useState, useEffect, useRef } from 'react';


const navLinks = [
  { name: 'Home', href: '#' },
  { name: 'About', href: '#' },
  { name: 'Techstack', href: '#' },
  { name: 'Projects', href: '#' }
];

const FloatingNavbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  const scrollThreshold = 50;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current && currentScrollY > scrollThreshold) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`
        fixed
        top-5
        left-1/2
        transform
        -translate-x-1/2

        z-50
        bg-purple-300
        text-white
        px-6
        py-2
        rounded-full
        shadow-lg

        transition-transform duration-300 ease-in-out
        ${isVisible ? 'translate-y-0' : '-translate-y-[calc(100%+1.25rem)]'}
      `}
      aria-label="Main navigation"
    >
      <ul className="flex items-center space-x-6">
        {navLinks.map((link) => (
          <li key={link.name}>
            <a
              href={link.href}
              className="hover:text-gray-300 transition-colors duration-200 ease-in-out text-sm sm:text-base"
            >
              {link.name}
            </a>
          </li>
        ))}
        <li>
          <button
            className="
              bg-purple-700
              hover:bg-purple-900
              text-white
              font-medium
              px-4
              py-1.5
              rounded-full
              text-sm sm:text-base
              transition-colors
              duration-200
              ease-in-out
            "
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default FloatingNavbar;
