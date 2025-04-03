import React, { useEffect } from "react";
import {
  startACO,
  clearCanvas,
  addRandomNodes,
  registerCanvasClick,
} from "./aco";

const Visualizer = () => {
  useEffect(() => {
    registerCanvasClick();
  }, []);

  return (
    <div className="bg-black text-white min-h-screen py-6 px-4">
      <div className="controls text-center space-y-4">
        {/* Ants Slider */}
        <div className="space-x-2">
          <label htmlFor="ants">Ants:</label>
          <input
            type="range"
            id="ants"
            min="1"
            max="100"
            defaultValue="10"
            onInput={(e) =>
              (document.getElementById("antsVal").innerText = e.target.value)
            }
          />
          <span id="antsVal">10</span>
        </div>

        {/* Alpha */}
        <div className="space-x-2">
          <label htmlFor="alpha">Alpha (pheromone):</label>
          <input
            type="range"
            id="alpha"
            min="0"
            max="5"
            step="0.1"
            defaultValue="1"
            onInput={(e) =>
              (document.getElementById("alphaVal").innerText = e.target.value)
            }
          />
          <span id="alphaVal">1</span>
        </div>

        {/* Beta */}
        <div className="space-x-2">
          <label htmlFor="beta">Beta (heuristic):</label>
          <input
            type="range"
            id="beta"
            min="0"
            max="5"
            step="0.1"
            defaultValue="2"
            onInput={(e) =>
              (document.getElementById("betaVal").innerText = e.target.value)
            }
          />
          <span id="betaVal">2</span>
        </div>

        {/* Evaporation */}
        <div className="space-x-2">
          <label htmlFor="evaporation">Evaporation:</label>
          <input
            type="range"
            id="evaporation"
            min="0"
            max="1"
            step="0.01"
            defaultValue="0.5"
            onInput={(e) =>
              (document.getElementById("evapVal").innerText = e.target.value)
            }
          />
          <span id="evapVal">0.5</span>
        </div>

        {/* Random Node Generator */}
        <div className="space-x-2">
          <label htmlFor="random-count">Random Nodes:</label>
          <input
            type="range"
            id="random-count"
            min="1"
            max="50"
            defaultValue="10"
            onInput={(e) =>
              (document.getElementById("random-count-value").innerText =
                e.target.value)
            }
          />
          <span id="random-count-value">10</span>
          <button
            onClick={() =>
              addRandomNodes(
                parseInt(document.getElementById("random-count").value)
              )
            }
            className="bg-yellow-600 px-3 py-1 rounded-md hover:bg-yellow-700"
          >
            Add Random
          </button>
        </div>

        {/* Action Buttons */}
        <div className="space-x-4 mt-4">
          <button
            onClick={startACO}
            className="bg-green-600 px-4 py-2 rounded-md hover:bg-green-700"
          >
            Start
          </button>
          <button
            onClick={clearCanvas}
            className="bg-red-600 px-4 py-2 rounded-md hover:bg-red-700"
          >
            Clear
          </button>
        </div>
      </div>
      <div className="mt-10 flex justify-center overflow-x-auto">
        <div className="w-[800px] max-w-full scale-[0.9] sm:scale-100 origin-top">
          <canvas
            id="canvas"
            width="800"
            height="600"
            className="border border-gray-700 block"
          ></canvas>
        </div>
      </div>
    </div>
  );
};

export default Visualizer;
