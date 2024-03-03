import { useState } from "react";

export function useSelect<SelectItem = number>(
  initial: null | SelectItem = null,
  equal: (a: SelectItem | null, b: SelectItem | null) => boolean = (a, b) => a === b): [
    SelectItem | null,
    {
      clearSelection: () => void;
      setSelection: (selection: SelectItem | null) => void;
      isEqual: (item: SelectItem | null) => boolean
    }
  ] {
  const [state, setState] = useState<SelectItem | null>(initial);
  const clearSelection = () => {
    setState(null);
  }
  const setSelection = (selection: SelectItem | null) => {
    setState(selection);
  }
  const isEqual = (item: SelectItem | null) => {
    return equal(state, item);
  }
  const getState = () => state;
  return [
    state,
    {
      clearSelection,
      setSelection,
      isEqual
    }
  ]
}