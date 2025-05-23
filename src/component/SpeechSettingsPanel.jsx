import React, { useState } from 'react';
import { Mic, Phone, MessageSquare } from 'lucide-react';
import Toggle from './Toggle';
import { RiArrowDropDownLine } from "react-icons/ri";
import { RiArrowDropUpLine } from "react-icons/ri";

const SpeechSettingsPanel = () => {
  const tabs= ['Speech Settings', 'Call Settings', 'Post Call', 'Chat Widget', 'Security'];  
  const [interruptions, setInterruptions] = useState(false);
  const [ambientNoise, setAmbientNoise] = useState(false);
  const [noiseLevel, setNoiseLevel] = useState('Low');
  const [speechSpeed, setSpeechSpeed] = useState('1.0x');
  const [activeTab,setActiveTab]=useState(tabs[0]);

  return (


    <div className=" cursor-pointer w-full max-w-md mx-auto rounded-2xl bg-white shadow-xl p-6 space-y-6">
      {/* Modal Header */}
      <div className="space-y-2">
        <div className="text-lg font-semibold text-gray-900">General configuration</div>
        <div className="text-sm text-gray-500">Choose how you’d like to start building your agent.</div>
        <div className="flex gap-2 mt-3">
          {tabs.map((tab, i) => (
            <button
              key={tab}
              onClick={()=>setActiveTab(tab)}
              className={`text-sm px-3 py-1 rounded-full font-medium  ${
                activeTab === tab
                  ? 'bg-black text-white'
                  : 'text-gray-500 hover:text-gray-800'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>


      {/* === Speech Settings Section === */}
      <div className="border border-gray-200 rounded-xl p-4 space-y-4">
        <div className="flex justify-between items-center border border-gray-200 rounded-xl">
          <div className="flex items-center gap-2  p-3 font-medium text-sm text-gray-900">
            <Mic className="w-4 h-4" />
            Speech Settings
          </div>
          <span className="text-gray-400 pr-2 text-4xl"><RiArrowDropUpLine /></span>
        </div>

        {/* Voice selection */}
        <div>
          <label className="text-sm font-medium text-gray-900 mb-1 block">Voice selection</label>
          <div className="w-full border border-gray-200 rounded-xl p-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
               alt="India"
                src="http://purecatamphetamine.github.io/country-flag-icons/3x2/IN.svg" 
                className='w-10 h-10 border rounded-full object-cover'/>
              <div>
                <div className="font-semibold text-sm">Trisha</div>
                <div className="flex gap-1 mt-1 flex-wrap text-xs">
                  <span className="bg-purple-100 text-purple-800 px-2 py-0.5 rounded-full">Female</span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">EN</span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">HI</span>
                  <span className="bg-gray-200 text-gray-800 px-2 py-0.5 rounded-full">+3</span>
                </div>
              </div>
            </div>
            <span className="text-gray-400 p-2  text-4xl"><RiArrowDropDownLine /></span>
          </div>
        </div>

        {/* Allow Interruptions */}
        <div className="flex justify-between items-center border border-gray-200 rounded-xl p-3 ">
          <div>
            <div className="text-sm font-medium text-gray-900">Allow Interruptions</div>
            <div className="text-xs text-gray-500">Enable the user to interrupt the agent</div>
          </div>
          <Toggle enabled={interruptions} setEnabled={setInterruptions} />
        </div>

        {/* Ambient noise */}
        <div className='border border-gray-200 rounded-xl p-3'>
        <div className="flex justify-between items-center">
          <div className="text-sm font-medium text-gray-900 mb-3">Ambient noise</div>
          <Toggle enabled={ambientNoise} setEnabled={setAmbientNoise} />
        </div>

        {/* Noise level - conditional */}
        {ambientNoise && (
          <div className="space-y-1">
            
            <div className="flex gap-2">
              {['Low', 'Medium', 'High'].map((level) => (
                <button
                  key={level}
                  onClick={() => setNoiseLevel(level)}
                  className={`px-4 py-1 rounded-full border text-sm font-medium transition ${
                    noiseLevel === level
                      ? 'bg-black text-white border-black'
                      : 'bg-white text-gray-800 border-gray-300 hover:border-gray-400'
                  }`}
                >
                  {level}
                </button>
              ))}
            </div>
          </div>
        )}
        </div>

        {/* Speech Speed */}
        <div className="space-y-1 border border-gray-200 rounded-xl p-3">
          <div className="text-sm font-medium text-gray-900">Speech speed</div>
          <div className="grid grid-cols-4 gap-2">
            {['0.25x', '0.50x', '1.0x', '1.25x'].map((speed) => (
              <button
                key={speed}
                onClick={() => setSpeechSpeed(speed)}
                className={`py-2 rounded-full border text-sm font-medium transition ${
                  speechSpeed === speed
                    ? 'bg-black text-white border-black'
                    : 'bg-white text-gray-800 border-gray-300 hover:border-gray-400'
                }`}
              >
                {speed}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* === Call Settings Section === */}
      <div className="border border-gray-200 rounded-xl p-4 flex justify-between items-center">
        <div className="flex items-center gap-2 font-medium text-sm text-gray-900">
          <Phone className="w-4 h-4" />
          Call Settings
        </div>
        <span className="text-gray-400 text-4xl"><RiArrowDropDownLine /></span>
      </div>

      {/* === Post Call Section === */}
      <div className="border border-gray-200 rounded-xl p-4 flex justify-between items-center">
        <div className="flex items-center gap-2 font-medium text-sm text-gray-900">
          <MessageSquare className="w-4 h-4" />
          Post Call
        </div>
        <span className="text-gray-400 text-4xl"><RiArrowDropDownLine /></span>
      </div>
    </div>
  );
};

export default SpeechSettingsPanel;
