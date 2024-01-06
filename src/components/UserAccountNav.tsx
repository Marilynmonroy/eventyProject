import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const UserAccountNav = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button variant="ghost" size="sm" className="relative">
          Mi cuenta
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-white w-60">
        <div className="flex items-center justify-start gap-2 p-2">
          <div className="flex flex-col space-y-0.5 leading-none">
            <p className="font-medium text-sm text-black"></p>
          </div>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
