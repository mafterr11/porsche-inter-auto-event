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
  acceptTerms
}: {
  name: string;
  email: string;
  phone: number;
  message: string;
  marca: string;
  selectedLocation: number;
  carCondition: string;
  carModel: string;
  acceptTerms: boolean;
}) => {
  const emailContent = `
Sursa: Event
Marca: ${marca}
Dealer: ${selectedLocation}
Tip: Vanzari
Model: ${carModel}
Tip masina: ${carCondition}
Eveniment: 17-22 Iunie
Telefon: ${phone}
Email: ${email}
Prenume: ${name}
Nume: ${name}
Message: ${message}
Contact Method: Email / Telefon
Consent: ${acceptTerms ? "Yes" : "No"}
`;

  return (
    <pre>
      {emailContent}
    </pre>
  );
};

export default EmailTemplate;
