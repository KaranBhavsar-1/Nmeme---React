import React from "react";
import { useOutletContext } from "react-router-dom";
import ToggleSwitch from "./ToggleSwitch";
import { useState } from "react";
function Settings() {
  const { darkMode, setDarkMode } = useOutletContext();

  return (
    <div>
      <h1 className=" font-bold italic px-2 py-2 text-3xl">
        Setting
      </h1>
      <div>
        <ToggleSwitch
        // classname={"bg-gray-400"}
          title="Dark Mode"
          description="Enable dark theme across the application"
          isOn={darkMode}
          onToggle={() => setDarkMode(!darkMode)}
        ></ToggleSwitch>
      </div>
    </div>
  );
}

export default Settings;
