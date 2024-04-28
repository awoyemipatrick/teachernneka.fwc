import TrainingImage from '@/public/assets/training/training01.png';
import Image from 'next/image';
import React from 'react';

const WorkPlaceChallenge = () => {
  return (
    <div className='md:container md:mx-auto dreams-training'>
      <section>
        <h1 className='font-bold text-3xl text-center'>THE CHALLENGE OF THE MODERN WORKPLACE</h1>
        <p className='font-medium text-xl text-center'>WHERE IS THE WORK-LIFE BALANCE?</p>
      </section>
      <section>
        {/* Description section */}
        <div className='md:flex justify-between my-10 shadow-xl gap-6 p-2 md:p4'>
          <div className='flex-1 justify-center items-center border text-center p-4 '>
            <Image className='w-full rounded' src={TrainingImage} alt='Training Image' />
          </div>
          <div className='flex-1 shadow-2xl p-4'>
            <p>
              Most businesses are not working at their highest capacity because of lack of engagement
              from their employees. The problem is not the workers themselves, but the need for the
              optimal work-life balance. <br /> Companies pushing their employees without promoting
              the integration of their occupations and personal health suffer from:
            </p>
            <div className='my-4'>
              <ul className='list-inside list-disc'>
                <li>STRESS, which causes 40% EMPLOYEE TURNOVER and health costs increases of up to 46%.</li>
                <li>Undermined attention and decision-making ability</li>
                <li>LOW PRODUCTIVITY due to absenteeism and retention problems</li>
                <li>DECREASED PROFITABILITY from less shareholder return</li>
                <li>Diminishing job satisfaction</li>
              </ul>
            </div>
            <p>
              Don&apos;t allow your work to manage your workers when your workers should be managing the
              work. There is no reason to put up with the enormous downsides of a lack of work-life
              balance when there are opportunities to take full advantage of your team&apos;s
              talent and ensure its total wellness.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
export default WorkPlaceChallenge;