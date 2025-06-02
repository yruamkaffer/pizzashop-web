import { Separator } from "@radix-ui/react-separator";
import { Home, Pizza, UtensilsCrossed } from "lucide-react";
import { NavLink } from "./nav-link";
import { ThemeToggle } from "./theme/theme-toogle";
import { AccountMenu } from "./account-menu";

export function Header() {
  return (
    <div className="border-b">
        <div className="flex h-16 items-center gap-6 px-6">
            <Pizza className="w-6 h-6" />
            <Separator orientation="vertical" className="h-6" />

            <nav className="flex items-center space-x-4 lg:space-x-6">
                <NavLink to={"/"}>
                    <Home className="w-4 h-4" />
                    Inicio
                </NavLink>

                <NavLink to={"/orders"}>
                    <UtensilsCrossed className="w-4 h-4" />
                    Pedidos
                </NavLink>
            </nav>

            <div className="ml-auto flex items-center gap-2">
                <ThemeToggle />
                <AccountMenu />
            </div>
        </div>
    </div>
  );
}