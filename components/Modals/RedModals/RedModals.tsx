import { Button, Modal } from "flowbite-react";
import React from "react";
import { FaExclamationCircle } from "react-icons/fa";

interface Props {
  openModal: boolean;
  setOpenModal: (value: boolean) => void;
  redButton: () => void;
  redBtnLoading: boolean;
  title: string;
  from: string;
}

function RedModals(props: Props) {
  const { openModal, setOpenModal, redButton, redBtnLoading, title, from } =
    props;
  return (
    <Modal show={openModal} size="md" onClose={() => setOpenModal(false)} popup>
      <Modal.Header />
      <Modal.Body>
        <div className="text-center">
          <FaExclamationCircle className="mx-auto mb-4 h-10 w-10 fill-[#C81E1E]" />
          <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
            Are you sure you want to remove <br />
            <span className="text-black font-bold">{title}</span>{" "}
            {`From ${from}`}
          </h3>
          <div className="flex justify-center gap-4">
            <Button
              isProcessing={redBtnLoading}
              color="failure"
              onClick={() => {
                redButton(), setOpenModal(false);
              }}
            >
              Yes, Remove
            </Button>
            <Button color="gray" onClick={() => setOpenModal(false)}>
              Cancel
            </Button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default RedModals;
