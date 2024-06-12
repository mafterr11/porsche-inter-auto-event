import { useState } from "react";
import { FormItems } from "@/app/page";
import FormWrapper from "./FormWrapper";
import { Button } from "@/components/ui/button"; // Ensure you have this import

type stepProps = FormItems & {
  updateForm: (fieldToUpdate: Partial<FormItems>) => void;
  nextStep: () => void; // Add this to your props
};

const ConditionSelectionForm = ({ carCondition, updateForm, nextStep }: stepProps) => {
  const [selectedCondition, setSelectedCondition] = useState<string>(carCondition || "Masina noua");

  const handleNextStep = () => {
    updateForm({ carCondition: selectedCondition });
    nextStep();
  };

  return (
    <FormWrapper
      title="Selectați starea mașinii dvs."
      description="Vă rugăm să alegeți dacă mașina este nouă sau rulată."
    >
      <div className="flex flex-col gap-3">
        <div className="flex gap-3">
          <button
            className={`border p-3 rounded-md cursor-pointer ${selectedCondition === "Mașină nouă" ? "bg-neutral-900 border-[#77f6aa]" : "border-neutral-600"}`}
            onClick={() => setSelectedCondition("Mașină nouă")}
          >
            Nouă
          </button>
          <button
            className={`border p-3 rounded-md cursor-pointer ${selectedCondition === "Mașină rulată" ? "bg-neutral-900 border-[#77f6aa]" : "border-neutral-600"}`}
            onClick={() => setSelectedCondition("Mașină rulată")}
          >
            Rulată
          </button>
        </div>
      </div>
    </FormWrapper>
  );
};

export default ConditionSelectionForm;
