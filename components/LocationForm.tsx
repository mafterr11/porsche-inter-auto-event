import { FormItems } from "@/app/page";
import FormWrapper from "./FormWrapper";

type stepProps = FormItems & {
  updateForm: (fieldToUpdate: Partial<FormItems>) => void;
  selectedLocation?: number; // Add this line
};

const locations = [
  {
    id: 1,
    title: "Porsche Pipera (PBN)",
    subtitle: "Bd. Pipera 1/X, Voluntari, Ilfov",
  },
  {
    id: 2,
    title: "Porsche Bucuresti Vest 2 (PBV)",
    subtitle: "Sos. de centura 53, Chiajna, Jud. Ilfov",
  },
];

const LocationForm = ({ updateForm, selectedLocation }: stepProps) => {
  const handleLocationChange = (selectedId: number) => {
    updateForm({ selectedLocation: selectedId });
  };

  return (
    <FormWrapper title="Alegeți distribuitorul dorit: " description="">
      <div className="flex flex-col gap-3">
        {locations.map((location) => (
          <div
            className={`flex w-fit cursor-pointer flex-col gap-1 rounded-md border-2 border-neutral-600 p-3 ${
              selectedLocation === location.id
                ? "border-[#6185C1] bg-neutral-900"
                : ""
            } hover:border-[#6185C1]`}
            key={location.id}
            onClick={() => handleLocationChange(location.id)}
          >
            <p className="font-semibold text-white">{location.title}</p>
            <p className="text-sm text-neutral-300">{location.subtitle}</p>
          </div>
        ))}
      </div>
    </FormWrapper>
  );
};

export default LocationForm;
