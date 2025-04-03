import Slider from "./components/Slider";

import { slides } from "./components/data/slidedata.json";
const App = () => {
  return (
    <div className="py-10 container mx-auto">
      <Slider slides={slides} />
    </div>
  );
};

export default App;
