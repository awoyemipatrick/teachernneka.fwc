import Image from 'next/image'
import React from 'react'

// Images are too small
import Image1 from '@/public/assets/word_centre/img1.png'
import Image2 from '@/public/assets/word_centre/img2.png'
import Image3 from '@/public/assets/word_centre/img3.png'
import Image4 from '@/public/assets/word_centre/img4.png'
import Image5 from '@/public/assets/word_centre/img5.png'
import Image6 from '@/public/assets/word_centre/img6.png'


const ChildienBibleClass = () => {
  return (
    <div className='md:mx-[2%] w-full md:p-6 gap-3 border shadow-xl rounded-xl leading-normal'>
      <h2 className='text-center font-bold text-2xl '>Children Bible and Leadership School</h2>

      <div className=' lg:flex justify-between p-2 shadow-2xl gap-10 my-8 md:mx-[15%] '>
        <div className=''>
          <p>The Children Bible and Leadership School was created to
            bridge the gap between children&apos;s physical and mental
            development and their spiritual growth and empowerment. <br />
            Our school is based on our belief that through the course
            of a child&apos;s life, the child is intentionally trained in
            secular activities that develops them physically and mentally.
            On the other hand, the spirituality of the child is often left
            undeveloped, making them secular giants but spiritual dwarfs.
            Word Centre focuses on developing and activating the spiritual
            inner man of children to be at par with their mental and physical
            growth, preparing them for real life challenges, good citizenship
            and an intimate walk with God through adulthood.
          </p>
        </div>
        {/* <div className='w-full rounded-2xl shadow-2xl p-6 '>
          <Image src={Image1} alt={''} className='' />
        </div> */}
      </div>
      <div className='lg:flex justify-between md:p-4'>
        <div className='flex-1'>
          <h3 className='font-bold md:mb-2'>OUR VISION</h3>
          <p className='p-2'>
            Romans 12:2: “And do not copy the behaviour of this world. But be transformed by
            changing the way you think…”
            <br />

            <br />
            Our vision is a society in which the mind&apos;s of today&apos;s children are
            transformed and renewed from the present day spiritual and societal decadence
            through adequate knowledge of the Word of God by one-on-one teaching of the
            Bible and spiritual habits.
          </p>
        </div>
        <div className='flex-1 w-full rounded-2xl shadow-2xl p-6'>
          <Image src={Image2} alt={''} className='' />
        </div>
      </div>
      <div className='lg:flex justify-between p-4'>
        <div className='flex-1 p-4'>
          <h3 className='font-bold mb-4'> OUR MISSION</h3>
          <ul className='list-disc ml-6'>
            <li>
              To stir a hunger for God and spiritual realities in children
            </li>
            <li>
              To bombard the youth with the Word of GOD (and biblical activities), and dilute what has been gathered from the secular world through media and peers
            </li>
            <li>
              To surround the children with a godly network of friends
            </li>
            <li>
              To teach the children how to apply the Truth and the Word they learn from the Bible to everyday situation.
            </li>
            <li>
              To build a better society by preparing and equipping the children for tomorrow’s leadership positions through early knowledge and fear of God.
            </li>
          </ul>
        </div>
        <div className='flex-1 rounded-2xl shadow-2xl p-6'>
          <Image src={Image3} alt={''} className='' />
        </div>
      </div>
      <div className='lg:flex justify-between p-4'>
        <div className='flex-1 p-4'>
          <h3 className='font-bold mb-4'>HOW TO JOIN THE SCHOOL </h3>
          <h4 className='font-medium ml-2 mb-4'>PARENT&apos;S ORIENTATION</h4>
          <ul className='list-disc ml-8 mb-4'>
            <li>
              Children ages 5-19 join the community, online or on-site, after a parent&apos;s orientation and
              incorporation into the program and community.
            </li>
          </ul>
          <h4 className='ml-2 mb-4 font-medium'>SESSIONS</h4>
          <ul className='list-disc ml-8'>
            <li>
              The Bible and Leadership School runs every Saturday ( on-site and online). Classes are
              separated by age and tenure to ensure effective learning.
            </li>
            <li>
              Children who attend On-site, come to the centre on Saturday mornings with follow up
              Bible reading plans and spiritual engagement through out the week.
            </li>
            <li>
              Children who attend Online, join from anywhere in the world every Saturday with follow
              up online Bible reading plan and spiritual engagements  throughout  the week.
            </li>
          </ul>
        </div>
        <div className='flex-1 rounded-2xl shadow-2xl p-6'>
          <Image src={Image4} alt={''} className='' />
        </div>
      </div>
      {/* Leadership and Empowerment Section */}
      <div className='w-full h-[100vh] my-[10%]'>
        <h1>Leadership and Empowerment Programs</h1>
        <p>
          The Centre runs a variety of leadership and empowerment programs throughout the year as
          after-school activities and during school vacationssuch as summering mid-term breaks.
        </p>
        <div className='gap-5'>
          <aside className=' gap-10 items-center justify-center my-5 float-left'>
            <div className='shadow-2xl rounded-xl'>
              <Image src={Image5} alt='' className='md:p-4' />
            </div>
            <div className='shadow-2xl rounded-xl'>
              <Image src={Image6} alt='' className='p-4' />
            </div>
          </aside>
          <div className=''>
            {/* VBS */}
            <div>
              <h3>VACATION BIBLE SCHOOL</h3>
              <p>
                Vacation Bible School is run during school breaks and summer and focuses on how to
                effectively read and apply the Bible. It is available for children ages 4 to 16.
              </p>
            </div>
            {/* VW MG */}
            <div className=''>
              <h3 className=''>
                VIRTUOUS WOMAN AND MODERN GENTLEMAN
              </h3>
              <p className=''>
                A program designed for girls and boys ages 8-18 focusing on virtues, core values, sexuality,
                leadership, domestication, personal organization, act of Chivalry, life planning, drug and
                substance abuse, intro to Family life and developing a personal relationship with God.
                The program runs every school holiday.
              </p>
            </div>
            {/* VC */}
            <div className=''>
              <h3 className=''>
                VIRTUE CLUB
              </h3>
              <p className=''>
                An empowerment program for students in  public and semi public  schools focusing on virtues,
                core values,  leadership, sexuality,  domestication, personal organization, act of Chivalry,
                drug and substance abuse, life planning, intro to family life and developing a personal
                relationship with God. The program runs weekly in different public Schools.
              </p>
            </div>
            {/* TIN-B */}
            <div className=''>
              <h3 className=''>
                TEENS IN NATION BUILDING (TIN-B)
              </h3>
              <p className=''>
                A program designed for children ages 10 - 18 to learn about purpose and and their role in
                national transformation. The program runs every school holiday.
              </p>
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}

export default ChildienBibleClass