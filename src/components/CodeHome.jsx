   import Header from "./Header";
import Write from "./Write";

   const CodeHome=()=>
   {
    return (
     //could have used div element here but using empty react fragment element does not create an unnecessary child, saves space,faster 
     <>
         <Header></Header>
          <Write></Write>
     </>
    )
   }
   export default CodeHome;