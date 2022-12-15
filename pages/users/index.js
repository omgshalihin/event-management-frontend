import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import styles from '../../styles/Members.module.css';

// this runs before component is rendered
export const getStaticProps = async () => {
  const response = await fetch('https://event-management-backend-production.up.railway.app/api/users', { next: { revalidate: 1 } });
  const data = await response.json(); // data is an array of objects
  return {
    props: { users: data },
  };
};

// http://localhost:3000/users
const Members = ({ users }) => {
  const router = useRouter();
  const toggleStatus = async id => {
    await fetch(`https://event-management-backend-production.up.railway.app/api/users/${id}`, {
      method: 'PATCH',
      mode: 'cors',
    });
    router.push('/users');
  };
  return (

    <div className={styles.members}>
      <h1 className={styles.goingTitle}>Going Solo</h1>
      {users.filter(user => user.status === false).map(user => (
        <div key={user.id} className={`${styles.going}`}>

          <Image
            className={` ${styles.single}`}
            onClick={() => {
              toggleStatus(user.id);
            }}
            src={user.image}
            alt="image"
            width={200}
            height={200} />
          <Link href={`/users/${user.id}`}>
            <h1>{user.username}</h1>
          </Link>
        </div>
      ))}

      <h1 className={styles.togetherTitle}>Make Buddies</h1>
      {users.filter(user => user.status === true).map(user => (
        <div key={user.id} className={`${styles.together}`}>

          <Image
            className={` ${styles.single}`}
            onClick={() => toggleStatus(user.id)}
            src={user.image}
            alt="image"
            width={200}
            height={200} />
          <Link href={`/users/${user.id}`}>
            <h1>{user.username}</h1>
          </Link>
        </div>
      ))}

    </div>
  );
};

export default Members;
