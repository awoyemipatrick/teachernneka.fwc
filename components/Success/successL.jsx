"use client"
import { useRouter } from 'next/navigation';
import Success from './success';

const SuccessRoute = () => {
  const router = useRouter();
  const { name, email } = router.query;

  return (
    <div>
      <Success name={name} email={email} />
    </div>
  )
}


export default SuccessRoute;