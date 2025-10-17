import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromPastes } from "../redux/pasteSlice";
import toast from "react-hot-toast";
import { NavLink } from "react-router-dom";

function Paste() {
  const [searchTerm, setSearchTerm] = useState("");
  const pastes = useSelector((state) => state.paste.pastes);
  const dispatch = useDispatch();

  const filteredData = pastes.filter((paste) =>
    paste.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  function handleDelete(pasteId) {
    dispatch(removeFromPastes(pasteId));
  }

  return (
    <div className="bg-white min-h-screen py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Search Bar */}
        <div className="mb-6">
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-0 text-gray-800 placeholder-gray-400"
            type="search"
            placeholder="Search paste here..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Container Panel */}
        <div className="bg-white border border-gray-200 rounded-lg">
          {/* Header */}
          <div className="px-5 py-4 border-b border-gray-200">
            <h1 className="text-2xl font-bold text-gray-900">All Pastes</h1>
          </div>

          {/* Paste List */}
          <div className="divide-y divide-gray-200">
            {filteredData.length > 0 ? (
              filteredData.map((p) => (
                <div key={p?._id} className="px-5 py-4">
                  <div className="flex items-start justify-between gap-4">
                    {/* Paste Title + Content */}
                    <div className="flex-1 min-w-0">
                      <h2 className="text-lg font-semibold text-gray-900 mb-1">
                        {p.title}
                      </h2>
                      <p className="text-sm text-gray-600 whitespace-pre-wrap line-clamp-2">
                        {p.content}
                      </p>
                    </div>

                    {/* Actions + Date */}
                    <div className="flex flex-col items-end ml-4 space-y-2">
                      <div className="flex items-center gap-2">
                        <NavLink
                          to={`/?pasteId=${p._id}`}
                          className="flex items-center justify-center w-9 h-9 border border-gray-200 rounded-md text-gray-600 hover:bg-gray-100 transition"
                          title="Edit"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-4 h-4"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M16.862 4.487l1.687 1.687a1.875 1.875 0 010 2.652L9.53 17.845a4.5 4.5 0 01-1.897 1.13l-3.48.993.993-3.48a4.5 4.5 0 011.13-1.897l9.02-9.02a1.875 1.875 0 012.652 0z"
                            />
                          </svg>
                        </NavLink>

                        <NavLink
                          to={`/pastes/${p._id}`}
                          className="flex items-center justify-center w-9 h-9 border border-gray-200 rounded-md text-gray-600 hover:bg-gray-100 transition"
                          title="View"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-4 h-4"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                            />
                            <circle cx="12" cy="12" r="3" />
                          </svg>
                        </NavLink>

                        <button
                          onClick={() => {
                            navigator.clipboard.writeText(p?.content);
                            toast.success("Copied to clipboard");
                          }}
                          className="flex items-center justify-center w-9 h-9 border border-gray-200 rounded-md text-gray-600 hover:bg-gray-100 transition"
                          title="Copy"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-4 h-4"
                          >
                            <rect
                              x="9"
                              y="9"
                              width="13"
                              height="13"
                              rx="2"
                              ry="2"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"
                            />
                          </svg>
                        </button>

                        {/* 🗑️ Dustbin Icon for Delete */}
                        <button
                          onClick={() => handleDelete(p._id)}
                          className="flex items-center justify-center w-9 h-9 border border-gray-200 rounded-md text-gray-600 hover:bg-gray-100 transition"
                          title="Delete"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-4 h-4"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M6 7h12m-9 0V4a1 1 0 011-1h4a1 1 0 011 1v3m2 0v13a2 2 0 01-2 2H8a2 2 0 01-2-2V7z"
                            />
                          </svg>
                        </button>
                      </div>

                      <div className="text-xs text-gray-400">
                        {new Date(p.createdAt).toLocaleDateString(undefined, {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="px-5 py-8 text-center text-gray-500">
                No pastes found.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Paste;
