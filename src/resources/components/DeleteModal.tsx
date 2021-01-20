import React from 'react'
import { db } from '../../firebaseConfig';
import { useToasts } from 'react-toast-notifications'
import Modal from 'react-modal'

interface iProduct {
    product: string;
    description: string;
    path: string;
    benefit?: Array<string>;
}


function DeleteModal({ modalIsOpen, setModalIsOpen, currentProduct }: { modalIsOpen: boolean, setModalIsOpen: any, currentProduct: iProduct }) {
    const { addToast } = useToasts()
    const closeModal = (e: any): void => {
        e.preventDefault();
        setModalIsOpen(false)
    }

    const deleteProduct = async (e: any) => {
        e.preventDefault();
        db.collection("Products").doc(currentProduct.path).delete().then(function () {
            addToast('Item successfully deleted', { appearance: 'success' })
        }).catch(function (error) {
            addToast("Error removing document: ", { appearance: 'error' });
        });
        setModalIsOpen(false)
    }


    return (
        <div>
            <Modal isOpen={modalIsOpen}>
                <h1>Are you sure you wanna delete {currentProduct.product}? This action cannot be undone.</h1>
                <div className="p-2 w-full inline-flex items-center">
                    <button onClick={closeModal} className="flex mx-auto text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg">No</button>
                    <button onClick={deleteProduct} className="flex mx-auto text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-yellow-600 rounded text-lg">Yes</button>
                </div>
            </Modal>
        </div>
    )
}

export default DeleteModal
