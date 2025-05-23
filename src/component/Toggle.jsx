import React from 'react'

const Toggle = ({ enabled, setEnabled }) => (
  <button
    onClick={() => setEnabled(!enabled)}
    className={`w-10 h-5 flex items-center rounded-full transition ${
      enabled ? 'bg-black' : 'bg-gray-300'
    }`}
  >
    <div
      className={`w-4 h-4 rounded-full bg-white shadow transform transition ${
        enabled ? 'translate-x-5' : 'translate-x-0'
      }`}
    />
  </button>
);
export default Toggle;