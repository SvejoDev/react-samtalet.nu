import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const menuItems = [
    { href: "#samtalet", label: "Samtalet och Lyssnandet" },
    { href: "#viktigt", label: "Viktigt att veta om Samtalet.nu" },
    { href: "#om-mig", label: "Om mig" },
    { href: "#boka", label: "boka ditt samtal här" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center h-16 relative">
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-6 py-2 shadow-lg">
                <NavigationMenu className="flex justify-center items-center">
                  <NavigationMenuList className="flex gap-6">
                    {menuItems.map((item) => (
                      <NavigationMenuItem key={item.href}>
                        <NavigationMenuLink
                          href={item.href}
                          className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
                        >
                          {item.label}
                        </NavigationMenuLink>
                      </NavigationMenuItem>
                    ))}
                  </NavigationMenuList>
                </NavigationMenu>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden absolute right-4">
              <button
                onClick={toggleMobileMenu}
                className="inline-flex items-center justify-center p-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-gray-700 hover:text-gray-900 hover:bg-white/30 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-colors shadow-lg"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {isMobileMenuOpen ? (
                  <X className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          <div
            className={`md:hidden ${
              isMobileMenuOpen
                ? "max-h-screen opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <div className="px-4 py-4 bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl mx-4 mt-3 shadow-xl">
              <div className="space-y-2">
                {menuItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={closeMobileMenu}
                    className="flex px-4 py-4 text-base font-medium text-gray-800 hover:text-gray-900 hover:bg-white/40 rounded-xl transition-all duration-200 min-h-[48px] items-center border border-transparent hover:border-white/20"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
