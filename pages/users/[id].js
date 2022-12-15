import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const getStaticPaths = async () => {
  const response = await fetch('https://event-management-backend-production.up.railway.app/api/users');
  const data = await response.json(); // data is an array of objects
  const paths = data.map(user => ({
    params: { id: user.id.toString() }, // return an object from this array
  }));
  return {
    paths, // now we telling next.js what to build using this paths
    fallback: false,
  };
};

// eslint-disable-next-line max-len
export const getStaticProps = async context => { // if there are 10 paths, this function will run 10 times
  const { id } = context.params;
  const response = await fetch(`https://event-management-backend-production.up.railway.app/api/users/${id}`);
  const data = await response.json();
  return {
    props: { user: data },
  };
};

const removeUser = id => {
  fetch(`https://event-management-backend-production.up.railway.app/api/users/${id}`, {
    method: 'Delete',
    mode: 'cors',
  });
};

const Details = ({ user }) => (
  <>
    <div className="user">
      <Image src={user.image} alt="avatar" width={300} height={300} />
      <h1>{user.username}</h1>
      <p>{user.email}</p>
      <p>
        Lives in:
        {' '}
        {user.city}
      </p>
      <p>
        From:
        {' '}
        {user.country}
      </p>
    </div>
    <Link onClick={() => removeUser(user.id)} href="/deleted" className="btn-delete">Delete Me</Link>
  </>

);

export default Details;
