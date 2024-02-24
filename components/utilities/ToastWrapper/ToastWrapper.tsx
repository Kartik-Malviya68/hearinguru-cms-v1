"use client";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface Props {
	children: React.ReactNode;
	show: boolean;
	onClose?: () => void;
}

function ToastWrapper({ children, show, onClose = () => {} }: Props) {
	const [toastData, setToastData] = useState<boolean>(show);
	const timeHandler = useRef<Array<NodeJS.Timeout>>([]);

	useEffect(() => {
		timeHandler.current.forEach((v) => clearTimeout(v));
		setToastData(false);
		if (show) {
			timeHandler.current.push(
				setTimeout(() => {
					setToastData(true);
				}, 100)
			);
			timeHandler.current.push(
				setTimeout(() => {
					setToastData(false);
					onClose();
				}, 2000)
			);
		}
	}, [show]);

	return (
		<AnimatePresence>
			{toastData && (
				<motion.div
					initial={{ x: 100, opacity: 0 }}
					animate={{ x: 0, opacity: 1 }}
					exit={{ x: -100, opacity: 0 }}
					key={"toast elem"}
					className={`fixed top-20 right-10`}
					style={{ zIndex: 100000 }}
				>
					{children}
				</motion.div>
			)}
		</AnimatePresence>
	);
}

export default ToastWrapper;
