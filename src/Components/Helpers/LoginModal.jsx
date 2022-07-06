import { useState } from "react";
import Modal from 'react-bootstrap/Modal'
import "./LoginModal.css"

function ModalCompnent(props) {
    const [show, setShow] = useState(false);
    const [fullscreen, setFullscreen] = useState(true);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <>
            <button className="btn btn-danger rounded-0 col-12 mt-2" onClick={handleShow}>Login</button>

            <Modal show={show}  fullscreen={fullscreen} onHide={handleClose} >
                <Modal.Header closeButton>
                    <Modal.Title>{props.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{props.body}</Modal.Body>
            </Modal>
        </>
    );
}

export default ModalCompnent;