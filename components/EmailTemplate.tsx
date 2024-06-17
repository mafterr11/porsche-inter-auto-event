const EmailTemplate = ({
  name,
  surname,
  email,
  phone,
  message,
  marca,
  selectedLocation,
  carCondition,
  carModel,
  acceptTerms,
  contactMethod,
}: {
  name: string;
  surname: string;
  email: string;
  phone: number;
  message: string;
  marca: string;
  selectedLocation: number;
  carCondition: string;
  carModel: string;
  acceptTerms: boolean;
  contactMethod: string;
}) => {
  return `
Sursa: Event
Marca: ${marca}
Dealer: ${selectedLocation}
Tip: Vanzari
Model: ${carModel}
Tip masina: ${carCondition}
Eveniment: 1722 Iunie
Telefon: ${phone}
Email: ${email}
Prenume: ${name}
Nume: ${surname}
Message: ${message}
Contact Method: ${contactMethod}
Consent: ${acceptTerms ? "Yes" : "No"}
  `;
};

export default EmailTemplate;
