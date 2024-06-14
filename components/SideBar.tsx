import { RoughNotation } from "react-rough-notation";

type NavProps = {
  currentStepIndex: number;
  goTo: (index: number) => void;
};

const SideBar = ({ currentStepIndex, goTo }: NavProps) => {
  return (
    <div className="absolute -top-8 left-0 w-full md:relative md:top-0 md:left-0 md:w-[15%]">
      <nav className="h-full rounded-md border border-neutral-700 bg-background-accent py-5 text-slate-200 md:p-5">
        <ul className="flex flex-wrap justify-center md:flex-col md:items-center">
          {Array.from({ length: 5 }).map((_, index) => (
            <li key={index} className="flex items-center md:flex-col md:items-center justify-center">
              {index > 0 && (
                <div className="hidden md:block w-1 h-[4rem] bg-slate-400" />
              )}
              <button
                tabIndex={0}
                onClick={() => goTo(index)}
                className={`flex items-center justify-center font-bold text-sm uppercase text-sidebar-pas transition-all ease-in-out duration-500 ${
                  currentStepIndex === index ? "scale-[1.15]" : ""
                } md:text-base w-10 h-10 xl:h-12 xl:w-12 rounded-full border-2 ${
                  currentStepIndex === index
                    ? "border-electric-green"
                    : "border-slate-400"
                }`}
              >
                <span className={`${ currentStepIndex === index ? "scale-[1.3]" : ""} transition-all ease-in-out duration-500`}>{index + 1}</span>
              </button>
              {index < 4 && (
                <div className="block md:hidden w-8 h-1 bg-slate-400" />
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default SideBar;
