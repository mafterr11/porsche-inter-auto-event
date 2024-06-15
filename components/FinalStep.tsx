// components/FinalStep.tsx

import { FormItems } from "@/app/page";

type FinalStepProps = FormItems & {
  goTo: (index: number) => void;
};

const FinalStep = ({ name, email, phone, message, goTo }: FinalStepProps) => {
  const handleRestart = () => {
    window.location.reload(); // This will refresh the page
  };

  return (
    <div className="flex flex-col gap-3 text-neutral-900 max-md:text-center">
      <h2 className="text-xl font-semibold">Verificați detaliile</h2>
      <p>
        <span className="font-bold">Nume:</span> {name}
      </p>
      <p>
        <span className="font-bold">Email:</span> {email}
      </p>
      <p>
        <span className="font-bold">Telefon:</span> {phone}
      </p>
      <p>
        <span className="font-bold">Mesaj:</span> {message}
      </p>
      <button
        className="mx-auto mt-4 max-w-[200px] rounded-md bg-[#384967] p-2 text-white xl:mx-0"
        onClick={handleRestart} // Set index to 4 for UserInfoForm
      >
        Începeți din nou
      </button>
    </div>
  );
};

export default FinalStep;
