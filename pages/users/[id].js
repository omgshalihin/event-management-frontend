import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";



const Details = () => {
  const [member, setMember] = useState(null);
  const router = useRouter();

  const removeUser = (id) => {
    fetch(
      `https://event-management-backend-production.up.railway.app/api/users/${id}`,
      {
        method: "Delete",
        mode: "cors",
      }
    );
  };

  useEffect(() => {
    const { id } = router.query;
    
    if (!id) return;

    fetch(
      `https://event-management-backend-production.up.railway.app/api/users/${id}`
    )
      .then((res) => res.json())
      .then((data) => setMember(data))
      .catch((error) => console.log(error));
  }, [router]);

  if (member != null) {
    return (
      <>
        <div className="user">
          <Image src={member.image} alt="avatar" width={300} height={300} />
          <h1>{member.username}</h1>
          <p>{member.email}</p>
          <p>Lives in: {member.city}</p>
          <p>From: {member.country}</p>
        </div>
        <Link
          onClick={() => removeUser(member.id)}
          href="/deleted"
          className="btn-delete"
        >
          Delete Me
        </Link>
      </>
    );
  }
};

export default Details;
