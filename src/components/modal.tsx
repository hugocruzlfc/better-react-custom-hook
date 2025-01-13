import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import useCatList from "../hooks/use-cat-list";

const Modal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const { addCat } = useCatList();
  const [form, setForm] = useState({ breed: "", image: "", country: "" });

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addCat({ ...form, id: uuidv4() });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Add a new cat</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Breed"
            value={form.breed}
            onChange={(e) => setForm({ ...form, breed: e.target.value })}
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />
          <input
            type="text"
            placeholder="Country"
            value={form.country}
            onChange={(e) => setForm({ ...form, country: e.target.value })}
          />
          <div className="modal__buttons-group">
            <button type="submit">Add Cat</button>
            <button onClick={onClose}>Close</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
