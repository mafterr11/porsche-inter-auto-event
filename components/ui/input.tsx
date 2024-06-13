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
              "relative rounded-lg border border-neutral-600 bg-neutral-750 px-3.5 py-2 text-sm text-neutral-200 shadow-input shadow-black/10 !outline-none placeholder:text-neutral-500 focus-visible:ring-2 focus-visible:ring-[#77f6aa]/70",
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
