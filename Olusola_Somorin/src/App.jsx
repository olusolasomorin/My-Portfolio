import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import LoadingScreen from "./components/LoadingScreen";
import './App.css'
import Mainapp from "./Mainapp";


export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="">
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen key="loader" onFinished={() => setIsLoading(false)} />
        )}
      </AnimatePresence>
        
      {!isLoading && <Mainapp />}
    </div>
  );
}