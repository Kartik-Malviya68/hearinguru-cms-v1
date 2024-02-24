"use client";
import StateUtils from "@/modules/StateManagement/Core/StateUtils";
import React, { useEffect, useRef, useState } from "react";
import CountryList, { Country } from "country-list-with-dial-code-and-flag";
import CountryFlagSvg from "country-list-with-dial-code-and-flag/dist/flag-svg";
import styles from "./styles.module.css";
import trimString from "@/utils/trimString";

interface State {
	dropDownVisible: boolean;
	selectedCountry: Country;
	searchInput: string;
}

function InlineSvg({
	src,
	...rest
}: { src: string } & React.HTMLAttributes<HTMLDivElement>) {
	return (
		<div
			dangerouslySetInnerHTML={{ __html: src }}
			{...rest}
			className={styles.svgDiv}
		></div>
	);
}

interface Props {
	onChange?: (c: Country) => void;
}

function SelectCountryCode({ onChange = (e) => {} }: Props) {
	const [state, setState] = useState<State>({
		dropDownVisible: false,
		selectedCountry: CountryList.getAll()[0],
		searchInput: "",
	});

	const actions = new StateUtils<State>(state, setState);
	const close = () => {
		actions.mutateState((v) => {
			v.dropDownVisible = false;
		});
	};
	const toggle = () => {
		actions.mutateState((v) => {
			v.dropDownVisible = !v.dropDownVisible;
		});
	};
	const setSelection = (country: Country) => {
		actions.mutateState((v) => {
			v.selectedCountry = country;
		});
	};

	const timeRef = useRef<NodeJS.Timeout | undefined>(undefined);
	const firstRender = useRef<boolean>(true);

	useEffect(() => {
		if (firstRender.current === false) {
			onChange(state.selectedCountry);
		} else {
			firstRender.current = false;
		}
	}, [state.selectedCountry]);

	useEffect(() => {
		const handler = (e: KeyboardEvent) => {
			console.log(e.keyCode);
			if (state.dropDownVisible) {
				if (e.keyCode === 8) {
					actions.mutateState((v) => {
						v.searchInput = v.searchInput.slice(0, -1);
					});
				} else if (e.key.length === 1) {
					actions.mutateState((v) => {
						v.searchInput += e.key;
					});
				}
			}
		};
		
		typeof window !== "undefined" && window.addEventListener("keydown", handler);
		return () => {
			typeof window !== "undefined" && window.removeEventListener("keydown", handler);
		};
	}, [state.dropDownVisible]);

	useEffect(() => {
		timeRef.current && clearTimeout(timeRef.current);
		timeRef.current = setTimeout(() => {
			actions.mutateState((v) => {
				v.searchInput = "";
			});
		}, 6000);
	}, [state.searchInput]);

	const filterList = (list: Country[]) => {
		return list.filter((v) => v.name.toLowerCase().includes(state.searchInput));
	};

	return (
		<div
			className="container relative h-full w-fit"
			onClick={() => {
				toggle();
			}}
		>
			<div
				className="w-full h-full flex items-center p-2 rounded"
				onClick={() => {}}
			>
				<button type="button" className="flex space-x-2 items-center">
					<InlineSvg
						src={CountryFlagSvg[state.selectedCountry.code]}
						className="h-3 "
					/>
					<p className="text-sm font-medium">
						{state.selectedCountry.dialCode}
					</p>
				</button>
			</div>
			{state.dropDownVisible && (
				<ul className="absolute top-[120%] p-2 rounded bg-gray-50 border min-w-[200px] max-w-sm w-fit max-h-[200px] overflow-auto">
					{filterList(CountryList.getAll()).map((v) => (
						<li
							className="w-full p-2 hover:bg-gray-100 rounded"
							onClick={() => {
								setSelection(v);
							}}
							key={v.code}
						>
							<button type="button" className="flex space-x-2 items-center">
								<InlineSvg src={CountryFlagSvg[v.code]} className="h-3 " />
								<p className="text-sm font-medium">{v.dialCode}</p>
								<p className="text-sm font-medium">{trimString(v.name, 6)}</p>
							</button>
						</li>
					))}
				</ul>
			)}
		</div>
	);
}

export default SelectCountryCode;
