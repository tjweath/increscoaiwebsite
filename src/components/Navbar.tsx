import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto">
        <div className="glass rounded-full px-6 py-3 flex justify-between items-center">
          <div className="text-xl font-semibold">Antimetal</div>
          
          <div className="hidden md:flex space-x-8">
            <a href="#features" className="text-primary hover:text-secondary transition-colors">Enterprise</a>
            <a href="#pricing" className="text-primary hover:text-secondary transition-colors">Pricing</a>
            <a href="#docs" className="text-primary hover:text-secondary transition-colors">Docs</a>
            <a href="#faq" className="text-primary hover:text-secondary transition-colors">FAQ</a>
          </div>

          <div className="hidden md:flex items-center">
            <button className="text-primary hover:text-secondary transition-colors">
              Sign in
            </button>
          </div>

          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden glass mt-2 rounded-2xl p-4">
            <div className="flex flex-col space-y-4">
              <a href="#features" className="text-primary hover:text-secondary transition-colors">Enterprise</a>
              <a href="#pricing" className="text-primary hover:text-secondary transition-colors">Pricing</a>
              <a href="#docs" className="text-primary hover:text-secondary transition-colors">Docs</a>
              <a href="#faq" className="text-primary hover:text-secondary transition-colors">FAQ</a>
              <a href="#signin" className="text-primary hover:text-secondary transition-colors">Sign in</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;