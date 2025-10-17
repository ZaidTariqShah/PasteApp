import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function ViewPaste() {
  const { id } = useParams();
  const allPastes = useSelector((state) => state.paste.pastes);
  const paste = allPastes.find((p) => p._id === id);

  return (
    <div className="bg-white min-h-screen py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Paste container */}
        <div className="border border-gray-300 rounded-md">
          {/* Header strip with circles */}
          <div className="flex items-center gap-2 px-3 py-2 border-b border-gray-200 bg-gray-50 rounded-t-md">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>

          {/* Title input (disabled) */}
          <div className="p-4 border-b border-gray-200">
            <input
              disabled
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-800 bg-gray-100 focus:outline-none cursor-not-allowed"
              value={paste?.title || ""}
              type="text"
            />
          </div>

          {/* Content textarea (disabled) */}
          <textarea
            disabled
            className="w-full min-h-[300px] p-4 rounded-b-md text-gray-800 bg-gray-100 focus:outline-none resize-none cursor-not-allowed"
            value={paste?.content || ""}
          />
        </div>
      </div>
    </div>
  );
}

export default ViewPaste;
