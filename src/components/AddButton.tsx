import "../styles/AddButton.css";

type AddButtonProps = {
    onClick: () => void;
};


function AddButton({ onClick }: AddButtonProps) {
  return (
    <button 
        className="add-button"
        onClick={onClick}
    >
        +
    </button>
  );
}

export default AddButton;