import ShowAllList from '@/components/template/ShowAllList';
import React from 'react'

async function page() {
    
    const res = await fetch(`http://localhost:3000/api/serie`, {
        cache: "no-store",
    });
    const data = await res.json();
    console.log(data);
    let finalData = data.data;

    return (
        <ShowAllList data={finalData} />
    )
}

export default page
