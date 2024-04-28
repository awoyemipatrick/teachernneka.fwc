"use client"
import React from 'react';
import { useRouter } from 'next/navigation';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { motion as m } from 'framer-motion';

const Enrolform = () => {
  const router = useRouter()

  // Formik logic
  const formik = useFormik({
    initialValues: {
      full_name: '',
      phone_number: '',
      email: '',
      parent_name: "",
      child_gender: '',
      recieve_method: '',
      message: '',
    },

    //  validate form 
    validationSchema: Yup.object({
      full_name: Yup.string().max(25, 'Name must be 25 characters or less').required('Please provide your name'),
      phone_number: Yup.number()
        .required('Phone number is required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
      parent_name: Yup.string(),
      child_gender: Yup.string(),
      recieve_method: Yup.string(),
      message: Yup.string(),
    }),



    // Submit form to Formspree
    onSubmit: async (values, { setSubmitting }) => {
    
      // event.preventDefault();
      // Assuming you have some form validation here
      // Once validated, set the name and email and navigate to the success page
      // For simplicity, skipping validation here
      // setName(event.target.elements.name.value);
      // setEmail(event.target.elements.email.value);

      console.log(values)
      try {
        const response = await fetch('https://formspree.io/f/xqkrpppl', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
        });

        if (response.ok) {
          // Form submission redirect to a Success Page
          router.push({
      pathname: '/successPage',
      query: { 
        name: values.full_name,
        email: values.email,
      },
    });
        } else {
          // Form submission failed, handle the error as needed
          console.error('Form submission failed.');
        }
      } catch (error) {
        // Handle any other errors that may occur during form submission
        console.error('An error occurred during form submission:', error);
      }

      setSubmitting(false);
    },
  });


  return (
    <>
      <m.div className={`container mx-auto w-full p-6 gap-3 border leading-10 shadow-2xl rounded-xl `}>
        <form className='flex flex-col ' onSubmit={formik.handleSubmit}>
          <h1 className='text-xl font-medium m-10  underline'>REGISTER YOUR CHILD/REN</h1>
          <div className={''}>
            <div className='flex flex-col gap-2 my-4 shadow-2xl hover:shadow-xl'>
              <label className={`px-2 ${formik.touched.full_name && formik.errors.full_name ? 'text-red-500' : ''}`}
                htmlFor="full_name">{formik.touched.full_name && formik.errors.full_name ? formik.errors.full_name : 'Full Name*'} </label>
              <input id="name" type="text" name='full_name'
                className='focus:border-1 hover:border-blue-400 border-blue-500 rounded-xl m-2  '
                value={formik.values.full_name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>

            <div className='flex flex-col gap-2 my-4 shadow-2xl hover:shadow-xl'>
              <label className={`px-2  ${formik.touched.phone_number && formik.errors.phone_number ? 'text-red-500' : ''}`}
                htmlFor="phone_number">{formik.touched.phone_number && formik.errors.phone_number ? formik.errors.phone_number : 'Pnone Number*'} </label>
              <input type="number" name='phone_number'
                className='focus:border-1 hover:border-blue-400 border-blue-500 rounded-xl m-2 '
                value={formik.values.phone_number}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>

            <div className='flex flex-col ggap-2 my-4 shadow-2xl hover:shadow-xl'>
              <label className={`px-2 ${formik.touched.email && formik.errors.email ? 'text-red-500' : ''}`}
                htmlFor="email">{formik.touched.email && formik.errors.email ? formik.errors.email : 'Email*'} </label>
              <input type="email" name='email'
                className='focus:border-1 hover:border-blue-400 border-blue-500 rounded-xl m-2 '
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            

            <div className='flex flex-col gap-2 my-4 shadow-2xl hover:shadow-xl'>
              <label className={`px-2 ${formik.touched.parent_name && formik.errors.parent_name ? 'text-red-500' : ''}`}
                htmlFor="parent_name">
                {formik.touched.parent_name && formik.errors.parent_name ? formik.errors.parent_name : 'Parent Name'}
                </label>
              <input type="text" name='parent_name'
                className='focus:border-1 hover:border-blue-400 border-blue-500 rounded-xl m-2 '
                value={formik.values.parent_name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
          </div>

          <div className='flex flex-col gap-2 my-4 shadow-2xl hover:shadow-xl'>
            <label className={`px-2 ${formik.touched.child_gender && formik.errors.child_gender ? 'text-red-500' : ''}`}
              htmlFor="child_gender">{formik.touched.child_gender && formik.errors.child_gender ? formik.errors.child_gender : 'Child Gender'}
            </label>
            <select name="child_gender"
              className='focus:border-1 hover:border-blue-400 border-blue-500 rounded-xl m-2 '
              value={formik.values.child_gender}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur} >
              <option value="">Select</option>
              <option > Male</option>
              <option > Female</option>
              
            </select>
          </div>

          <div className='flex flex-col gap-4 my-4 shadow-2xl hover:shadow-xl'>
            <label className={` px-2 ${formik.touched.recieve_method && formik.errors.recieve_method ? 'text-red-500' : ''}`}
              htmlFor="recieve_method">
              {formik.touched.recieve_method && formik.errors.recieve_method ? formik.errors.recieve_method : 'How would you like to recieve your message?'}
            </label>
            <select name="recieve_method"
              className='focus:border-1 hover:border-blue-400 border-blue-500 rounded-xl m-2 '
              value={formik.values.recieve_method}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}>
              <option value="">Select</option>
              <option>Email</option>
              <option>WhatsApp</option>
              <option>Text Message</option>
            </select>
          </div>

          <div className='my-4 shadow-2xl hover:shadow-xl'>
            <label htmlFor='message' className='flex flex-col gap-4 shadow-md px-3 ' >
              Any Additional Message Or Request?
              <textarea name='message' type="text" cols="20" rows="10" className='border-none' placeholder=''
                value={formik.values.message}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </label>
          </div>
          <div className={`mb-4 text-center shadow-xl hover:shadow-2xl`}>
            <button className={`border-solid border-2 w-full text-white bg-gradient-to-b from-blue-500 via-blue-400 to-blue-300 rounded-lg px-4 py-2 text-2xl `} type="submit" disabled={formik.isSubmitting}>Enrol Now</button>
          </div>
        </form>
      </m.div>
    </>
  );
}

export default Enrolform