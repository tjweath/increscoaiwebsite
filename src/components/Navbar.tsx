import { Menu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Add type declaration for the Cal object on window
declare global {
  interface Window {
    Cal?: {
      (command: string, ...args: any[]): void;
      loaded?: boolean;
      ns?: Record<string, any>;
    };
  }
}

const Navbar = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <nav className="fixed w-full z-50 px-6 py-4 bg-background/80 backdrop-blur-lg border-b">
      <div className="max-w-[1200px] mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="font-medium text-2xl bg-gradient-to-r from-emerald-500 to-teal-500 text-transparent bg-clip-text">INCRESCO AI</span>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <button onClick={scrollToTop} className="text-foreground/70 hover:text-foreground transition-colors text-sm">HOME</button>
          <a href="#services" className="text-foreground/70 hover:text-foreground transition-colors text-sm">SERVICES</a>
          <a href="#about" className="text-foreground/70 hover:text-foreground transition-colors text-sm">ABOUT</a>
          <a href="#contact" className="text-foreground/70 hover:text-foreground transition-colors text-sm">CONTACT</a>
          <button 
            data-cal-link="increscoai/incresco-ai-transformation-navbar"
            data-cal-namespace="incresco-ai-transformation-navbar"
            data-cal-config='{"layout":"month_view"}'
            className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-4 py-2 rounded-md text-sm hover:opacity-90 transition-opacity"
          >
            Book a Call
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger className="p-2">
              <Menu className="h-6 w-6" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[200px] bg-white">
              <DropdownMenuItem className="cursor-pointer" onClick={scrollToTop}>
                HOME
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer" asChild>
                <a href="#services">SERVICES</a>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer" asChild>
                <a href="#about">ABOUT</a>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer" asChild>
                <a href="#contact">CONTACT</a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <button 
            data-cal-link="increscoai/incresco-ai-transformation-navbar"
            data-cal-namespace="incresco-ai-transformation-navbar"
            data-cal-config='{"layout":"month_view"}'
            className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-4 py-2 rounded-md text-sm hover:opacity-90 transition-opacity"
          >
            Book a Call
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;