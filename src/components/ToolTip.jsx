import { useState } from "react";

export let showToolTip = null;
export let hideToolTip = null;

const ToolTip = () => {
  const [label, setLabel] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [coords, setCoords] = useState({ top: 220, left: 300 });

  showToolTip = (e) => {
    const iconRect = e.currentTarget.getBoundingClientRect();

    const top = iconRect.bottom;
    const center = iconRect.left;
    console.log(iconRect);
    setCoords({ top, left: center });
    setIsActive(true);
    setLabel(e.currentTarget.dataset.label);
  };

  hideToolTip = () => {
    setIsActive(false);
  };

  return (
    <div
      className={`tooltip ${isActive ? "active" : ""}`}
      style={{ top: coords.top, left: coords.left }}
    >
      {label}
    </div>
  );
};
export default ToolTip;
