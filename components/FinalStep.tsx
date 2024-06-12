// components/FinalStep.tsx

import { FormItems } from "@/app/page";

type FinalStepProps = FormItems & {
  goTo: (index: number) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>; // Ensure onSubmit function matches the expected type
};

const FinalStep = ({ name, email, phone, message, goTo, onSubmit }: FinalStepProps) => {
  return (
    <div className="flex flex-col gap-3 max-md:text-center">
      <h2 className="text-xl font-semibold text-white">Verificați detaliile</h2>
      <p className="text-white">Nume: {name}</p>
      <p className="text-white">Email: {email}</p>
      <p className="text-white">Telefon: {phone}</p>
      <p className="text-white">Mesaj: {message}</p>
      <button
        className="mt-4 p-2 bg-[#77f6aa] text-neutral-900 rounded-md max-w-[200px] mx-auto xl:mx-0"
        onClick={() => goTo(0)}
      >
        Edit Details
      </button>
    </div>
  );
};

export default FinalStep;
