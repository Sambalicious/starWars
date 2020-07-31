import React from 'react';


const Pagination = ({setPage, state}) => {
    
   
    return ( 
        <nav> 
            <ul  className="inline-flex">
            <button onClick={()=>setPage(old => Math.max(old - 1, 1))}
                disabled={!state.previous}
            >Previous Page</button>



            <button  onClick={()=>setPage(old => state && state.next !==null ? old + 1: old)}
            disabled={!state.next}>Next page</button>
            </ul>
        </nav>
     );
}


 
export default Pagination;