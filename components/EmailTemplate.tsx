import * as React from "react";

const EmailTemplate = ({
  name,
  email,
  phone,
  message,
  marca,
  selectedLocation,
  carCondition,
  carModel,
}: {
  name: string;
  email: string;
  phone: number;
  message: string;
  marca: string;
  selectedLocation: number;
  carCondition: string;
  carModel: string;
}) => {
  const baseUrl =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://testdrive.pia.ro";

  return (
    <>
      Sursa: Event Marca: {marca}
      Dealer: {selectedLocation}
      Tip: Vanzari Model: {carModel}
      Tip masina: {carCondition}
      Eveniment: 1722 Iunie Telefon: {phone}
      Email: {email}
      Prenume: {name}
      Nume: {name}
      Message: {message}
      Contact Method: Phone Consent: Yes
    </>
  );
};

export default EmailTemplate;
