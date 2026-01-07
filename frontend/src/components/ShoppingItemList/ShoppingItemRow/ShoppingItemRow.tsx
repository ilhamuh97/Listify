import type { IShoppingItem } from "../../../types/shoppingItem";

interface Props {
  item: IShoppingItem;
  onToggle: () => void;
  onDelete: () => void;
}

const ShoppingItemRow = ({ item, onToggle, onDelete }: Props) => {
  return (
    <div className="flex items-center justify-between bg-base-200 p-3 rounded-lg shadow cursor-pointer">
      <span
        className={`flex-1 cursor-pointer ${
          item.bought ? "line-through text-gray-400" : ""
        }`}
        style={{ fontFamily: "'Patrick Hand', cursive", fontSize: "1.1rem" }}
        onClick={onToggle}
      >
        {item.name}
      </span>

      <button className="btn btn-ghost btn-xs text-error" onClick={onDelete}>
        ✕
      </button>
    </div>
  );
};

export default ShoppingItemRow;
