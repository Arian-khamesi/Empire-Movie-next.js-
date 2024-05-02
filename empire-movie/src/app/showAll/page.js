import ShowAllList from '@/components/template/ShowAllList';
import React from 'react'

async function page() {

        const res = await fetch(`http://localhost:3000/api/movie`, {
            cache: "no-store",
        });
        const data = await res.json();
        let finalData = data.data;
   
    return (
        <ShowAllList data={finalData}/>
    )
}

export default page
