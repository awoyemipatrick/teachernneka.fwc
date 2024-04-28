import { useRouter } from 'next/navigation';
import Success from "../../components/success"

const SuccessPage = () => {
  const router = useRouter();
  const { name, email } = router.query;

  return (
    <div>
      <Success name={name} email={email} />
    </div>
  )
}

export default SuccessPage;