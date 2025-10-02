import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";

export default function Navbar() {
  return (
    <div className="p-4 flex justify-center items-center">
      <NavigationMenu className="flex justify-center items-center">
        <NavigationMenuList className="flex gap-6">
          <NavigationMenuItem>
            <NavigationMenuLink href="#samtalet">
              Samtalet och Lyssnandet
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink href="#viktigt">
              Viktigt att veta om Samtalet.nu
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink href="#om-mig">Om mig</NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink href="#boka">
              boka ditt samtal här
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
