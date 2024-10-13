// src/pages/page.tsx
import '../app/styles/global.css';
import Link from 'next/link';

const Dashboard = () => {
  return (
    <div className="container container-1">
      <h1 className="heading">Dashboard</h1>
      <h3>Please Enter Your Details</h3>
      <div className="flex space-x-4">
        <Link href={'/signup'} passHref className='button button-1'>
            Go to Signup
        </Link>

        <Link href={'/login'} passHref className="button button-2">
            Go to Login
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
