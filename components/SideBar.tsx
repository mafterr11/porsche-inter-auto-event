import { RoughNotation } from "react-rough-notation";

type NavProps = {
  currentStepIndex: number;
  goTo: (index: number) => void;
};

const SideBar = ({ currentStepIndex, goTo }: NavProps) => {
  return (
    <div className="absolute -top-8 left-0 w-full md:relative md:top-0 md:left-0 md:w-[15%]">
      <nav className="h-full xl:flex items-center justify-center rounded-md border border-neutral-700 bg-background-accent py-5 text-slate-200 md:p-5">
        <ul className="flex flex-wrap justify-center md:flex-col md:items-center">
          {Array.from({ length: 5 }).map((_, index) => (
            <li
              key={index}
              className="flex items-center justify-center md:flex-col md:items-center"
            >
              {index > 0 && (
                <div className="hidden h-[4rem] w-1 bg-slate-400 md:block" />
              )}
              <button
                tabIndex={0}
                onClick={() => goTo(index)}
                className={`flex items-center justify-center text-sm font-bold uppercase text-sidebar-pas transition-all duration-500 ease-in-out ${
                  currentStepIndex === index
                    ? "scale-[1.08] border-[3px] border-white"
                    : "border-slate-400"
                } h-10 w-10 rounded-full border-2 md:text-base xl:h-12 xl:w-12`}
              >
                <span
                  className={`${currentStepIndex === index ? "scale-[1.3] opacity-100" : "opacity-0"} transition-all duration-500 ease-in-out`}
                >
                  {index + 1}
                </span>
              </button>
              {index < 4 && (
                <div className="block h-1 w-8 bg-slate-400 md:hidden" />
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default SideBar;
