import React from 'react';


const Pagination = props => {
    const {  state } = props;

    
    
    //state && state.previous === 1 ? null: null;
  
    return ( 
        <nav> 
            <ul  className="inline-flex">
            <li onClick={()=>state.previous}>Previous</li>
            <li  onClick={()=>state.next}>Next</li>
            </ul>
        </nav>
     );
}


 
export default Pagination;