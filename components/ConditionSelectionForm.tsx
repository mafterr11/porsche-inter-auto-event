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
            className={`cursor-pointer rounded-md border-2 p-3 transition-all duration-500 ease-in-out hover:bg-background-accent active:scale-[0.95] ${selectedCondition === "Mașină nouă" ? "border-[#78FAAE] bg-background-accent" : "border-neutral-600 hover:border-[#78FAAE]"}`}
            onClick={() => handleConditionChange("Mașină nouă")}
          >
            Nouă
          </button>
          <button
            type="button"
            className={`cursor-pointer rounded-md border-2 p-3 transition-all duration-500 ease-in-out hover:bg-background-accent active:scale-[0.95] ${selectedCondition === "Mașină rulată" ? "border-[#78FAAE] bg-background-accent" : "border-neutral-600 hover:border-[#78FAAE]"}`}
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
