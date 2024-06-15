import FormWrapper from "./FormWrapper";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FormItems } from "../app/page";
import { Textarea } from "./ui/textarea";

type StepProps = FormItems & {
  updateForm: (fieldToUpdate: Partial<FormItems>) => void;
  errors: Partial<FormItems>;
};

const UserInfoForm = ({
  name,
  email,
  phone,
  message,
  acceptTerms, // Added acceptTerms prop
  errors,
  updateForm,
}: StepProps) => {
  return (
    <FormWrapper
      title="Informații personale"
      description="Vă rugăm să introduceți numele, adresa de email și numărul de telefon."
    >
      <div className="flex w-full flex-col gap-5 xs:max-md:space-y-4 text-neutral-800">
        <div className="flex flex-col gap-2">
          <Label htmlFor="name">Nume</Label>
          <Input
            autoFocus
            type="text"
            name="name"
            id="name"
            placeholder="Completați cu numele complet"
            value={name}
            onChange={(e) => updateForm({ name: e.target.value })}
            className="w-full"
            required
          />
          {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            type="text"
            name="email"
            id="email"
            placeholder="e.g. exemplu@gmail.ro"
            value={email}
            className="w-full"
            onChange={(e) => updateForm({ email: e.target.value })}
            required
          />
          {errors.email && (
            <p className="text-sm text-red-500">{errors.email}</p>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="phone">Număr de telefon</Label>
          <Input
            type="tel"
            name="phone"
            id="phone"
            placeholder="e.g. +40 7XX XXX XXX"
            value={phone}
            className="w-full"
            onChange={(e) => updateForm({ phone: e.target.value })}
            required
          />
          {errors.phone && (
            <p className="text-sm text-red-500">{errors.phone}</p>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="message">Mesaj</Label>
          <Textarea
            name="message"
            id="message"
            placeholder="Scrieți mesajul aici!"
            className="w-full"
            onChange={(e) => updateForm({ message: e.target.value })}
            required
          />
        </div>
        <div className="flex items-center gap-2">
          <Input
            type="checkbox"
            name="acceptTerms"
            id="acceptTerms"
            checked={acceptTerms}
            onChange={(e) => updateForm({ acceptTerms: e.target.checked })}
            className="h-[20px] w-[20px] xl:h-[15px] xl:w-[15px]"
          />
          <span className="text-[15px]">
            Sunt de acord cu prelucrarea datelor(GDPR)
          </span>
        </div>
        {errors.acceptTerms && (
          <p className="text-sm text-red-500">{errors.acceptTerms}</p>
        )}
      </div>
    </FormWrapper>
  );
};

export default UserInfoForm;
