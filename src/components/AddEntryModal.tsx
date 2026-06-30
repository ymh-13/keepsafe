import "../styles/AddEntryModal.css";

type AddEntryModalProps = {
    onClose: () => void;
};

function AddEntryModal({onClose}: AddEntryModalProps) {
    return (
        <div className="modal-overlay">
            <div className="modal">
                <h2>New Keepsake</h2>

                <input placeholder="Title" />
                <input placeholder="Rating" />
                <input placeholder="Date" />
                <input placeholder="With" />
                <textarea placeholder="Notes"></textarea>

                <div className="modal-buttons">

                    <button className="save-btn"
                            onClick={onClose}>
                        Save
                    </button>


                    <button 
                        className="cancel-btn"
                        onClick={onClose}
                    >
                        Cancel
                    </button>

                </div>

            </div>
        </div>
    );
}

export default AddEntryModal;