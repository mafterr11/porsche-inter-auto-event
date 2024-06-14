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
        className="my-2 grid grid-cols-3 gap-2"
        type="single"
        value={planSelected}
        onValueChange={handleValueChange}
      >
        {["Audi", "Volkswagen", "Skoda", "Seat", "Cupra"].map((brand) => (
          <ToggleGroup.Item
            key={brand}
            value={brand}
            className={`${brand === "Cupra" ? "p-5" : ""} relative flex min-h-[100px] min-w-[100px] items-center justify-center rounded-md border-2 border-neutral-600 bg-white p-2 hover:border-red-500 focus:border-red-500 focus:bg-gray-300 xs:min-h-[115px] xs:min-w-[115px] xl:min-h-[140px]`}
          >
            <Image
              src={`/${brand.toLowerCase()}.png`}
              alt={`${brand} logo`}
              width={100} // Set a fixed width for the images
              height={100} // Set a fixed height for the images
              className="object-contain"
            />
          </ToggleGroup.Item>
        ))}
      </ToggleGroup.Root>
    </FormWrapper>
  );
};

export default PlanForm;
