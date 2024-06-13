// components/EmailTemplate.tsx

import * as React from "react";

export const EmailTemplate = ({
  name,
  email,
  phone,
  message,
  marca,
  selectedLocation,
  carCondition,
  carModel,
}) => (
  <>
    <h1>Porsche Inter Auto - Solicitare noua</h1>
    <p>Nume complet: {name}</p>
    <p>Email: {email}</p>
    <p>Telefon: {phone}</p>
    <p>Mesaj: {message}</p>
    <p>Marca: {marca}</p>
    <p>
      Locatie selectata:{" "}
      {selectedLocation === 1
        ? "Porsche Pipera"
        : "Porsche Bucuresti Vest 2"}
    </p>
    <p>Conditie masina: {carCondition}</p>
    <p>Model masina: {carModel}</p>
    <p>
      Odata cu primirea acestul email, utilizatorul a fost de acord cu GDPR-ul.
    </p>
  </>
);
