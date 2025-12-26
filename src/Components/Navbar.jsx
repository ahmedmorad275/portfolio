import { MdOutlineLanguage } from 'react-icons/md';
import { MdOutlineLightMode } from 'react-icons/md';

export default function Navbar() {
  const links = [
    {
      name: 'Home',
      path: '#',
    },
    {
      name: 'About',
      path: '#',
    },
    {
      name: 'Skills',
      path: '#',
    },
    {
      name: 'Projects',
      path: '#',
    },
    {
      name: 'Experience',
      path: '#',
    },
    {
      name: 'Contact',
      path: '#',
    },
  ];
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent shadow shadow-slate-800">
      <div className="px-2 container mx-auto flex justify-between h-14 items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-white">
          <p>
            <span className="text-blue-600">{'<'}</span>AM
            <span className="text-blue-600">{'/>'}</span>
          </p>
        </div>
        {/* Links */}
        <div className="linksBox hidden md:block">
          <ul className="flex space-x-8 items-center text-sm">
            {links.map((link) => (
              <li key={link.name}>
                <a
                  href={link.path}
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        {/* Icons */}
        <div className="iconsBox flex gap-4 items-center">
          {/* Theme Toggle */}
          <div className="toggleTheme cursor-pointer p-2 rounded-lg bg-slate-800 text-gray-300 hover:bg-slate-700 transition-colors">
            <MdOutlineLightMode />
          </div>
          {/* Language Switch */}
          <div className="switchLanguage cursor-pointer flex items-center space-x-1 rtl:space-x-reverse p-2 rounded-lg bg-slate-800 text-gray-300 hover:bg-slate-700 transition-colors">
            <MdOutlineLanguage />
            <p className="text-xs">AR</p>
          </div>
        </div>
      </div>
    </nav>
  );
}
