'use client';

import NavBar from "@/components/NavBar";
import { useUser } from "@auth0/nextjs-auth0/client";
import Image from "next/image";

export default function Profile(){
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading</div>;
  if (error) return <div>{error.message}</div>

  return (
    user && (
      <div>
        <NavBar />
        {/* <Image src={user.picture} alt={user.name} width={50} height={50}/> */}
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <h2> Courses Completed</h2>
      </div>
    )
  )
}