import { useState } from "react";
import { FormItems } from "@/app/page";
import FormWrapper from "./FormWrapper";
import { Button } from "@/components/ui/button";

type stepProps = FormItems & {
  updateForm: (fieldToUpdate: Partial<FormItems>) => void;
  nextStep: () => void; // Add nextStep to props
};

const carModels = {
  Audi: ["A3", "A4", "Q2", "Q3", "Q4", "Q5", "Q7", "Q8"],
  Volkswagen: ["Polo", "Golf", "Taigo", "T-Cross", "T-Roc", "ID-3", "ID-4", "ID-5", "ID-7", "Noul Passat", "Noul Tiguan", "Noul Touareg"],
  Skoda: ["Fabia", "Scala", "Octavia", "Superb", "Karoq", "Kodiaq"],
  Seat: ["Ibiza", "Leon", "Ateca", "Tarraco"],
  Cupra: ["Ibiza", "Leon", "Ateca", "Tarraco"]
};

const CarSelectionForm = ({ marca, carModel, updateForm, nextStep }: stepProps) => {
  const [selectedModel, setSelectedModel] = useState<string>(carModel || "");

  const models = marca ? carModels[marca] : [];

  const handleModelChange = (model: string) => {
    setSelectedModel(model);
    updateForm({ carModel: model });
  };

  const handleNextStep = () => {
    if (selectedModel) {
      nextStep();
    }
  };

  return (
    <FormWrapper
      title="Tipul mașinii dvs."
      description="Selectați modelul de mașină"
    >
      <div className="flex flex-wrap gap-2">
        {models.map((model) => (
          <div
            key={model}
            className={`border p-3 rounded-md cursor-pointer ${selectedModel === model ? "bg-neutral-900 border-[#77f6aa]" : "border-neutral-600"}`}
            onClick={() => handleModelChange(model)}
          >
            {model}
          </div>
        ))}
      </div>
    </FormWrapper>
  );
};

export default CarSelectionForm;
