import ColoredIcon from "./components/colored-icon";
import CombinedIcon from "./components/combined-icon";
import DuotoneIcon from "./components/duotone-icon";
import Icon from "./components/icon";

function App() {
  return (
    <>
      <p className="text-3xl font-bold">Hello World!</p>
      <Icon size={48} name="a-b" />
      <Icon size={48} name="accessible" className="text-blue-600" />

      <ColoredIcon size={48} name="data_protection" />
      <ColoredIcon size={48} name="debt" className="text-red-600" />

      <DuotoneIcon size={48} name="add-circle" />
      <DuotoneIcon size={48} name="cake" className="text-green-600" />

      <CombinedIcon
        type="icon"
        size={48}
        name="a-b-off"
        className="text-violet-600"
      />
      <CombinedIcon
        type="colored"
        size={48}
        name="data_sheet"
        className="text-violet-600"
      />
      <CombinedIcon
        type="duotone"
        size={48}
        name="g-translate"
        className="text-violet-600"
      />
    </>
  );
}

export default App;
