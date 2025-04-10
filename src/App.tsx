import ColoredIcon from "./components/colored-icon";
import Icon from "./components/icon";

function App() {
  return (
    <>
      <p className="text-3xl font-bold">Hello World!</p>
      <Icon name="a-b" />
      <Icon name="accessible" />
      <ColoredIcon name="data-protection" />
      <ColoredIcon name="debt" />
    </>
  );
}

export default App;
