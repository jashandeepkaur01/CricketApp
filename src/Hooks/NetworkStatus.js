import { useEffect, useState } from "react";

export const useNetworkStatus = () => {
  const [status, setStatus] = useState(navigator.onLine);
  const updateStatus = () => setStatus(navigator.onLine);
  useEffect(() => {
    window.addEventListener("online", updateStatus);
    window.addEventListener("offline", updateStatus);
  }, []);
  return status;
};
