import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function SearchOrder() {
    const [query,setQuery] = useState('');
    const navigate = useNavigate();

    function handleSubmit(e){
        e.preventDefault();
        if(!query) return;
        navigate(`/order/${query}`)
        setQuery('')


    }
  return (
    <form onSubmit={handleSubmit}>

    <input type='text' placeholder='Search order' onChange={(e)=>setQuery(e.target.value)} className='border-gray-900'/>
    </form>
  )
}

export default SearchOrder
