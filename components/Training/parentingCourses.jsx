import React from 'react'

const ParentingCourses = () => {
  return (
    <div className='md:flex justify-around px-2 border '>
      <div className='flex-1 p-2 bg-gray-100/50 shadow-md'>
        <h1 className='font-bold mb-6 text-xl md:text-2xl '>Parenting Courses Offered: </h1>
        <div className='my-4'>
          <h3 className='font-medium md:font-semibold text-medium md:text-xl'>
            Bible-Based Parenting
          </h3>
        </div>
        <div className='my-4'>
          <h3 className='font-medium md:font-semibold text-medium md:text-xl'>
            Counseling and Consultation
          </h3>
        </div>
        <div className='my-4'>
          <h3 className='font-medium md:font-semibold text-medium md:text-xl'>
            Basic standard for millennium parenting
          </h3>
          <ul className='list-inside list-disc'>
            <li>Raising Spiritual and Secular Giant</li>
            <li>How to home-church your children</li>
            <li>Become your Child&apos;s pastor</li>
            <li>Pastoring your Family</li>
            <li>Parenting in a Digital World.</li>
            <li>Training your child to walk with God online</li>
          </ul>
        </div>
        <div className='my-4'>
          <h3 className='font-medium md:font-semibold text-medium md:text-xl'>
            How to have an effective family Bible study time
          </h3>
          <ul className='list-inside list-disc'>
            <li>Creative Family Bible Study</li>
          </ul>
        </div>
        <div className='my-4'>
          <h3 className='font-medium md:font-semibold text-medium md:text-xl'>Spiritual Parenting</h3>
          <ul className='list-disc list-inside'>
            <li>Spiritual parenting for parents of teens</li>
            <li>Spiritual parenting for parenting of preteens</li>
          </ul>
        </div>
        <div className='my-4'>
          <p>
            <span className='font-medium md:font-semibold text-medium md:text-xl'>
              Pre-homecoming training:
            </span>
            How best to maximize your child&apos;s Holiday seasons for mental, emotional, spiritual
            and physical development
          </p>
        </div>
        <div className='my-4'>
          <h3 className='font-medium md:font-semibold text-medium md:text-xl'>Building spiritual muscles in children: Discipline and  Habits</h3>
          <ul className='list-inside list-disc'>
            <li>Raising children for Destiny: Series  1 to 7</li>
            <li>Meditation</li>
            <li>Worship</li>
            <li>Prayer</li>
            <li>Entering His presence</li>
          </ul>
        </div>
        <div className='my-4'>
          <h3 className='font-medium md:font-semibold text-medium md:text-xl'>
            The Challenges of 21st century parenting and Navigation
          </h3>
          <ul className='list-inside list-disc'>
            <li>Partnering with God in parenting</li>
            <li>Parenting without compromising</li>
            <li>Parenting in a Digital World</li>
          </ul>
        </div>

      </div>
      <div className='flex-1 items-center mx-2 md:mx-10 text-center rounded shadow-xl'>
        <h1 className='font-bold text-medium md:text-2xl my-10'>Anchor Message for Spiritual Parenting</h1>
        <blockquote className='p-2 md:p-4'>
          <p className='mb-6'>
            &ldquo;These words which I command you shall be in your heart you shall teach them diligently to
            your children, and shall talk of them when you sit in your house, when you walk by the
            way, when you lie down, and when you rise up, you shall bind them as a sign on your
            hands, you shall write them on the doorpost of your house.&ldquo;
          </p>
          <footer>
            <cite><b>Deuteronomy</b> 6: 6-11</cite>
          </footer>
        </blockquote>
      </div>
    </div>
  )
}

export default ParentingCourses