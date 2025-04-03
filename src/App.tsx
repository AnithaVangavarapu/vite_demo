import Slider from "./components/Slider";
import { slides } from "./components/data/slidedata.json";
const App = () => {
  return (
    <div className="w-full sm:w-[80%] md:w-[70%] m-auto pt-[10%]">
      <Slider slides={slides} />
    </div>
  );
};

export default App;
