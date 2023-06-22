import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import CodeHome from './components/CodeHome.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "CodeHome",
    element: <CodeHome/>
  },
 
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
   
  // </React.StrictMode>, this is used to render react component twice so removing this will remove the duplicate element.
   <RouterProvider router={router} />
)
export default router;