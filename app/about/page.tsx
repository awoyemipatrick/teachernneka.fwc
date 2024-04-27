import { title } from "@/components/primitives";
import { SocialLinks } from "@/components/SocialLink/socialLink"
import Image from "next/image"
import TeacherNneka from '/public/assets/team/teacher-nneka.jpg'
import PastorJohn from '/public/assets/team/pastor-john.jpg'
import TeacherNike from '/public/assets/team/teacher-nike.jpg'
import TeacherAnuli from '/public/assets/team/anulika.jpg'
import PastorAustin from '/public/assets/team/pastor-austin.jpg'
// import WalkOfFame from '/public/assets/wof.png'
import Link from "next/link"


const social = [
  { name: '', href: '#', icon: '' },
  { name: '', href: '#', icon: '' },
  { name: '', href: '#', icon: '' },
  { name: '', href: '#', icon: '' },
]
const team = [
  {
    name: 'Teacher Nneka',
    desc: 'Nneka Anyachebelu often referred to as Teacher Nneka is the Lead facilitator of The Family Word Centre. She holds a masters degree in Public Administration from the University of Lagos, Nigeria and a bachelors’ degree in English Linguistics from the University of Jos. She also holds  a Diploma from the Word of Faith Bible Institute. A member of the Institute of National Transformation.Teacher Nneka started her career in one of Nigeria’s leading financial institutions before she founded the Family Word centre to cater for the spiritual and moral excellence gap prevailing in our society especially in the family Circle and amongst the millennium children. ', role: '', img: TeacherNneka
  },
  {
    name: 'Apostle John Enelemah',
    desc: 'Apostle John.C. Enelamah is executive director of Apostles in the Marketplace, a network committed to advancing leadership principles in the marketplace and building a platform for change agents in society. He is also senior pastor of World Revival Church. A reformer, John has carried the message of reformation and has being involved in outreach across the globe.', role: 'Pastor', img: PastorJohn
  },
  { 
    name: 'Anulika Mojekwu',
    desc: 'Anulika Mojekwu who started her career  with the oil and Gas industry finds fulfillment in design, Arts and drama. A passion she shares with the children, teens and pre-teens. She engages the children in creative arts, dance and drama and other creative activities, all geared towards their moral and spiritual development. Anuli holds a diploma from the London School of fashion.', role: 'Bible class Teacher', img: TeacherAnuli
  },
  {
    name: 'Pastor Austin Uche Enyinnaya',
    desc: 'Pastor Austin Enyinnaya is a Member of the Institution for National Transformation. He holds a Diploma in Ministerial studies and has a passion for Evangelism. A fervent intercessor, he has a strong belief in National Transformation through prayers and the ministry of the Word.', role: 'Bible class Teacher', img: PastorAustin
  },
  {
    name: 'Nike Ajibola Falomo',
    desc: 'Nike Ajibola holds degrees in Economics and Accounting and an MBA from Lagos Business School, Nigeria. She has over thirteen years’ experience in the Banking Industry with a passion for process improvements and innovations which she deploys in problem solving and project management during her daytime work and also in her teaching sessions. She specializes in using graphics, visuals and object lessons in simplifying complex lessons.Her major life goal is for her to know the Father and be an expression of His love and ways.', role: 'Member', img: TeacherNike
	},
	
]
const motives = [
  {
    title:
      'Our Mission',
    value:
      'To teach and train Parents on how to Home-church and train their children Spiritually Assist busy parents in the spiritual and moral mentoring of their 21st century children. To assist parents in rebuilding and restoring family traditions and Biblical values in the Family circle. To avail busy parents, practical impactful spiritual resources for their children’s spiritual development'
  },

  {
    title:
      'Our Vision',
    value:
      'To help parents see their role in the society more as nation builders and not just child bearers. To re-build the broken bridge between today’s busy parents and their busier millennium children . To strengthen the Family circle, providing it with spiritual resources, making it a spiritual resource centre and hub for children in their formative years . To see Parents building the children spiritually with the same zeal and measure they apply in secular things. To see that Parents include teaching and studying the Word with their children, as part of their daily busy schedule. To see families spend quality hours with children irrespective of secular commitments, engagements and distractions. '
  },

]

