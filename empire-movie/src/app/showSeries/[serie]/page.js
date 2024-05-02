import DetailsPage from '@/components/template/DetailsPage';
import Serie from '@/models/Series';
import connectDB from '@/utils/connectDB';
import React from 'react'

async function page({ params: { serie } }) {

    await connectDB();
    const serieData = await Serie.findOne({ _id: serie });
  
    if (!serieData) return <h3>مشکلی پیش آمده است</h3>;
  
    return (
      <DetailsPage data={serieData}/>
    )
  }

export default page
