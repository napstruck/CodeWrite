   import Header from "./Header";
import Write from "./Write";
import "../App.css";
   const CodeHome=()=>
   {
    return (
     //could have used div element here but using empty react fragment element does not create an unnecessary child, saves space,faster 
     <div className="Codepage">
         <Header></Header>
          <Write></Write>
     </div>
    )
   }
   export default CodeHome;