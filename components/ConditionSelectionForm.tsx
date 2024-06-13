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
  };

  const handleNextStep = () => {
    if (selectedCondition) {
      updateForm({ carCondition: selectedCondition });
      nextStep();
    }
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
            className={`cursor-pointer rounded-md border-2 p-3 ${selectedCondition === "Mașină nouă" ? "border-[#48A82E] bg-neutral-900" : "border-neutral-600 hover:border-[#48A82E]"}`}
            onClick={() => handleConditionChange("Mașină nouă")}
          >
            Nouă
          </button>
          <button
            type="button"
            className={`cursor-pointer rounded-md border-2 p-3 ${selectedCondition === "Mașină rulată" ? "border-[#48A82E] bg-neutral-900" : "border-neutral-600 hover:border-[#48A82E]"}`}
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
