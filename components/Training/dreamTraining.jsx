import TrainingImage from '@/public/assets/training/training01.png';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

// Seraphina Simone / tiktok  
function DreamsTraining() {
  return (
    <div className='md:container md:mx-auto dreams-training'>
      <section>
        <h1 className='font-bold text-3xl text-center'>THE DREAM TRAINING PROGRAM</h1>
        <p className='font-medium text-xl text-center'>ACHIEVING WORK-LIFE INTEGRATION</p>
      </section>
      <section>
        {/* Description section */}
        <div className='md:flex justify-between my-10 shadow-xl gap-6 p-2 md:p4'>
          <div className='flex-1 justify-center place-items-center border text-center '>
            <Image className='w-full rounded' src={TrainingImage} alt='Training Image' />
          </div>
          <div className='flex-1'>
            <p>
              The Dream Program provides training, resources and practical tools for high performance
              and wellness across business employees. The program aims to empower and catalyze the
              workforce by providing avenues of dialogue and collaboration for them to sustain their
              essential work.
            </p>
            <p>
              Our courses focus on achieving work-life balance: juggling high productivity, stress
              management, distractions and physical, emotional and mental health in order to navigate
              the work-life divide.
            </p>
            <p>
              Teacher Nneka helps your group discover the hidden culprit behind most of the challenges
              in the workday—reflex behavior, the retaliatory mode of acting before we think that drives
              stress, overwhelmingness, and work-life strain. She arms your employees with the most
              effective practices—from email and interruption management, to stress management to
              resilience skills. In addition, she guides your group through the road map to
              the excellence: self, management  achievment, feeling valued, and the art of refueling
              and renewal.
            </p>
            <div className='my-4'>
              <strong>Your team will get proven skills to:</strong>
              <ul className='list-inside list-disc'>
                <li>Efficiently handle responsibilities, demands, and pressure</li>
                <li>Optimize their operations</li>
                <li>Mange email and information overload</li>
                <li>Build prioritization and time management</li>
                <li>Deal with interruptions, high-tense situations and distractions</li>
                <li>Promote their wellness</li>
                <li>Recharge their brains and bodies</li>
                <li>Achieve a fulfilling work-life balance</li>
              </ul>
            </div>
            <p>
              Our programs consisting of lectures and demonstrations are fun, interactive and practical
              to ensure your team&apos;s interest and application. Employees are guaranteed to
              finish training feeling satisfied, inspired and energized.
            </p>
          </div>
        </div>
      </section>
      <section>
        {/* How it works section */}
        <div className='items-center my-10'>
          <h1 className='font-bold text-2xl text-center my-8 underline'>HOW IT WORKS</h1>
          <div className='md:flex flex-wrap gap-2 justify-center'>
            <div className="flex-1 text-center p-4 bg-[#f4ecdd] ">
              <h3 className='font-semibold text-lg mb-6'>CHOOSE A PROGRAM</h3>
              <p>
                Employers and employees can choose from a large variety of courses: Managing Busy Workoad |
                Work-Life Integration | Stress Management |  Millennium parenting for Working Parents |
                Basics of Life planning.
              </p>
              <p>
                We also offer companies special customized courses developed to bring out the best results from
                their teams.
              </p>
            </div>
            <div className='flex-1 p-4'>
              <h3 className='text-center font-semibold text-lg mb-6'>CHOOSE A SESSION</h3>
              <ul className='list-inside ml-4 mb-4'>
                <li>Short Sessions: 2 Hours</li>
                <li>Full Session: 4 Hours</li>
              </ul>
              <p className='text-center'>
                <b>Pick A Venue</b>
                <br />
                We deliver trainings at any conference room, retreat venue or at our training Centre
              </p>
            </div>
            <div className="flex-1 text-center p-4 bg-[#f4ecdd]/90 ">
              <h3 className='font-semibold text-lg mb-6'>REACH OUT</h3>
              <p className='mb-6'>
                Join the countless employees and employers who have benefited from the DREAM program and have
                cut back on Stress, Depression and Work tension
              </p>

              <Link className="text-sm font-semibold leading-6 rounded-2xl bg-black py-2 px-3 text-white" passHref href="/contact">
                  Contact Us <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default DreamsTraining