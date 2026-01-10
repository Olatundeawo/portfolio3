import { useState } from "react";
import BootScreen from "./boot";
import Desktop from "./Desktop";

export default function App() {
  const [booted, setBooted] = useState(false);

  return (
    <>
      {!booted && <BootScreen onEnter={() => setBooted(true)} />}
      {booted && <Desktop />}
    </>
  );
}
