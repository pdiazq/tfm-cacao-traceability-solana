import { useEffect, useState } from "react";

/**
 * Hook que previene hydration mismatch esperando a que el cliente esté montado
 */
export function useIsMounted() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return isMounted;
}
