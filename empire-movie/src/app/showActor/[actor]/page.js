import ActorProfile from '@/components/module/ActorProfile';
import Actor from '@/models/Actors';
import connectDB from '@/utils/connectDB';
import React from 'react'

async function page({ params: { actor } }) {

    await connectDB();
    const actorData = await Actor.findOne({ _id: actor });
  
    if (!actorData) return <h3>مشکلی پیش آمده است</h3>;
  
    return (
      <ActorProfile data={actorData}/>
    )
  }

export default page
