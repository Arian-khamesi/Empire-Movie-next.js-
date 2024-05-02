import DetailsPage from '@/components/template/DetailsPage'
import Movie from '@/models/Movies';
import connectDB from '@/utils/connectDB';
import React from 'react'

async function page({ params: { movie } }) {

  await connectDB();
  const movieData = await Movie.findOne({ _id: movie });

  if (!movieData) return <h3>مشکلی پیش آمده است</h3>;

  return (
    <DetailsPage data={movieData}/>
  )
}

export default page