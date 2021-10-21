import { useContext } from "react";
import { AuthContext } from "@contexts/AuthContext";

export function useClientAuth() {
  const value = useContext(AuthContext);
  return value;
}
