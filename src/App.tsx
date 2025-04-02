import Slider from "./components/Slider";
import { slides } from "./components/data/slidedata.json";
const App = () => {
  return (
    <div className=" w-[100%] pt-[20%]">
      <Slider slides={slides} />
    </div>
  );
};

export default App;
