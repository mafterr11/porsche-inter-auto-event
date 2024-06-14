import { RoughNotation } from "react-rough-notation";

type NavProps = {
  currentStepIndex: number;
  goTo: (index: number) => void;
};

const SideBar = ({ currentStepIndex, goTo }: NavProps) => {
  return (
    <div className="absolute -top-8 left-0 w-full md:relative md:top-0 md:left-0 md:w-[25%]">
      <nav className="h-full rounded-md border border-neutral-700 bg-background-accent py-5 text-slate-200 md:p-5">
        <ul className="flex flex-wrap justify-center gap-8 md:flex-col">
          <li className="flex flex-col items-start font-medium">
            <span className="hidden font-bold text-sm uppercase text-sidebar-pas md:flex">
              pasul 1
            </span>
            <button
              tabIndex={0}
              onClick={() => goTo(0)}
              className={`text-sm font-bold ${
                currentStepIndex === 0 ? "text-[#E40001]" : ""
              } md:text-base`}
            >
              <RoughNotation
                type="underline"
                show={currentStepIndex === 0}
                color="#E40001"
              >
                Selectați marca
              </RoughNotation>
            </button>
          </li>
          <li className="flex flex-col items-start font-medium">
            <span className="hidden font-bold text-sm uppercase text-sidebar-pas md:flex">
              pasul 2
            </span>
            <button
              tabIndex={0}
              onClick={() => goTo(1)}
              className={`text-sm font-bold ${
                currentStepIndex === 1 ? "text-[#073787]" : ""
              } md:text-base`}
            >
              <RoughNotation
                type="underline"
                show={currentStepIndex === 1}
                color="#073787"
              >
                Locația
              </RoughNotation>
            </button>
          </li>
          <li className="flex flex-col items-start font-medium">
            <span className="hidden font-bold text-sm uppercase text-sidebar-pas md:flex">
              pasul 3
            </span>
            <button
              tabIndex={0}
              onClick={() => goTo(2)}
              // #48A82E
              className={`text-sm font-bold ${
                currentStepIndex === 2 ? "text-[#196350]" : ""
              } md:text-base`}
            >
              <RoughNotation
                type="underline"
                show={currentStepIndex === 2}
                color="#196350"
              >
                Tipul mașinii
              </RoughNotation>
            </button>
          </li>
          <li className="flex flex-col items-start font-medium">
            <span className="hidden font-bold text-sm uppercase text-sidebar-pas md:flex">
              pasul 4
            </span>
            <button
              tabIndex={0}
              onClick={() => goTo(3)}
              className={`text-sm font-bold ${
                currentStepIndex === 3 ? "text-[#805239]" : ""
              } md:text-base`}
            >
              <RoughNotation
                type="underline"
                show={currentStepIndex === 3}
                color="#805239"
              >
                Modelul mașinii
              </RoughNotation>
            </button>
          </li>
          <li className="flex flex-col items-start font-medium">
            <span className="hidden font-bold text-sm uppercase text-sidebar-pas md:flex">
              pasul 5
            </span>
            <button
              tabIndex={0}
              onClick={() => goTo(4)}
              className={`text-sm font-bold ${
                currentStepIndex === 4 ? "text-[#C6CCCA]" : ""
              } md:text-base`}
            >
              <RoughNotation
                type="underline"
                show={currentStepIndex === 4}
                color="#C6CCCA"
              >
                Date personale
              </RoughNotation>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SideBar;
