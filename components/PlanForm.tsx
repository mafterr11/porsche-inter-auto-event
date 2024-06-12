"use client";

import { useState } from "react";
import * as ToggleGroup from "@radix-ui/react-toggle-group";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import FormWrapper from "./FormWrapper";
import { FormItems } from "@/app/page";
import Image from "next/image";

type stepProps = FormItems & {
  updateForm: (fieldToUpdate: Partial<FormItems>) => void;
};

type Plan = "Audi" | "Volkswagen" | "Skoda" | "Seat" | "Cupra";

const PlanForm = ({ updateForm, marca }: stepProps) => {
  const [planSelected, setPlanSelected] = useState<Plan>(marca);

  const handleValueChange = (planSelected: Plan) => {
    if (planSelected) {
      setPlanSelected(planSelected);
      updateForm({ marca: planSelected });
    }
  };

  return (
    <FormWrapper
      title="Mărcile noastre"
      description="Vă rugăm să selectați marca mașinii dvs."
    >
      <ToggleGroup.Root
        orientation="horizontal"
        className="grid grid-cols-3 gap-2 my-2 md:flex md:flex-wrap "
        type="single"
        value={planSelected}
        onValueChange={handleValueChange}
      >
        <ToggleGroup.Item
          value="Audi"
          className="border border-neutral-600 flex gap-3 p-6 h-[6.7rem] xs:h-32 w-[6.7rem] xs:w-32  rounded-md  data-[state=on]:border-[#77f6aa] data-[state=on]:bg-gray-300 bg-white focus:border-[#77f6aa] outline-none hover:border-[#77f6aa] md:h-44 md:w-[30%] md:flex-col md:justify-between md:gap-0"
        >
          <Image src="/audi.png" width={300} height={300} alt="alabala" />
        </ToggleGroup.Item>
        <ToggleGroup.Item
          value="Volkswagen"
          className="border border-neutral-600 flex gap-3 p-3 h-[6.7rem] xs:h-32 w-[6.7rem] xs:w-32  rounded-md  data-[state=on]:border-[#77f6aa] data-[state=on]:bg-gray-300 bg-white focus:border-[#77f6aa] outline-none hover:border-[#77f6aa] md:h-44 md:w-[30%] md:flex-col md:justify-between md:gap-0"
        >
          <Image src="/vw.png" width={300} height={300} alt="alabala" />
        </ToggleGroup.Item>
        <ToggleGroup.Item
          value="Skoda"
          className="border border-neutral-600 flex gap-3 p-6 h-[6.7rem] xs:h-32 w-[6.7rem] xs:w-32  rounded-md  data-[state=on]:border-[#77f6aa] data-[state=on]:bg-gray-300 bg-white focus:border-[#77f6aa] outline-none hover:border-[#77f6aa] md:h-44 md:w-[30%] md:flex-col md:justify-between md:gap-0"
        >
          <Image src="/skoda.png" width={300} height={300} alt="alabala" />
        </ToggleGroup.Item>
        <ToggleGroup.Item
          value="Seat"
          className="border relative border-neutral-600 flex gap-3 p-3 h-[6.7rem] xs:h-32 w-[6.7rem] xs:w-32  rounded-md  data-[state=on]:border-[#77f6aa] data-[state=on]:bg-gray-300 bg-white focus:border-[#77f6aa] outline-none hover:border-[#77f6aa] md:h-44 md:w-[30%] md:flex-col md:justify-between md:gap-0"
        >
          <Image
            src="/seat.png"
            fill
            alt="alabala"
            className="abosolute inset-0 object-contain"
          />
        </ToggleGroup.Item>
        <ToggleGroup.Item
          value="Cupra"
          className="border relative border-neutral-600 flex gap-3 p-3 h-[6.7rem] xs:h-32 w-[6.7rem] xs:w-32  rounded-md  data-[state=on]:border-[#77f6aa] data-[state=on]:bg-gray-300 bg-white focus:border-[#77f6aa] outline-none hover:border-[#77f6aa] md:h-44 md:w-[30%] md:flex-col md:justify-between md:gap-0"
        >
          <Image
            src="/cupra.png"
            fill
            alt="alabala"
            className="absolute inset-0 object-contain"
          />
        </ToggleGroup.Item>
      </ToggleGroup.Root>
    </FormWrapper>
  );
};

export default PlanForm;
