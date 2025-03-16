import React from 'react'

import { useNavigate, useRouteError } from 'react-router-dom';
function Errors() {
    const error = useRouteError();
    console.log(error)
    const navigate = useNavigate();
  return (
  
        <div>
          <h1>Something went wrong 😢</h1>
          <p>{error.data || error.message}</p>
          <button onClick={() => navigate(-1)}>&larr; Go back</button>
        </div>
      );
    }
    


export default Errors
