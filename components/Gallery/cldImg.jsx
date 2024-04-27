"use client"
import React, { useEffect, useState } from 'react';
// import { CloudinaryResource } from "@/components/interfaces/cloudinary";
import { CldImage } from "next-cloudinary";

// Cloudinary SDK for the browser
import cloudinary from 'cloudinary-core';

const cl = cloudinary.Cloudinary.new({ cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME, secure: true });

async function fetchCloudinaryImages() {
  const res = await fetch(`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/list/ew2024.json`);
  const { resources } = await res.json();
  return resources;
  console.log(resources)
}

export const CloudinaryImg = () => {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const cloudinaryResources = await fetchCloudinaryImages();
      setResources(cloudinaryResources);
    }

    fetchData();
  }, []); // Run only once on component mount

  return (
    <section>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center m-10 gap-10">
        {resources.map((product) => {
          return (
            <li key={product.public_id} className='rounded overflow-hidden'>
              <div className='relative'>
                <CldImage
                  publicId={product.public_id}
                  width={800}
                  height={800}
                  crop="fill"
                  alt={product.public_id}
                />
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
