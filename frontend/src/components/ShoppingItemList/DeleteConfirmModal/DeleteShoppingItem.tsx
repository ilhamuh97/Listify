interface Props {
  open: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

const DeleteConfirmModal = ({ open, onConfirm, onCancel }: Props) => {
  if (!open) return null;

  return (
    <dialog className="modal modal-open">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Delete item</h3>
        <p className="py-4">Are you sure this item should be deleted?</p>
        <div className="modal-action">
          <button className="btn btn-error btn-sm" onClick={onConfirm}>
            Delete
          </button>
          <button className="btn btn-ghost btn-sm" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </div>
    </dialog>
  );
};

export default DeleteConfirmModal;
