import React from "react";
import Image from "next/image";
import Book1 from '@/public/assets/books/book1.png'
import Book2 from '@/public/assets/books/book2.png'
import Book3 from '@/public/assets/books/book3.png'
import Vector from '@/public/assets/books/book01.png'

const ImageList = [
  {
    id: 1,
    img: Book1,
    title: "Pre-Home coming: Parenting Handbook",
    description:
      "Pre-Home coming book.",
  },
  {
    id: 2,
    img: Book2,
    title: "Miracles of Jesus",
    description:
      "A 60-day devotional for families.",
  },
  {
    id: 3,
    img: Book3,
    title: "Family Bible Study",
    description:
      "... also contains how to start bible jounaling with samples",
  },
];

export function Hero ({ handleOrderPopup }) {
  const [imageId, setImageId] = React.useState(Book1);
  const [title, setTitle] = React.useState("Pre-Home coming: Parenting Handbook");
  const [description, setDescription] = React.useState(
    "Pre-Home coming book."
  );

  const bgImage = {
    backgroundImage: `url(${Vector})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    // height: "100%",
    width: "100%",
  };

  return (
    <>
      <div
        className="min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200"
        style={bgImage}
      >
        <div className="container pb-8 sm:pb-0">
          <h1 className=" uppercase"> Other Great Resources </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2">
            {/* text content section */}
            <div
              data-aos-once="true"
              className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1"
            >
              <h1
                data-aos="zoom-out"
                data-aos-duration="500"
                data-aos-once="true"
                className="text-5xl sm:text-6xl lg:text-7xl font-bold"
              >
                {title}
                <p className="bg-clip-text text-transparent bg-gradient-to-b from-primary text-right text-sm to-secondary">
                  by Teacher Nneka
                </p>{" "}
              </h1>
              <p
                data-aos="slide-up"
                data-aos-duration="500"
                data-aos-delay="100"
                className="text-sm "
              >
                {description}
              </p>
              <div>
                <button
                  onClick={handleOrderPopup}
                  className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full"
                >
                  Order Now
                </button>
              </div>
            </div>
            {/* Image section */}
            <div className="min-h-[450px] sm:min-h-[450px] flex justify-center items-center relative order-1 sm:order-2 ">
              <div className="h-[300px] sm:h-[450px] overflow-hidden flex justify-center items-center">
                <Image
                  data-aos="zoom-in"
                  data-aos-once="true"
                  src={imageId}
                  alt="img"
                  className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-125 object-contain mx-auto"
                />
              </div>
           
              <div className="flex lg:flex-col lg:top-1/2 lg:-translate-y-1/2 lg:py-2 justify-center gap-4 absolute -bottom-[40px] lg:-right-1 bg-white rounded-full">
                {ImageList.map((item) => (
                  <Image
                    priority
                    key={item.id}
                    data-aos="zoom-in"
                    data-aos-once="true"
                    src={item.img}
                    onClick={() => {
                      setImageId(
                        item.id === 1 ? Book1 : item.id === 2 ? Book2 : Book3
                      );
                      setTitle(item.title);
                      setDescription(item.description);
                    }}
                    alt="img"
                    className="max-w-[100px] h-[100px] object-contain inline-block hover:scale-110 duration-200"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

