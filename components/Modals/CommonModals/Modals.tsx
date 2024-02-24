"use client";
import React from "react";
import { Button, Modal } from "flowbite-react";

import { FaArrowRight } from "react-icons/fa";

import Image from "next/image";

interface Props {
	openModal: boolean;
	onCloseModal: () => void;
	icon?: string | React.ReactNode;
	heading?: string;
	about?: string;
	help?: string;
	closeIcon?: boolean;
	redirecting?: boolean;
	blueBtn?: boolean;
	blueBtnText?: string;
	outlineBtn?: boolean;
	outlineBtnText?: string;
	otherStuff?: React.ReactNode;
	outlineBtnClick?: () => void;
	blueBtnClick?: () => void;
}
function Modals(props: Props) {
	const {
		openModal,
		onCloseModal,
		icon,
		help,
		heading,
		about,
		redirecting,
		blueBtn,
		closeIcon,
		blueBtnText,
		outlineBtn,
		outlineBtnText,
		otherStuff,
		outlineBtnClick,
		blueBtnClick,
	} = props;
	return (
		<Modal show={openModal} size="xl" onClose={onCloseModal} popup>
			<Modal.Body className="p-4 rounded-2xl">
				<div className=" flex w-full relative flex-col p-3 items-center rounded-[10px] border border-gray-200 justify-center gap-[18px]">
					{closeIcon && <Modal.Header className="absolute right-0 top-0" />}
					{icon && typeof icon === "string" && (
						<Image src={icon} alt="icon" width={250} height={250} />
					)}

					{typeof icon !== 'string' && icon}

					<h5 className="text-[#2e2e2e] text-4xl font-extrabold text-center leading-[54px]">
						{heading}
					</h5>
					<p className="text-gray-600 font-medium text-center leading-[30px] text-xl">
						{about}
					</p>
					{redirecting && (
						<h3 className="text-gray-500 font-normal leading-5 text-center">
							Redirecting in{" "}
							<span className="text-black font-semibold">00:05</span>
						</h3>
					)}
					<p className="text-gray-500 text-sm font-normal text-center">
						{help}
					</p>
					{blueBtn && (
						<Button onClick={blueBtnClick} fullSized outline={false} size={"lg"} color="CTA">
							{blueBtnText}
							<div className="ml-2">

							<FaArrowRight />
							</div>
						</Button>
					)}
					{outlineBtn && (
						<Button
							onClick={outlineBtnClick}
							outline
							fullSized
							className="outline-blue-btn"
							color="blue"
							size="lg"
						>
							{outlineBtnText} <FaArrowRight className="ml-2" />
						</Button>
					)}
					{otherStuff}
				</div>
			</Modal.Body>
		</Modal>
	);
}

export default Modals;
