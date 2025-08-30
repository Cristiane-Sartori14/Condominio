import { createContext, useContext, useState } from "react";

const ReservaContext = createContext();

export const ReservaProvider = ({ children }) => {
  const [reservas, setReservas] = useState([]);

  function adicionarReserva(reserva) {
    const novaReserva = {
      id: `${Math.floor(Math.random() * 10000)}`,
      ...reserva,
    };
    setReservas((prev) => [...prev, novaReserva]);
  }

  function removerReserva(id) {
    setReservas((prev) => prev.filter((r) => r.id !== id));
  }

  return (
    <ReservaContext.Provider
      value={{ reservas, adicionarReserva, removerReserva }}
    >
      {children}
    </ReservaContext.Provider>
  );
};

export function useReserva() {
  const context = useContext(ReservaContext);
  if (!context) {
    throw new Error("useReserva deve ser usado dentro de ReservaProvider");
  }
  return context;
}
