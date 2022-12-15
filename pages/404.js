import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      // router.go(1); // can go back and forth through the history
      router.push('/'); // redirect to the homepage after 3 seconds
    }, 3000);
  }, [router]);

  return (
    <div className="not-found">
      <h1>Ooooopss.....</h1>
      <h2>That page cannot be found.</h2>
      <p>
        Go back to the
        {' '}
        <Link href="/">Homepage</Link>
      </p>
    </div>
  );
};

export default NotFound;
