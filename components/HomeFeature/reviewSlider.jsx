"use client"

import Image from "next/image";
import React, { useEffect, useState } from "react";

const data = [
  {
    id: 1,
    company: "Zenith pension ",
    position: "—Human resource",
    review: "I'm getting such positive feedback from your talk, and from people who were skeptics. They loved your presentation. One of our top performers called me to say, 'I felt like she knew me and was just speaking to me about my life.' Wow! You were fantastic.",
    image: "",
  },
  {
    id: 2,
    company: "Africa-Med Biotechnology Nigeria Ltd",
    position: "---Juliet Chukwuna, HR Manager",
    review: "The DREAM Training Program is very practical, timely, and essential for our generation of workers irrespective of age, gender, or class. I have had a great time listening to this training and I will recommend it to every adult. Thank you Teacher Nneka for this eye opening session.",
    image: "",
  },
  {
    id: 3,
    company: "Zenith pension ",
    position: "—Nkem Oni- Egboma, MD",
    review: "We searched long and hard to find the right trainer for the challenges we have been facing. We didn’t want airy-fairy or generalities, but something real and practical to help us with the uncertainties and challenges ahead. Teacher Nneka was the best choice for our stress management training. She gave us the tools and reminders we needed to manage stress and navigate the journey ahead.",
    image: "",
  },
  {
    id: 4,
    company: "NNPC",
    position: "—Ada Madunaeme",
    review: "Excellent presentation! To be able to capture the interest and attention of educational professionals is impressive. More importantly, I think you really made an impact and changed some minds yesterday.",
    image: "",
  },
  {
    id: 5,
    company: "Rock Montessori School, Lekki",
    position: "—Mrs Mapo",
    review: "Your message resonated with each person in the room. My team spends most of their waking hours focused so intently on work, the students, the teachers, and the parents, that many have lost touch with even the needs of their own families and most importantly, themselves. I am hopeful that if they take what you have so artfully presented to heart and put it into practice, that not only will they be more productive at work, but more importantly will get some of their personal lives back. Thank you for making a difference in my life and the lives of my team.",
    image: "",
  },
  {
    id: 6,
    company: "NOV",
    position: "—Anulika Obu —Document Controller",
    review: "Your talk was very refreshing and inspiring to all who attended. We got a great response. Especially memorable was your talk on the Apple and the Garden .Your techniques for dealing with depression was practical and fun, especially the I AM WORTH IT technique.",
    image: "",
  },
  {
    id: 7,
    company: "Zenith Bank ",
    position: "— Chinwe Emeka Mba",
    review: "Teacher Nneka is a true inspiration.",
    image: "",
  },
  {
    id: 8,
    company: "",
    position: "--Yemi",
    review: "Teacher Nneka presented to employees as well as our executive team. The presentation was on work-life balance. It was fun and interactive. It provided information and takeaways that the group put right to work. We had great feedback from the team and they thoroughly enjoyed her presentation, 'Leave the Apple, Enjoy the Garden' has been a jingle in our office since she left. Get Teacher Nneka to come face to face with your employees, you will be happy you did !!",
    image: "",
  },
  {
    id: 9,
    company: "",
    position: "—Maryam",
    review: "Teacher Nneka’s productivity and work-life balance training for our leadership team was fun, interactive and relevant. Teacher Nneka shared many strategies for managing work-life balance that will not only reduce stress on and off the job but will help increase satisfaction in both arenas.",
    image: "",
  },
  {
    id: 10,
    company: "",
    position: "—Godwin",
    review: "I received many positive comments from staff who really appreciated your words of wisdom and all the practical information that has helped us better understand how our emotions affect our work and decisions, and how to live a more balanced life. It was just what we needed this year to wrap up the year and start next year on the right foot, focusing on how to manage our personal and professional lives with greater satisfaction.",
    image: "",
  },
  {
    id: 11,
    company: "",
    position: "—Nonye",
    review: "Our staff really enjoyed Teacher Nneka’s presentation—lots of positive feedback.You have a great message and tips that can benefit all of us. I thought vacation was for shopping. Not anymore!",
    image: "",
  },
  {
    id: 12,
    company: "Anglican Church of Praise",
    position: "—Henshaw",
    review: "Was the workshop useful? 100% of employees said 'yes.' I am very pleased with the result. You offered tools and techniques that are easily implemented to make a significant difference in the workday.",
    image: "",
  },
  {
    id: 13,
    company: "",
    position: "—Mrs Coker",
    review: "Teacher Nneka was an inspiration! Her sessions were fun and interactive. She gave us some valuable tools to carry forward.",
    image: "",
  },
  {
    id: 14,
    company: "Zenith pension ",
    position: "—Senior Management",
    review: "Teacher Nneka was amazing at our conference, motivating and energizing our audience. She managed to get every single person in the room, more than 120 people, were competing for her prize. The hallways were buzzing afterwards with people determined to bring more balance into their lives. It was one of the highlights of the week.",
    image: "",
  },
  {
    id: 15,
    company: "",
    position: "—Mrs Akande",
    review: "Your material was very well-received by the staff. Thank you for providing this strategy that all overworked employees in large organizations should be aware of.",
    image: "",
  },
];

export const ReviewSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () =>
        setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1)),
      30000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <div className=''>
      <div>
        <div className=''>
          {/* <Image className='w-[100%] rounded-lg ' width={300} height={300} alt={e.title} src={e.image} /> */}
        </div>
        <div className=''>
          <div className='ml-2 mb-4'>
            <h2 className='text-xl font-bold '> {data[currentSlide].company} </h2>
          </div>
          <div className='pb-3'>
            <p> {data[currentSlide].review} </p>
          </div>
          <div className='pb-3'>
            <em> {data[currentSlide].position} </em>
          </div>
        </div>
      </div>
    </div>



  );
}