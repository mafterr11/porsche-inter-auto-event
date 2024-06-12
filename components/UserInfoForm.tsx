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
  errors,
  updateForm,
}: StepProps) => {
  return (
    <FormWrapper
      title="Informații personale"
      description="Vă rugăm să introduceți numele, adresa de email și numărul de telefon."
    >
      <div className="w-full flex flex-col gap-5">
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
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
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
            <p className="text-red-500 text-sm">{errors.email}</p>
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
            <p className="text-red-500 text-sm">{errors.phone}</p>
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
      </div>
    </FormWrapper>
  );
};

export default UserInfoForm;
