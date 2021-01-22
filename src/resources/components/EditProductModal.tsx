import React, { useEffect, useState } from 'react'
import Modal from 'react-modal'
import { db } from '../../firebaseConfig';
import { useToasts } from 'react-toast-notifications'
import DeleteIcon from '@material-ui/icons/Delete';
import SaveIcon from '@material-ui/icons/Save';
import DeleteModal from './DeleteModal';


interface iProduct {
    product: string;
    description: string;
    path: string;
    benefit?: Array<string>;
}

function EditProductModal({ modalIsOpen, setModalIsOpen, currentProduct }: { modalIsOpen: boolean, setModalIsOpen: any, currentProduct: iProduct }) {
    const [product, setProduct]: any = useState();
    const [deleteModalIsOpen, setDeleteModalIsOpen] = useState(false)
    const { addToast } = useToasts()
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await db.collection("Products").doc(currentProduct.path).get();
                //console.log('response', response.data());
                let data: any = { title: 'not found' };
                if (response.exists) {
                    data = response.data();
                }
                setProduct(data);
            } catch (err) {
                console.error(err);
            }
        };
        fetchData();
    }, []);
    const closeModal = (e: any): void => {
        e.preventDefault();
        setModalIsOpen(false)
    }

    console.log("My Product is:", currentProduct.path)
    const successMessage: string = "Product successfully updated!, Reload your webpage";

    const [benefits, setBenefits] = useState("")
    const [details, setDetails] = useState("")
    const [summary, setSummary] = useState("")

    const deleteDocument = async (e: any) => {
        e.preventDefault();
        setDeleteModalIsOpen(true);

    }
    const updateDocument = async (e: any) => {
        e.preventDefault();
        if (summary === "" && details === "" && benefits === "") {
            addToast('No changes to update', { appearance: 'info' })
        } else if (summary === "" && details === "") {
            db.collection("Products").doc(currentProduct.path).update({
                benefit: benefits.split("\n")
            }).then(function () {
                addToast(successMessage, { appearance: 'success' })
            })
        } else if (details === "" && benefits === "") {
            db.collection("Products").doc(currentProduct.path).update({
                summary: summary,
            }).then(function () {
                addToast(successMessage, { appearance: 'success' })
            })
        } else if (summary === "" && benefits === "") {
            db.collection("Products").doc(currentProduct.path).update({
                details: details,
            }).then(function () {
                addToast(successMessage, { appearance: 'success' })
            })
        } else if (summary === "") {
            db.collection("Products").doc(currentProduct.path).update({
                details: details,
                benefit: benefits.split("\n")
            }).then(function () {
                addToast(successMessage, { appearance: 'success' })
            })
        } else if (details === "") {
            db.collection("Products").doc(currentProduct.path).update({
                summary: summary,
                benefit: benefits.split("\n")
            }).then(function () {
                addToast(successMessage, { appearance: 'success' })
            })
        } else if (benefits === "") {
            db.collection("Products").doc(currentProduct.path).update({
                summary: summary,
                details: details
            }).then(function () {
                addToast(successMessage, { appearance: 'success' })
            })
        } else
            db.collection("Products").doc(currentProduct.path).update({
                summary: summary,
                details: details,
                benefit: benefits.split("\n")
            }).then(function () {
                addToast(successMessage, { appearance: 'success' })
            })
    }


    if (product == null) {
        return <div>Loading Data</div>
    } else
        return (
            <div>
                <Modal isOpen={modalIsOpen}>
                    <section className="text-gray-600 body-font relative">
                        <div className="container px-5 py-24 mx-auto">
                            <div className="flex flex-col text-center w-full mb-12">
                                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Edit Product</h1>
                                <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Document ID's cannot be changed. Delete a product and add a new one if you wish to use a different ID</p>
                                <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Product Name: {product.product}</p>
                                <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Product ID: {currentProduct.path}</p>
                            </div>
                            <div className="lg:w-1/2 md:w-2/3 mx-auto">
                                <div className="flex flex-wrap -m-2">
                                    <div className="p-2 w-full">
                                        <div className="relative">
                                            <label htmlFor="name" className="leading-7 text-sm text-gray-600">Product Name</label>
                                            <input type="text" id="name" name="name" value={product.product} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                        </div>
                                    </div>
                                    <div className="p-2 w-full">
                                        <div className="relative">
                                            <label htmlFor="summary" className="leading-7 text-sm text-gray-600">Product Summary</label>
                                            <textarea id="summary" name="summary" placeholder={product.summary} onChange={e => setSummary(e.target.value)} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                                        </div>
                                    </div>

                                    <div className="p-2 w-full">
                                        <div className="relative">
                                            <label htmlFor="details" className="leading-7 text-sm text-gray-600">Product Details</label>
                                            <textarea id="details" name="details" placeholder={product.details} onChange={e => setDetails(e.target.value)} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                                        </div>
                                    </div>

                                    <div className="p-2 w-full">
                                        <div className="relative">
                                            <label htmlFor="benefits" className="leading-7 text-sm text-gray-600">Product Benefits (Put each benefit on its own line)</label>
                                            <textarea id="benefits" name="benefits" placeholder={product.benefit.join("\n")} onChange={e => setBenefits(e.target.value)} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                                        </div>
                                    </div>

                                    <div className="p-2 w-full inline-flex items-center">
                                        <button className="flex mx-auto text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg" onClick={updateDocument} > <SaveIcon /> Save Changes</button>
                                        <button className="flex mx-auto text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-yellow-600 rounded text-lg" onClick={deleteDocument} > <DeleteIcon /> Delete Product</button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </section>
                    <button onClick={closeModal} className="inline-flex text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-blue-600 rounded">   Close Dialog</button>
                </Modal>
                <DeleteModal modalIsOpen={deleteModalIsOpen} setModalIsOpen={setDeleteModalIsOpen} currentProduct={currentProduct} />
            </div>
        )
}

export default EditProductModal
