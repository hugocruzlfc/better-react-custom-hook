import { useState } from "react";
import useCatList from "./use-cat-list";
import { v4 as uuidv4 } from "uuid";
import { Cat } from "../types";

const useModal = () => {
  const { addCat } = useCatList();
  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState<Omit<Cat, "id">>({
    breed: "",
    image: "",
    country: "",
  });

  const openModal = () => setIsOpen(true);

  const closeModal = () => {
    setIsOpen(false);
    resetForm();
  };

  const resetForm = () => {
    setForm({ breed: "", image: "", country: "" });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setForm((prev) => ({ ...prev, image: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addCat({ ...form, id: uuidv4() });
    closeModal();
  };

  return {
    isOpen,
    openModal,
    closeModal,
    form,
    setForm,
    handleImageChange,
    handleSubmit,
  };
};

export default useModal;
