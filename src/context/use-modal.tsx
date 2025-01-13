import { useCallback, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Cat } from "../types";
import useCatList from "../hooks/use-cat-list";

const useModal = () => {
  const { addCat } = useCatList();
  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState<Omit<Cat, "id">>({
    breed: "",
    image: "",
    country: "",
  });

  const openModal = useCallback(() => {
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
    resetForm();
  }, []);

  const resetForm = useCallback(() => {
    setForm({ breed: "", image: "", country: "" });
  }, []);

  const handleImageChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files && e.target.files[0];

      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          if (typeof reader.result === "string") {
            setForm({ ...form, image: reader.result });
          }
        };
        reader.readAsDataURL(file);
      }
    },
    []
  );

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      addCat({ ...form, id: uuidv4() });
      closeModal();
    },
    [addCat, form, closeModal]
  );

  // Adding useEffect to track changes in function references!
  useEffect(() => {
    console.log("openModal function reference changed");
  }, [openModal]);

  useEffect(() => {
    console.log("closeModal function reference changed");
  }, [closeModal]);

  useEffect(() => {
    console.log("resetForm function reference changed");
  }, [resetForm]);

  useEffect(() => {
    console.log("handleImageChange function reference changed");
  }, [handleImageChange]);

  useEffect(() => {
    console.log("handleSubmit function reference changed");
  }, [handleSubmit]);

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
