import ColoredIcon from "./components/colored-icon";
import CombinedIcon from "./components/combined-icon";
import Icon from "./components/icon";

function App() {
  return (
    <>
      <p className="text-3xl font-bold">Hello World!</p>
      <Icon name="a-b" />
      <Icon name="accessible" />

      <ColoredIcon name="data_protection" />
      <ColoredIcon name="debt" />

      <CombinedIcon type="icon" name="a-b-off" />
      <CombinedIcon type="colored" name="data_sheet" />
    </>
  );
}

export default App;
