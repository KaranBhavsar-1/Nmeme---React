const ToggleSwitch = ({ classname , title, description, isOn, onToggle }) => {
  return (
    <label className ={`flex items-center justify-between gap-6 p-4 rounded-lg ${classname} border border-gray-300 cursor-pointer ${classname}`}>
      
      {/* Left text */}
      <div>
        <p className="text-sm font-medium">
          {title}
        </p>

        {description && (
          <p className="text-xs text-gray-500">
            {description}
          </p>
        )}
      </div>

      {/* Toggle */}
      <div className="relative">
        <input
          type="checkbox"
          className="sr-only peer"
          checked={isOn}
          onChange={onToggle}
        />

        <div className="w-11 h-6 bg-gray-300 rounded-full peer-checked:bg-black transition-colors"></div>
        <div className="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform peer-checked:translate-x-5"></div>
      </div>
    </label>
  );
};


export default ToggleSwitch;