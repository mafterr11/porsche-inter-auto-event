import { useState } from "react";
import { FormItems } from "@/app/page";
import FormWrapper from "./FormWrapper";
import { Button } from "@/components/ui/button"; // Ensure you have this import

type stepProps = FormItems & {
  updateForm: (fieldToUpdate: Partial<FormItems>) => void;
  nextStep: () => void; // Add this to your props
};

const ConditionSelectionForm = ({
  carCondition,
  updateForm,
  nextStep,
}: stepProps) => {
  const [selectedCondition, setSelectedCondition] = useState<string>(
    carCondition || "Mașină nouă",
  );

  const handleConditionChange = (condition: string) => {
    setSelectedCondition(condition);
    updateForm({ carCondition: condition });
    nextStep(); // Move to next step
  };

  return (
    <FormWrapper
      title="Selectați starea mașinii dvs."
      description="Vă rugăm să alegeți dacă mașina este nouă sau rulată."
    >
      <div className="flex flex-col gap-3">
        <div className="flex gap-3">
          <button
            type="button"
            className={`cursor-pointer rounded-md  bg-background-accent p-3 text-neutral-800 transition-all duration-500 ease-in-out hover:bg-background-accentClick active:scale-[0.95]`}
            onClick={() => handleConditionChange("Mașină nouă")}
          >
            Nouă
          </button>
          <button
            type="button"
            className={`cursor-pointer rounded-md  bg-background-accent p-3 text-neutral-800 transition-all duration-500 ease-in-out hover:bg-background-accentClick active:scale-[0.95]`}
            onClick={() => handleConditionChange("Mașină rulată")}
          >
            Rulată
          </button>
        </div>
      </div>
    </FormWrapper>
  );
};

export default ConditionSelectionForm;
