// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { Description } from "@mui/icons-material";
import "./App.css";
import FrameWork from "./components/FrameWork";
import NavPage from "./components/NavPage";
import DescriptionSection from "./components/Description";

function App() {
  return (
    <div className="CodeWriteWebSite">
      <NavPage></NavPage>
      <FrameWork></FrameWork>
      <DescriptionSection></DescriptionSection>
    </div>
  );
}

export default App;
