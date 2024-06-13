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
    <h1>Porsche Inter Auto - Solicitare nouă</h1>
    <p>Nume complet: {name}</p>
    <p>Email: {email}</p>
    <p>Telefon: {phone}</p>
    <p>Mesaj: {message}</p>
    <p>Marcă: {marca}</p>
    <p>
      Locație selectată:{" "}
      {selectedLocation === 1 ? "Porsche Pipera" : "Porsche București Vest 2"}
    </p>
    <p>Condiție mașină: {carCondition}</p>
    <p>Model mașină: {carModel}</p>
    <p>
      Odată cu primirea acestui email, utilizatorul {name} declară că este de
      acord cu GDPR-ul.
    </p>
  </>
);
