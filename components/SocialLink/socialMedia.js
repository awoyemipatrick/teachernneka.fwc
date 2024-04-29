"use client"
import { useState } from 'react';
import { FaPlus, FaMinus, FaInstagram, FaFacebook, FaTiktok, FaXTwitter, } from "react-icons/fa6";
import {TwitterIcon, InstagramIcon, TiktokIcon, FacebookIcon} from '@/components/SocialLink/icons';


const SocialMediaLinks = () => {
  const [isZoomedOut, setIsZoomedOut] = useState(false);

  const handleZoomOut = () => {
    setIsZoomedOut(!isZoomedOut);
  };

  return (
    <div
      className={`fixed ml-3 left-0 top-1/2 transform -translate-y-1/2 transition-transform duration-300 z-10`}
    >
      <div className="flex flex-col items-center space-y-4">
        <a href="#" className=" items-center border border-black dark:border-white rounded-full p-0.5 hover:scale-125 transition-all ease duration-200">
          <TiktokIcon className=""  />
        </a>
        <a
          href="#"
          className="text-2xl bg-white rounded-full p-1 border hover:scale-125 transition-all ease duration-200"
        >
          <TwitterIcon />
        </a>
        <a
          href="#"
          className="text-3xl bg-primary p-0.5 rounded-full hover:scale-125 transition-all ease duration-200"
        >
          <FacebookIcon className=' text-white' />
        </a>
        {/* <div className=''> */}
          <a
            href="#"
          className=" text-3xl p-0.5 rounded-lg hover:scale-125 transition-all ease duration-200 inset-0 bg-gradient-to-tr from-instagram-yellow via-instagram-pink to-instagram-purple"
          >
          <InstagramIcon className="font-bold text-white" />
          </a>
        {/* </div> */}
      </div>

    </div>
  );
};

export default SocialMediaLinks;
