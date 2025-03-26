import Slider from "./components/Slider";
import { slides } from "./components/data/slidedata.json";
const App = () => {
  return (
    <div>
      <Slider slides={slides} />
    </div>
  );
};

export default App;
