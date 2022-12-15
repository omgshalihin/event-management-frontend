import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import styles from '../../styles/Members.module.css';

const Members = () => {
  const [databaseData, setDatabaseData] = useState({});
  const router = useRouter();

  const toggleStatus = async id => {
    await fetch(`https://event-management-backend-production.up.railway.app/api/users/${id}`, {
      method: 'PATCH',
      mode: 'cors',
    });
    router.push('/users');
  };

  useEffect(() => {
     const hey = async () => {
      const response = await fetch('https://event-management-backend-production.up.railway.app/api/users');
      const data = await response.json(); // data is an array of objects
      setDatabaseData(data)
      return {
        props: { users: data },
      };
    };
    hey();
  }, [databaseData])

  if (databaseData.length > 0) {
  return (
    <div className={styles.members}>
      <h1 className={styles.goingTitle}>Going Solo</h1>
      {databaseData.filter(user => user.status === false).map(user => (
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
      {databaseData.filter(user => user.status === true).map(user => (
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
}

export default Members;
