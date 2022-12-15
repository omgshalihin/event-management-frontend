import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      // router.go(1); // can go back and forth through the history
      router.push('/'); // redirect to the homepage after 3 seconds
    }, 2000);
  }, [router]);

  return (
    <div className="deleted">
      <h1>Psstt.....</h1>
      <h2>We hope to have you back soon!</h2>
      <p>
        Go back to the
        {' '}
        <Link className="deleted-link" href="/">Homepage</Link>
      </p>
    </div>
  );
};

export default NotFound;