export default function AboutPage() {
  return (
    <div className="md:m-[5%] relative isolate overflow-hidden py-24 sm:py-32 shadow-2xl">
      <div className="mx-auto px-6 lg:px-8">
        <h2 className=" text-base font-bold tracking-tight sm:text-lg md:text-xl">About us</h2>
        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <div className='flex-1'>
            <p className="mt-6 text-lg leading-8 p-4 shadow-2xl md:hover:shadow-xl ">
              Millennial-parenting Radio presenter and esteemed keynote speaker, Nneka Ibukun Anyachebelu, often referred to as
              Teacher Nneka, is an ex-banker and the founder of Family Word Centre, a facility including a Children Bible School
              and a Christian Resort in Lekki, Lagos. <br /> Teacher Nneka is a leader in spiritual parenting training. She has
              offered a variety programs that have impacted thousands of families. She runs a virtual children Bible School for
              ages 4-18, empowering children spiritually and positioning them for a purpose-driven life. Since 2005, the children
              Bible School has impacted thousands of children and youths, giving them the spiritual foundation needed to navigate
              today&lsquo;s complex world. <br /> Teacher Nneka has been the lead facilitator of the DREAM program on work-life
              Integration and the manager of the Millennial Parenting Program for over a decade. A member of the Institute for National
              Transformation, she has facilitated several teaching and training courses in and outside of the Word Centre, and she has
              authored several books on spiritual parenting and family devotionals. She is married with children. <br /> The Family
              Word Centre is a multi-purpose facility, a home of personal and group retreats. It includes a soul spa, Christian café,
              Christian Meditation Centre, Character Museum, Inspirational Walk of Fame, Prayer Rooms, Children Bible School and training
              for adults and children on life and fulfillment .
            </p>
          </div>


        </div>
      </div>
      {/* <div className="w-full h-[0.5px] bg-black"></div> */}
      <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none ">

        <SocialLinks/>
        <h2 className="text-2xl font-bold px-2 tracking-tight sm:text-3xl mt-[4rem]">Meet Our Team <span aria-hidden="true">&rarr;</span> </h2>
        <ul role="list" className="grid gap-x-8 gap-y-12 m-10 md:grid-cols-2 sm:gap-y-16 xl:col-span-2 ">
          {team.map((moral) => (
            <li key={moral.name}>
              <div className=" shadow-2xl md:px-4 p-10 rounded-2xl">
                <div className="flex-col items-center gap-x-6 m-0 p-0 md:p-4 ">
                  <Image className="h-36 w-36 md:w-46 md:h-46 rounded-full " src={moral.img} alt="" />
                  <div className=" md:m-4">
                    <h3 className=" uppercase text-base font-semibold leading-7 tracking-tight">{moral.name}</h3>
                    <i className="">{moral.desc} </i>
                  </div>
                  <div></div>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div className="w-full h-[0.5px] underline"> </div>

        <div className=" md:my-16 grid grid-cols-1 gap-8 sm:mt-20 md:grid-cols-2">
          {motives.map((motive) => (
            <div key={motive.title} className="flex flex-col">
              <h4 className="text-xl font-bold leading-7 m-4 ">
                {motive.title}
              </h4>
              <p className="text-lg font-semi-bold p-8 leading-9 tracking-tight shadow-2xl md:hover:shadow-xl">
                {motive.value}
              </p>
            </div>
          ))}
        </div>
        <div className="w-full h-[0.5px] bg-black"></div>
      </div>
    </div>
  )
}







// export default function AboutPage() {
// 	return (
// 		<div>
// 			<h1 className={title()}>About Us</h1>
// 		</div>
// 	);
// }
