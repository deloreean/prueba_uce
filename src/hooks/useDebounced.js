import { useEffect, useState } from "react";

export const useDebounced = (value, delay = 500) => {
  // Creamos un estado para almacenar el valor debounced
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    // Actualizamos el valor debounced despues de un tiempo
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // El tiempo se reinicia cada vez que el valor cambia o el tiempo
    return () => clearTimeout(timer);
  }, [value, delay]);

  // Devolvemos el valor debounced
  return debouncedValue;
};
