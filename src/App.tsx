import { useState } from "react";
import ColoredIcon from "./components/colored-icon";
import CombinedIcon, { type IconProps } from "./components/combined-icon";
import DuotoneIcon from "./components/duotone-icon";
import Icon from "./components/icon";
import { iconNames } from "./constants/icons";
import { colors } from "./constants/colors";

function App() {
  const [type, setType] = useState<IconProps["type"]>();
  const [iconName, setIconName] = useState<IconProps["name"]>();
  const [iconColor, setIconColor] = useState<IconProps["className"]>();

  return (
    <>
      <p className="text-3xl font-bold">Hello World!</p>

      <hr />

      <div>
        <select
          onChange={(e) => {
            setType(e.target.value as IconProps["type"]);
            setIconName(undefined);
          }}
        >
          <option value="icon">Icon</option>
          <option value="colored">Colored</option>
          <option value="duotone">Duotone</option>
        </select>
        {!!type && (
          <select
            onChange={(e) => setIconName(e.target.value as IconProps["name"])}
          >
            {iconNames[type].map((name) => (
              <option value={name} key={name}>
                {name}
              </option>
            ))}
          </select>
        )}

        <select
          onChange={(e) =>
            setIconColor(e.target.value as IconProps["className"])
          }
        >
          {colors.map((color) => (
            <option value={color} key={color}>
              {color}
            </option>
          ))}
        </select>
      </div>

      <hr />

      {!!type && !!iconName ? (
        <>
          {/* @ts-expect-error typing is just trivial */}
          <CombinedIcon
            type={type}
            size={48}
            name={iconName}
            className={iconColor}
          />

          {type === "colored" && (
            <p>icon is colored, changing color won't do anything</p>
          )}
        </>
      ) : (
        <div className="w-8 h-8"></div>
      )}

      <hr />

      <div className="flex">
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
      </div>
    </>
  );
}

export default App;
