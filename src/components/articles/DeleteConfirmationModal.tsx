import './articles.css';

interface DeleteConfirmationModalProps {
    articleTitle: string;
    onConfirm: () => void;
    onCancel: () => void;
}

const DeleteConfirmationModal = ({
                                     articleTitle,
                                     onConfirm,
                                     onCancel,
                                 }: DeleteConfirmationModalProps) => {
    return (
        <div className="modal-overlay" onClick={onCancel}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header">
                    <h2>Delete Article</h2>
                    <button className="modal-close" onClick={onCancel} aria-label="Close">
                        ✕
                    </button>
                </div>

                <div className="modal-body">
                    <p className="delete-warning">⚠️ Warning</p>
                    <p>
                        Are you sure you want to delete <strong>"{articleTitle}"</strong>?
                    </p>
                    <p className="delete-message">This action cannot be undone.</p>
                </div>

                <div className="modal-footer">
                    <button className="btn btn-secondary" onClick={onCancel}>
                        Cancel
                    </button>
                    <button className="btn btn-delete" onClick={onConfirm}>
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DeleteConfirmationModal;