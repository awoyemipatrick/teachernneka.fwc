// import React, { useState } from "react";
// import { useRouter } from 'next/router';
// import Image from 'next/image';
// // import { FaStar } from "react-icons/fa6";
// import { FlutterWaveButton, closePaymentModal } from "flutterwave-react-v3";
// import Book1 from '@/public/assets/books/book1.png';
// import Book2 from '@/public/assets/books/book2.png';
// import Book3 from '@/public/assets/books/book3.png';



// const booksData = [
//   {
//     id: 1,
//     img: Book1,
//     title: "New Approach",
//     author: "Teacher Nneka",
//     price: 1500,
//     payment_link: '/api/payment/book1',
//     download_link: '/api/download/book1',
//   },
//   {
//     id: 2,
//     img: Book2,
//     title: "Miracle Of Jesus",
//     author: "Teacher Nneka",
//     price: 2000,
//     payment_link: '/api/payment/book2',
//     download_link: '/api/download/book2',

//   },
//   {
//     id: 3,
//     img: Book3,
//     title: "Parenting Handbook",
//     author: "Teacher Nneka",
//     price: 1800,
//     payment_link: '/api/payment/book3',
//     download_link: '/api/download/book3',

//   },
// ];


// const Book = () => {
//   const router = useRouter();
//   const { bookID } = router.query;

//   const [selectedBook, setSelectedBook] = useState(null);

//   const name = 'patrick';
//   const phone_number = '08161185089';
//   const email = 'awoyemipatrick33@yahoo.com';

//   const config = {
//     public_key: 'FLWPUBK_TEST-697a842f1ca7ff83d97d63b77ddbedee-X',
//     tx_ref: Date.now(),
//     amount: selectedBook ? selectedBook.price : 0, // Amount in kobo
//     currency: 'NGN',
//     payment_options: 'card,mobilemoney,ussd',
//     customer: {
//       email,
//       phone_number,
//       name,
//     },
//     bookData: selectedBook, // Pass the selected book data here
//   };

//   const handlePayment = () => {
//     if (!selectedBook) {
//       // User hasn't selected a book, display an error message

//       alert("Please select a book before proceeding with the payment.");
//       return;
//     }

//     // Check if we are on the client side before calling FlutterWaveButton
//     // if (typeof window !== 'undefined') {
//     // }
//     // Your payment gateway integration logic with Flutterwave
//     FlutterWaveButton(fwConfig).onClick();
//   };


//   const fwConfig = {
//     ...config,
//     text: 'Order now',
//     callback: (response) => {
//       console.log(response);
//       closePaymentModal();
//     },
//     onClose: () => { },
//   };

//   return (
//     <>
//       <div className="mt-14 mb-12">
//         <div className="container">
//           {/* Header */}
//           <div className="text-center mb-10 max-w-[600px] mx-auto">
//             <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
//               Top Books for you
//             </p>
//             <h1 className="text-3xl font-bold uppercase">Other Great Resources</h1>
//             <p className="text-xs text-gray-400">
//               Lorem ipsum dolor, sit amet consectetur adipisicing elit.
//               Perspiciatis delectus architecto error nesciunt,
//             </p>
//           </div>

//           {/* Body section */}
//           <div>
//             <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
//               {/* Cards */}
//               {booksData.map(({ id, img, title, rating, author, price }) => (
//                 <div
//                   key={id}
//                   className={`div space-y-3 ${selectedBook && selectedBook.id === id ? 'border-2 border-primary' : ''
//                     }`}
//                   onClick={() => setSelectedBook({ id, title, price })}
//                 >
//                   <Image
//                     src={img}
//                     alt=""
//                     className="h-[220px] w-[150px] object-cover rounded-md "
//                   />
//                   <div>
//                     <h3 className="font-semibold">{title}</h3>
//                     <p className="text-sm text-gray-700">{`Author: ${author}`}</p>
//                     {/* <div className="flex items-center gap-1">
//                       <FaStar className="text-yellow-500" />
//                       <span>{rating}</span>
//                     </div> */}
//                     <p className="text-sm font-semibold">{`₦${price.toFixed(2)}`}</p>
//                     {/* Payment Button */}
//                     <FlutterWaveButton {...fwConfig} />
//                     <div className="flex justify-center">
//                       <button
//                         onClick={handlePayment}
//                         className="text-center mt-10 cursor-pointer text-white py-1 px-5 rounded-md"
//                         disabled={!selectedBook}
//                       >
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>

//           </div>
//         </div>
//       </div>
//     </>

//   );
// };

// export default Book;

