import React, { useState } from 'react'
import Modal from 'react-modal'
import { db, storage } from '../../firebaseConfig';
import { useToasts } from 'react-toast-notifications'
import SaveIcon from '@material-ui/icons/Save';



function AddProductModal({ modalIsOpen, setModalIsOpen }: { modalIsOpen: boolean, setModalIsOpen: any }) {
    const { addToast } = useToasts()

    const closeModal = (e: any): void => {
        e.preventDefault();
        setModalIsOpen(false)
    }

    const [benefits, setBenefits] = useState("")
    const [productID, setProductID] = useState("")
    const [productName, setProductName] = useState("")
    const [files, setFiles] = useState<File | null>()
    const [details, setDetails] = useState("")
    const [summary, setSummary] = useState("")

    const onFileChange = (e: any) => {
        setFiles(e.target.files[0]);
    }


    const createDocument = async (e: any) => {
        e.preventDefault();
        if (files) {
            const filePath = `banners/${new Date().getTime()}-${files.name}`;
            const storageRef = storage.ref(filePath);
            const uploadTask = storageRef.put(files);


            uploadTask.on('state_changed', (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                addToast("Uploading Image " + progress + "%", { appearance: 'info' });
            }, (error) => {
                console.log(error);
            }, () => {
                uploadTask.snapshot.ref.getDownloadURL().then(async (downloadUrl) => {
                    try {
                        addToast("Successfully uploaded" + downloadUrl, { appearance: 'info' });
                        db.collection("Products").doc(productID).set({
                            product: productName,
                            summary: summary,
                            details: details,
                            benefit: benefits.split("\n"),
                            banner: downloadUrl
                        })
                            .then(function () {
                                addToast("Product has been created successfully", { appearance: 'success' });
                                setModalIsOpen(false);
                            })
                            .catch(function (error) {
                                console.error("Error writing document: ", error);
                            });


                    } catch (err) {
                        console.log(err);
                    }
                }).catch(err => console.log(err));
            });


        }
    }


    return (
        <div>
            <Modal isOpen={modalIsOpen}>
                <section className="text-gray-600 body-font relative">
                    <div className="container px-5 py-24 mx-auto">
                        <div className="flex flex-col text-center w-full mb-12">
                            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Create Product</h1>
                            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Please use a unique product ID</p>
                        </div>
                        <div className="lg:w-1/2 md:w-2/3 mx-auto">
                            <div className="flex flex-wrap -m-2">
                                <div className="p-2 w-full">
                                    <div className="relative">
                                        <label htmlFor="prodID" className="leading-7 text-sm text-gray-600">Product ID consider appending the product name to flex- </label>
                                        <input type="text" id="prodID" placeholder="flex-new-product" onChange={e => setProductID(e.target.value)} name="prodID" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                </div>
                                <div className="p-2 w-full">
                                    <div className="relative">
                                        <label htmlFor="prodName" className="leading-7 text-sm text-gray-600">Product Name</label>
                                        <input type="text" id="prodName" name="prodName" onChange={e => setProductName(e.target.value)} placeholder="Flex New Product" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                </div>
                                <div className="p-2 w-full">
                                    <div className="relative">
                                        <label htmlFor="banner" className="leading-7 text-sm text-gray-600">Upload your product banner, Use 1200x500 sizes for best results</label>
                                        <input type="file" id="banner" name="banner" onChange={onFileChange} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                </div>
                                <div className="p-2 w-full">
                                    <div className="relative">
                                        <label htmlFor="summary" className="leading-7 text-sm text-gray-600">Product Summary</label>
                                        <textarea id="summary" name="summary" onChange={e => setSummary(e.target.value)} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                                    </div>
                                </div>

                                <div className="p-2 w-full">
                                    <div className="relative">
                                        <label htmlFor="details" className="leading-7 text-sm text-gray-600">Product Details</label>
                                        <textarea id="details" name="details" onChange={e => setDetails(e.target.value)} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                                    </div>
                                </div>

                                <div className="p-2 w-full">
                                    <div className="relative">
                                        <label htmlFor="benefits" className="leading-7 text-sm text-gray-600">Product Benefits (Put each benefit on its own line)</label>
                                        <textarea id="benefits" name="benefits" onChange={e => setBenefits(e.target.value)} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                                    </div>
                                </div>

                                <div className="p-2 w-full inline-flex items-center">
                                    <button className="flex mx-auto text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg" onClick={createDocument} > <SaveIcon /> Save Changes</button>

                                </div>

                            </div>
                        </div>
                    </div>
                </section>
                <button onClick={closeModal} className="inline-flex text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-blue-600 rounded">   Close Dialog</button>
            </Modal>
        </div>
    )
}

export default AddProductModal
