import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Button, buttonVariants } from "./ui/button";

const Navbar = () => {
  const user = null;
  return (
    <div className="bg-white sticky z-50 top-0 inset-x-0 h-16">
      <header className="relative bg-white">
        <MaxWidthWrapper>
          <div className="border-b border-gray-300">
            <div className="flex h-16 items-center">
              {/*Mobile*/}
              <div className="ml-4 flex lg:ml-0">
                <Link
                  href="/"
                  className="font-extrabold text-3xl text-rose-500"
                >
                  Eventy
                </Link>
              </div>

              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  {user ? null : (
                    <Link
                      className={buttonVariants({ variant: "ghost" })}
                      href={""}
                    >
                      Accede a tu cuenta
                    </Link>
                  )}
                  {user ? (
                    <p></p>
                  ) : (
                    <Link
                      className={buttonVariants({ variant: "default" })}
                      href={""}
                    >
                      Registrate
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </header>
    </div>
  );
};

export default Navbar;
