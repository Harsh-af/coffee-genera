import { useEffect } from "react";
import Body from "../Components/Body";
import Appbar from "../Components/Appbar";
import Tile1 from "../Components/Tile1";
function Home() {
  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);
  return (
    <div style={{ backgroundColor: "#bdb2a7" }}>
      <Appbar />
      <Body />
      <Tile1 />
      <Body />
    </div>
  );
}

export default Home;
