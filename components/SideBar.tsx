import React from "react";

type NavProps = {
  currentStepIndex: number;
  isLastStep: boolean;
  goTo: (index: number) => void;
};

const SideBar = ({ currentStepIndex, goTo, isLastStep }: NavProps) => {
  return (
    <div className="absolute -top-[2.35rem] left-0 w-full md:relative md:top-0 md:left-0 md:w-[20%]">
      <nav className="h-full items-center justify-center rounded-t-lg border border-[#717C9B] bg-background-accent py-5 md:p-5 xl:flex">
        <ul className="pointer-events-none flex flex-wrap justify-center md:flex-col md:items-center">
          {Array.from({ length: 5 }).map((_, index) => (
            <li
              key={index}
              className="flex items-center justify-center md:flex-col md:items-center"
            >
              {index > 0 && (
                <div
                  className={`hidden h-[4rem] w-1 transition-all duration-500 ease-in-out md:block ${
                    currentStepIndex >= index ? "bg-[#717C9B]" : "bg-[#969EB7]"
                  }`}
                />
              )}
              <button
                tabIndex={0}
                onClick={() => goTo(index)}
                className={`flex items-center justify-center text-sm font-bold uppercase text-sidebar-pas transition-all duration-500 ease-in-out ${
                  currentStepIndex >= index
                    ? "scale-[1.08] border-[#717C9B] bg-background-accentClick"
                    : "border-[#969EB7]"
                } h-10 w-10 rounded-full border-2 md:text-base xl:h-12 xl:w-12`}
              >
                <span
                  className={`${
                    currentStepIndex >= index
                      ? "scale-[1.3] opacity-100"
                      : "opacity-0"
                  } transition-all duration-500 ease-in-out`}
                >
                  {index + 1}
                </span>
              </button>
              {index < 4 && (
                <div
                  className={`block h-1 w-8 transition-all duration-500 ease-in-out md:hidden ${
                    currentStepIndex > index ? "bg-[#717C9B]" : "bg-[#969EB7]"
                  }`}
                />
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default SideBar;
