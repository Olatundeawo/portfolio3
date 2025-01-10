import React, { useState } from "react";

function ConnectSection() {
  const [isClicked, setIsClicked] = useState(false);

  const changeStyle = () => {
    setIsClicked(!isClicked); // Toggle visibility
  };

  return (
    <div className="relative" id="contact">
      {/* Main Section */}
      <div className="flex flex-col items-center justify-center text-white transition-opacity duration-300 mb-20">
        <h2 className="font-robotoslab font-bold lg:text-4xl mb-12 mt-12">Let&apos;s Connect</h2>
       
        <button
          onClick={changeStyle}
          className="mt-4 px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded"
        >
          Connect with me
        </button>
      </div>

      {/* Contact Section */}
      {isClicked && (
        <div className="absolute inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
          <div className="text-center text-white p-8 bg-gray-900 rounded shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Babatunde Awotimilehin</h3>
            <ul className="mb-4">
              <li className="mb-2">
                LinkedIn: <span className="underline cursor-pointer"><a href="https://www.linkedin.com/in/babatunde-awotimilehin-284a25180/" target="_blank">Connect with me</a></span>
              </li>
              <li className="mb-2">
                GitHub: <span className="underline cursor-pointer"><a href="https://github.com/Olatundeawo" target="_blank">Follow me</a></span>
              </li>
              <li>
                X: <span className="underline cursor-pointer"><a href="https://x.com/bokinsin" target="_blank">Follow me</a></span>
              </li>
            </ul>
            <p className="mb-4">Resume</p>
            <button
              className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded mb-4"
              onClick={() => alert("Downloading Resume...")}
            >
              <a href="https://drive.google.com/file/d/1V2gALzHnS8X2e9rY2HTYm6qjJQc7bsQB/view?usp=sharing" target="_blank">Download</a>
            </button>
            <button
              onClick={changeStyle}
              className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ConnectSection;
