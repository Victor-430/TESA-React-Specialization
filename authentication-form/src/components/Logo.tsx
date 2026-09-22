import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

function Logo({ className }: LogoProps) {
  return (
    <span
      className={cn("relative block text-foreground size-24", className)}
      aria-hidden="true"
    >
      <span className="absolute top-1/2 left-1/2 block size-14 -translate-x-1/2 -translate-y-1/2">
        <span className="absolute top-2 left-7 size-3 rounded-full bg-current" />
        <span className="absolute top-6 left-3 size-3 rounded-full bg-current" />
        <span className="absolute top-6 left-7 size-3 rounded-full bg-current" />
        <span className="absolute top-6 left-11 size-3 rounded-full bg-current" />
        <span className="absolute top-10 left-7 size-3 rounded-full bg-current" />
        <span className="absolute top-4.5 left-5.5 h-0.5 w-4 rotate-[-35deg] bg-current" />
        <span className="absolute top-7.5 left-5.5 h-0.5 w-5 bg-current" />
        <span className="absolute top-10 left-5.75 h-0.5 w-4 rotate-35 bg-current" />
      </span>
    </span>
  );
}

export { Logo };

