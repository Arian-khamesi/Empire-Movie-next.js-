import React from 'react'
import { InfinitySpin } from 'react-loader-spinner'

function Loader() {
    return (
        <InfinitySpin
            visible={true}
            width="200"
            color="#FED085"
            ariaLabel="infinity-spin-loading"
        />
    )
}

export default Loader

