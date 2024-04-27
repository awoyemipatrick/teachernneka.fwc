"use client"
import Image from "next/image";
import { CloudinaryResource } from "@/components/interfaces/cloudinary"
import { CldImage } from "next-cloudinary";


 export function Home () {
  const images = ["logo", "feature_bible"]
  return (
    <main className="">
      <h3>Easter Wonder 2024</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center m-10 gap-10 ">
        {images.map(image => (
          <CldImage
            key={image}
            src={`Teacher_nneka/${image} `}
            alt={`EW2024 ${image}`}
            width={"600"}
            height={"600"}
            crop={"fill"}
          />
        ))}
      </div>
      
     
    </main>
  );
}

