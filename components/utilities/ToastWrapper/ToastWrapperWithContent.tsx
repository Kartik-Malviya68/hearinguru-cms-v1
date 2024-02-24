"use client";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface Props {
	children: (content: string) => React.ReactNode;
	content: string;
}

function ToastWrapperWithContent({ children, content }: Props) {
	const [toastData, setToastData] = useState<string>(content);
	const timeHandler = useRef<Array<NodeJS.Timeout>>([]);

	const firstRender = useRef<boolean>(true);

	useEffect(() => {
		firstRender.current = false;

		timeHandler.current.forEach((v) => clearTimeout(v));
		setToastData("");

		timeHandler.current.push(
			setTimeout(() => {
				setToastData(content);
			}, 100)
		);
		timeHandler.current.push(
			setTimeout(() => {
				setToastData("");
			}, 2000)
		);
	}, [content]);

	return (
		<AnimatePresence>
			{toastData.trim() .length !== 0 && !firstRender.current && (
				<motion.div
					initial={{ x: 100, opacity: 0 }}
					animate={{ x: 0, opacity: 1 }}
					exit={{ x: -100, opacity: 0 }}
					key={"toast elem"}
					className={`fixed top-10 right-10`}
					style={{ zIndex: 100000 }}
				>
					{children(toastData)}
				</motion.div>
			)}
		</AnimatePresence>
	);
}

export default ToastWrapperWithContent;
