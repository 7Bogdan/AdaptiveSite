import MasterHeader from "./header/MasterHeader";
import MasterAside from "./aside/MasterAside";
import MasterFooter from "./footer/MasterFooter";
import MasterMain from "./main/MasterMain";

function App() {
  return (
    <div className="grid--wrapper--main">
      <MasterHeader />
      <MasterAside />
      <MasterMain />
      <MasterFooter />
    </div>
  );
}

export default App;
