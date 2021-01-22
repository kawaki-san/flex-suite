import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import DropdownList from 'react-widgets/lib/DropdownList'
import "react-datepicker/dist/react-datepicker.css";
import 'react-widgets/dist/css/react-widgets.css';
import { db } from "../../firebaseConfig";
import emailjs from 'emailjs-com'
import { useToasts } from 'react-toast-notifications'

function BookDemo() {
    const [startDate, setStartDate]: any = useState(new Date());
    const [endDate, setEndDate]: any = useState(new Date());
    const [products, setProducts]: any = useState([])
    const [email, setEmail] = useState("")
    const [last_name, setLastName] = useState("")
    const [phone_number, setPhoneNumber] = useState("")
    const [address, setAddress] = useState("")
    const [questions, setQuestions] = useState("")
    const [first_name, setFirstName] = useState("")
    const [product_name, setProductName] = useState("")
    let productsList: Array<string> = [];
    const { addToast } = useToasts()

    

    useEffect(() => {
        db.collection("Products").get().then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                // doc.data() is never undefined for query doc snapshots
             //   console.log(doc.id, " => ", doc.data().product);
               productsList.indexOf(doc.data().product) === -1 ? productsList.push(doc.data().product) : console.log("This item already exists");
               setProducts(productsList)
            });
        });
    }, [])


      
        console.log(productsList)

        const sendEmail = async (e: React.SyntheticEvent<EventTarget>) => {
            var templateParams = {
                first_name: first_name,
                email: email,
                prod: product_name,
                last_name: last_name,
                phone_number: phone_number,
                address: address,
                questions: questions,
                date_from: startDate,
                date_to: endDate,
            };
            e.preventDefault();
            emailjs.send('service_agyidqo', 'template_p7zgu7k', templateParams, 'user_4pxbqRR0umxRjmcz8T0Nc')
                .then(function (response) {
                    addToast("Your email has been sent successfully", { appearance: 'success' });
                }, function (error) {
                    addToast(error, { appearance: 'error' });
                });
    
        }
  
    return (
        <div>

            <section className="text-gray-600 body-font relative">

                <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">

                    <div className="lg:w-1/3 md:w-1/2 rounded-lg overflow-hidden sm:mr-10 p-10 flex justify-start relative">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-black">Flex Software Suite</h1>
                    </div>
                    <form  onSubmit={sendEmail} className="lg:w-2/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                        <div className="relative mb-4">
                            <p className="leading-7 text-sm text-gray-600">Select your start (left) and end dates (right)</p>
                            <DatePicker selected={startDate} onChange={date => setStartDate(date)} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            <DatePicker selected={endDate} onChange={date => setEndDate(date)} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div className="relative mb-4">
                            <p className="leading-7 text-sm text-gray-600">Select your Product</p>   
                                        
                            <DropdownList
                                data={products}
                             
                           />
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="first_name" className="leading-7 text-sm text-gray-600">First Name</label>
                            <input type="text" id="first_name" name="first_name"  onChange={e => setFirstName(e.target.value)} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="last_name" className="leading-7 text-sm text-gray-600">Last Name</label>
                            <input type="text" id="last_name" name="last_name" onChange={e => setLastName(e.target.value)} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="phone_number" className="leading-7 text-sm text-gray-600">Phone Number</label>
                            <input type="text" id="phone_number" name="phone_number" onChange={e => setPhoneNumber(e.target.value)} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                            <input type="email" id="email" name="email" onChange={e => setEmail(e.target.value)} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="address" className="leading-7 text-sm text-gray-600">Address</label>
                            <textarea id="address" name="address" onChange={e => setAddress(e.target.value)} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="questions" className="leading-7 text-sm text-gray-600">Futher Questions/Comments</label>
                            <textarea id="questions" name="questions" onChange={e => setQuestions(e.target.value)} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                        </div>

                        <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg" type="submit">Book Product</button>
                        <p className="text-xs text-gray-500 mt-3">We'll get back to you</p>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default BookDemo
