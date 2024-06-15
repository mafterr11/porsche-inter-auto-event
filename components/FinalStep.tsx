// components/FinalStep.tsx

import { FormItems } from "@/app/page";

type FinalStepProps = FormItems & {
  goTo: (index: number) => void;
};

const FinalStep = ({
  name,
  email,
  phone,
  message,
  goTo,
}: FinalStepProps) => {
  return (
    <div className="flex flex-col gap-3 max-md:text-center">
      <h2 className="text-xl font-semibold">Verificați detaliile</h2>
      <p>Nume: {name}</p>
      <p>Email: {email}</p>
      <p>Telefon: {phone}</p>
      <p>Mesaj: {message}</p>
      <button
        className="mx-auto mt-4 max-w-[200px] rounded-md bg-[#384967] p-2 text-neutral-200 xl:mx-0"
        onClick={() => goTo(4)}  // Set index to 4 for UserInfoForm
      >
        Editați detaliile
      </button>
    </div>
  );
};

export default FinalStep;
