   import Header from "./Header";
import Write from "./Write";
import "../App.css";
import Output from "./Output";
   const CodeHome=()=>
   {
    return (
     //could have used div element here but using empty react fragment element does not create an unnecessary child, saves space,faster 
     <div className="Codepage">

         <Header></Header>
          <Write></Write>
          <Output></Output>  
     </div>
    )
   }
   export default CodeHome;