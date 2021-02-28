import React from 'react';
import InnerHeader from '../../components/InnerHeader';

const Kitchen = () => {
    const token = localStorage.getItem("token")
    const id = localStorage.getItem("id")


    return (
        <>
            <InnerHeader/>
        </>
    )
}

export default Kitchen;
