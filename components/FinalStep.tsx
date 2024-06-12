// components/FinalStep.tsx

import { FormItems } from "@/app/page";

type FinalStepProps = FormItems & {
  goTo: (index: number) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>; // Ensure onSubmit function matches the expected type
};

const FinalStep = ({ name, email, phone, message, goTo, onSubmit }: FinalStepProps) => {
  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-xl font-semibold text-white">Review your details</h2>
      <p className="text-white">Name: {name}</p>
      <p className="text-white">Email: {email}</p>
      <p className="text-white">Phone: {phone}</p>
      <p className="text-white">Message: {message}</p>
      <button
        className="mt-4 p-2 bg-[#77f6aa] text-neutral-900 rounded-md"
        onClick={() => goTo(0)}
      >
        Edit Details
      </button>
    </div>
  );
};

export default FinalStep;
