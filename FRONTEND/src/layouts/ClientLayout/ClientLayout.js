import React from "react";
import clientImage from "./client.png"; // Ajusta la ruta según la ubicación real de la imagen

export const ClientLayout = (props) => {
  const { children } = props;

  return (
    <div>
      <h2>Estás en LocalHost:3000</h2>
      <h3 style={{ fontSize: "80px" }}>ClientLayout</h3>
      <div>{children}</div>
      <img src={clientImage} alt="Cliente" />
    </div>
  );
};
