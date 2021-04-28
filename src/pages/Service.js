import { useParams } from "react-router-dom"
import React from 'react'


function Service({moviesdata}) {
          console.log(moviesdata)
          const {movieid}=useParams()
          console.log(movieid)
             const  heremovie = moviesdata.find((el) =>  el.id  == movieid )
             console.log(heremovie)
    return (
        <div   style={{width:'400px',height:'250px',margin:'50px'}}>
        <article className="container post-details">
        <div className="post-details-title">
         <span>
         
         <h1>
              {heremovie.title}
        </h1>
         </span>
    
        </div>
        <img
          src={heremovie.img}
          alt="Failed"
             style={{width:'100%',marginTop:'15px',marginBottom:'20px'}}
        />
        <p className="post-details-body">
             {heremovie.description}
        </p>
        <pre>
        
        
        
        
        </pre>
      </article>
            
        </div>
    )
}

export default Service
