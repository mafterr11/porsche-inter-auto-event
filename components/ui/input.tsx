import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <div className="flex items-center">
        <div className="relative w-full before:pointer-events-none">
          <input
            className={cn(
              "relative rounded-lg border border-neutral-300 bg-background-accent px-3.5 py-2 text-base text-neutral-800 shadow-input shadow-black/10 !outline-none placeholder:text-neutral-500 focus-visible:ring-[1px] focus-visible:ring-neutral-400",
              className,
            )}
            ref={ref}
            {...props}
          />
        </div>
      </div>
    );
  },
);
Input.displayName = "Input";

export { Input };
