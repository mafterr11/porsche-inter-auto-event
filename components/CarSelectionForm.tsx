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

const carModelImages: Record<string, string> = {
  "A3": "/modele/audi/a3.png",
  "A4": "/modele/audi/a4.png",
  "Q2": "/modele/audi/q2.png",
  "Q3": "/modele/audi/q3.png",
  "Q4": "/modele/audi/q4.png",
  "Q5": "/modele/audi/q5.png",
  "Q7": "/modele/audi/q7.png",
  "Q8": "/modele/audi/q8.png",
  "Polo": "/modele/vw/polo.png",
  "Golf": "/modele/vw/golf.png",
  "Taigo": "/modele/vw/taigo.png",
  "T-Cross": "/modele/vw/T-cross.png",
  "T-Roc": "/modele/vw/T-roc.png",
  "ID-3": "/modele/vw/id-3.png",
  "ID-4": "/modele/vw/id-4.png",
  "ID-5": "/modele/vw/id-5.png",
  "ID-7": "/modele/vw/id-7.png",
  "Noul Passat": "/modele/vw/nou-passat.png",
  "Noul Tiguan": "/modele/vw/nou-tiguan.png",
  "Noul Touareg": "/modele/vw/nou-touareg.png",
  "Fabia": "/modele/skoda/fabia.png",
  "Scala": "/modele/skoda/scala.png",
  "Octavia": "/modele/skoda/octavia.png",
  "Superb": "/modele/skoda/superb.png",
  "Karoq": "/modele/skoda/karoq.png",
  "Kodiaq": "/modele/skoda/kodiaq.png",
  "Ibiza": "/modele/seat/ibiza.png",
  "Leon": "/modele/seat/leon.png",
  "Ateca": "/modele/seat/ateca.png",
  "Tarraco": "/modele/seat/tarraco.png",
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
      title="Modelele noastre"
      description="Vă rugăm să selectați modelul de mașinii dvs."
    >
      <div className="max-h-96 xs:max-md:max-h-[37rem] overflow-y-auto">
        <div className="grid grid-cols-2 xl:grid-cols-3 gap-2">
          {models.map((model) => (
            <div
              key={model}
              className={`border p-3 rounded-md cursor-pointer flex items-center justify-center flex-col ${selectedModel === model ? "bg-neutral-900 border-[#77f6aa]" : "border-neutral-600"}`}
              onClick={() => handleModelChange(model)}
            >
              <img src={carModelImages[model]} alt={model} className="w-28 h-auto mb-2" />
              <p className="text-center">{model}</p>
            </div>
          ))}
        </div>
      </div>
    </FormWrapper>
  );
};

export default CarSelectionForm;
