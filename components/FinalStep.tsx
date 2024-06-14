// components/FinalStep.tsx

import { FormItems } from "@/app/page";

type FinalStepProps = FormItems & {
  goTo: (index: number) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>; // Ensure onSubmit function matches the expected type
};

const FinalStep = ({
  name,
  email,
  phone,
  message,
  goTo,
  onSubmit,
}: FinalStepProps) => {
  return (
    <div className="flex flex-col gap-3 max-md:text-center">
      <h2 className="text-xl font-semibold">Verificați detaliile</h2>
      <p>Nume: {name}</p>
      <p>Email: {email}</p>
      <p>Telefon: {phone}</p>
      <p>Mesaj: {message}</p>
      <button
        className="mx-auto mt-4 max-w-[200px] rounded-md bg-[#77f6aa] p-2 text-neutral-900 xl:mx-0"
        onClick={() => goTo(0)}
      >
        Editați detaliile
      </button>
    </div>
  );
};

export default FinalStep;
