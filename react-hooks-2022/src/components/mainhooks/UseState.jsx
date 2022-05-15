import {useState} from 'react'

export const UseState = () => {

   const [count, setCount] = useState(0)

   return (
         <div>
            <h3>useState Hook</h3>
            <p>
               <button type="button" onClick={() => setCount((count) => count + 1)}>
               count is: {count}
               </button>  
            </p>  
         </div>
   )
}
