import { useState } from "react";

interface Props {
  onAdd: (name: string) => void;
}

const AddShoppingItem = ({ onAdd }: Props) => {
  const [value, setValue] = useState("");

  const handleAdd = () => {
    if (!value.trim()) return;
    onAdd(value.trim());
    setValue("");
  };

  return (
    <div className="flex gap-2">
      <input
        type="text"
        className="input input-bordered flex-1"
        placeholder="Add new item..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleAdd()}
      />
      <button className="btn btn-primary btn-sm" onClick={handleAdd}>
        Add
      </button>
    </div>
  );
};

export default AddShoppingItem;
