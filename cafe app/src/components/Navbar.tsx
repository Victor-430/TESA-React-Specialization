import type { NavbarProps } from "../types";

export default function Navbar({
  isLoggedIn,
  name,
  orderCount,
  onLoginToggle,
}: NavbarProps) {
  return (
    <header className="border-border bg-base/80 sticky top-0 z-20 border-b backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3.5">
        <div className="">
          
          <span className="font-display font-normal  bg-black  rounded-lg p-2 text-white text-xl tracking-tight">
            VaciBrew
          </span>
        </div>

        <div className="flex items-center gap-3">
          {orderCount > 0 ? (
            <span className="btn-glass-accent px-3 py-1.5 text-xs">
              Order ({orderCount})
            </span>
          ) : null}


          {isLoggedIn ? (
            <span className="font-body text-muted hidden text-sm sm:inline">
              Welcome, {name}
            </span>
          ) : null}

          <button
            type="button"
            className={isLoggedIn ? "btn-glass" : "btn-glass-accent"}
            onClick={onLoginToggle}
          >
            {isLoggedIn ? "Log out" : "Log in"}
          </button>
        </div>
      </div>
    </header>
  );
}
