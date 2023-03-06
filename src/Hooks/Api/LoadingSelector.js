import { useSelector } from "react-redux";

export const useLoadingSelector = (actions = []) => {
  const loadingState = useSelector((state) => state.loading);
  return actions.map((action) => loadingState[action]);
};
