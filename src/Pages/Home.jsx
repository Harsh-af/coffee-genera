import { useEffect } from "react";
import Body from "../Components/Body";
import Appbar from "../Components/Appbar";
import Tile1 from "../Components/Tile1";
import Tile2 from "../Components/Tile2";
import Tile3 from "../Components/Tile3";
import Tile4 from "../Components/Tile4";
import Tile5 from "../Components/Tile5";
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
      <Tile2 />
      <Tile3 />
      <Tile4 />
      <Tile5 />
    </div>
  );
}

export default Home;
