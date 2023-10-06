import { useParams } from "react-router-dom"
export function Book(){
   // useParams takes no parameter and returns object that have 
   // all the custom paramenters that are defined in our route
   const {id} = useParams() 
   return <h1>Book {id}</h1>
}