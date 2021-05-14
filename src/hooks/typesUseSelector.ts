import { useSelector, TypedUseSelectorHook } from "react-redux";
import { RootState } from "../redux/rootRaducer";

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;