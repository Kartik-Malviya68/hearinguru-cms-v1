import React, { useState } from "react";

export function useToggle(initial: boolean = false) : [
  boolean,
  {
    show: () => void;
    hide: () => void;
    toggle: () => void;
    set: (v: boolean) => void;
  }
] {
	const [state, setState] = useState(initial);

	const show = () => setState(true);
	const hide = () => setState(false);
	const toggle = () => setState((v) => !v);
	const set = (v: boolean) => setState(v);

	return [
		state,
		{
			show,
			hide,
			toggle,
			set,
		},
	];
}
