import useModal from "../hooks/use-modal";
import Modal from "./modal";

const ModalWrapper = () => {
  const {
    isOpen,
    closeModal,
    form,
    setForm,
    handleImageChange,
    handleSubmit,
    openModal,
  } = useModal();

  return (
    <>
      <button onClick={openModal}>Add Cat</button>
      <Modal
        isOpen={isOpen}
        onClose={closeModal}
        form={form}
        setForm={setForm}
        handleImageChange={handleImageChange}
        handleSubmit={handleSubmit}
      />
    </>
  );
};

export default ModalWrapper;
