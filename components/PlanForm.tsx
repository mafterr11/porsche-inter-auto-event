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
        className="my-2 grid grid-cols-3 gap-2 md:flex md:flex-wrap"
        type="single"
        value={planSelected}
        onValueChange={handleValueChange}
      >
        <ToggleGroup.Item
          value="Audi"
          className="relative flex h-[6.7rem] w-[6.7rem] gap-3 rounded-md border-2 border-neutral-600 bg-white p-6 outline-none hover:border-[#F50537] focus:border-[#F50537] data-[state=on]:border-[#F50537] data-[state=on]:bg-gray-300 xs:h-32 xs:w-32 md:h-44 md:w-[30%] md:flex-col md:justify-between md:gap-0"
        >
          <Image src="/audi.png" fill priority alt="Audi logo" className="absolute inset-0 object-contain p-3"/>
        </ToggleGroup.Item>
        <ToggleGroup.Item
          value="Volkswagen"
          className="relative flex h-[6.7rem] w-[6.7rem] gap-3 rounded-md border-2 border-neutral-600 bg-white p-3 outline-none hover:border-[#F50537] focus:border-[#F50537] data-[state=on]:border-[#F50537] data-[state=on]:bg-gray-300 xs:h-32 xs:w-32 md:h-44 md:w-[30%] md:flex-col md:justify-between md:gap-0"
        >
          <Image
            src="/vw.png"
            fill
            className="absolute inset-0 object-contain p-3"
            priority
            alt="Volkswagen logo"
          />
        </ToggleGroup.Item>
        <ToggleGroup.Item
          value="Skoda"
          className="relative flex h-[6.7rem] w-[6.7rem] gap-3 rounded-md border-2 border-neutral-600 bg-white p-6 outline-none hover:border-[#F50537] focus:border-[#F50537] data-[state=on]:border-[#F50537] data-[state=on]:bg-gray-300 xs:h-32 xs:w-32 md:h-44 md:w-[30%] md:flex-col md:justify-between md:gap-0"
        >
          <Image
            src="/skoda.png"
            className="absolute inset-0 object-contain p-3"
            fill
            priority
            alt="Skoda logo"
          />
        </ToggleGroup.Item>
        <ToggleGroup.Item
          value="Seat"
          className="relative flex h-[6.7rem] w-[6.7rem] gap-3 rounded-md border-2 border-neutral-600 bg-white p-3 outline-none hover:border-[#F50537] focus:border-[#F50537] data-[state=on]:border-[#F50537] data-[state=on]:bg-gray-300 xs:h-32 xs:w-32 md:h-44 md:w-[30%] md:flex-col md:justify-between md:gap-0"
        >
          <Image
            src="/seat.png"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 24rem" // Add the sizes prop
            alt="Seat logo"
            className="absolute inset-0 object-contain p-3"
          />
        </ToggleGroup.Item>
        <ToggleGroup.Item
          value="Cupra"
          className="relative flex h-[6.7rem] w-[6.7rem] gap-3 rounded-md border border-neutral-600 bg-white p-3 outline-none hover:border-[#F50537] focus:border-[#F50537] data-[state=on]:border-[#F50537] data-[state=on]:bg-gray-300 xs:h-32 xs:w-32 md:h-44 md:w-[30%] md:flex-col md:justify-between md:gap-0"
        >
          <Image
            src="/cupra.png"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 24rem" // Add the sizes prop
            alt="Cupra logo"
            className="absolute inset-0 object-contain p-3"
          />
        </ToggleGroup.Item>
      </ToggleGroup.Root>
    </FormWrapper>
  );
};

export default PlanForm;
