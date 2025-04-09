// aco.js (modular version)

export let nodes = [];
let pheromoneMatrix = [];
let distanceMatrix = [];
let numAnts = 10;
let alpha = 1;
let beta = 2;
let evaporation = 0.5;
let Q = 100;
let bestTour = [];
let bestLength = Infinity;
export let isRunning = false;
export let sourceNode = null;

let antAgents = [];
let animationInterval;

function euclidean(p1, p2) {
  let dx = p1.x - p2.x;
  let dy = p1.y - p2.y;
  return Math.sqrt(dx * dx + dy * dy);
}

function initializeACO() {
  let n = nodes.length;
  pheromoneMatrix = Array.from({ length: n }, () => Array(n).fill(1));
  distanceMatrix = Array.from({ length: n }, (_, i) =>
    Array.from({ length: n }, (_, j) =>
      i === j ? Infinity : euclidean(nodes[i], nodes[j])
    )
  );
}

function chooseNextNode(ant, visited) {
  let current = ant[ant.length - 1];
  let probabilities = [];
  let sum = 0;

  for (let j = 0; j < nodes.length; j++) {
    if (!visited.has(j)) {
      let pher = Math.pow(pheromoneMatrix[current][j], alpha);
      let heuristic = Math.pow(1 / distanceMatrix[current][j], beta);
      let prob = pher * heuristic;
      probabilities.push({ node: j, prob });
      sum += prob;
    }
  }

  let r = Math.random() * sum;
  let cumulative = 0;
  for (let { node, prob } of probabilities) {
    cumulative += prob;
    if (r <= cumulative) return node;
  }
  return probabilities[probabilities.length - 1].node;
}

function animateAnts() {
  antAgents = [];

  for (let a = 0; a < numAnts; a++) {
    let startNode = sourceNode !== null ? sourceNode : a % nodes.length;

    antAgents.push({
      path: [startNode],
      visited: new Set([startNode]),
      complete: false,
    });
  }

  animationInterval = setInterval(() => {
    updateAnts();
    drawAnts();
  }, 200);
}

function updateAnts() {
  for (let ant of antAgents) {
    if (ant.complete) continue;

    if (ant.path.length === nodes.length) {
      ant.path.push(ant.path[0]);
      ant.complete = true;
    } else {
      const next = chooseNextNode(ant.path, ant.visited);
      ant.path.push(next);
      ant.visited.add(next);
    }
  }
}

function drawAnts() {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  drawPoints();

  ctx.lineWidth = 1;
  ctx.strokeStyle = "#0f0";

  for (let ant of antAgents) {
    ctx.beginPath();
    for (let i = 0; i < ant.path.length - 1; i++) {
      const p1 = nodes[ant.path[i]];
      const p2 = nodes[ant.path[i + 1]];
      ctx.moveTo(p1.x, p1.y);
      ctx.lineTo(p2.x, p2.y);
    }
    ctx.stroke();

    const head = nodes[ant.path[ant.path.length - 1]];
    ctx.beginPath();
    ctx.arc(head.x, head.y, 4, 0, 2 * Math.PI);
    ctx.fillStyle = "red";
    ctx.fill();
  }
}

export function startACO() {
  if (nodes.length < 2) {
    alert("Please add at least two nodes.");
    return;
  }

  numAnts = parseInt(document.getElementById("ants").value);
  alpha = parseFloat(document.getElementById("alpha").value);
  beta = parseFloat(document.getElementById("beta").value);
  evaporation = parseFloat(document.getElementById("evaporation").value);

  pheromoneMatrix = [];
  distanceMatrix = [];
  bestTour = [];
  bestLength = Infinity;

  isRunning = true;
  initializeACO();

  clearInterval(animationInterval);
  animateAnts();

  setTimeout(() => {
    for (let i = 0; i < 100; i++) {
      runACOIteration();
    }
    clearInterval(animationInterval);
    drawBestTour();
    updateResultTable(); // <-- new function to generate the table

    isRunning = false;
  }, 5000);
}

function runACOIteration() {
  let allTours = [];
  let allLengths = [];

  for (let a = 0; a < numAnts; a++) {
    let startNode = sourceNode !== null ? sourceNode : a % nodes.length;

    let tour = [startNode];
    let visited = new Set(tour);

    while (tour.length < nodes.length) {
      let next = chooseNextNode(tour, visited);
      tour.push(next);
      visited.add(next);
    }
    tour.push(tour[0]);

    let length = 0;
    for (let i = 0; i < tour.length - 1; i++) {
      length += distanceMatrix[tour[i]][tour[i + 1]];
    }

    allTours.push(tour);
    allLengths.push(length);

    if (length < bestLength) {
      bestLength = length;
      bestTour = tour.slice();
    }
  }

  for (let i = 0; i < nodes.length; i++) {
    for (let j = 0; j < nodes.length; j++) {
      pheromoneMatrix[i][j] *= 1 - evaporation;
    }
  }

  for (let k = 0; k < allTours.length; k++) {
    let tour = allTours[k];
    let length = allLengths[k];
    let deposit = Q / length;

    for (let i = 0; i < tour.length - 1; i++) {
      let from = tour[i],
        to = tour[i + 1];
      pheromoneMatrix[from][to] += deposit;
      pheromoneMatrix[to][from] += deposit;
    }
  }
}

function drawBestTour() {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  drawPoints();
  if (bestTour.length === 0) return;
  ctx.strokeStyle = "#00f";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(nodes[bestTour[0]].x, nodes[bestTour[0]].y);
  for (let i = 1; i < bestTour.length; i++) {
    ctx.lineTo(nodes[bestTour[i]].x, nodes[bestTour[i]].y);
  }
  ctx.stroke();
}

export function clearCanvas() {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  nodes = [];
  bestTour = [];
  bestLength = Infinity;
  isRunning = false;
  clearInterval(animationInterval);
}

export function addRandomNodes(count) {
  const canvas = document.getElementById("canvas");
  const rect = canvas.getBoundingClientRect();
  for (let i = 0; i < count; i++) {
    const x = Math.random() * rect.width;
    const y = Math.random() * rect.height;
    nodes.push({ x, y });
  }
  drawPoints();
  updateNodeListUI(); // <--- add this here too
  
}

export function registerCanvasClick() {
  const canvas = document.getElementById("canvas");
  if (!canvas) return;

  canvas.addEventListener("click", function (e) {
    if (isRunning) return;

    const rect = this.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Check if the click is on an existing node
    for (let i = 0; i < nodes.length; i++) {
      const node = nodes[i];
      const dx = node.x - x;
      const dy = node.y - y;
      if (Math.sqrt(dx * dx + dy * dy) < 10) {
        // Node was clicked — mark as source
        sourceNode = i;
        drawPoints(); // visually mark it
        return;
      }
    }

    // Otherwise, add a new node
    nodes.push({ x, y });
    drawPoints();
    updateNodeListUI(); // <--- add this here
  });
}

function drawPoints() {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < nodes.length; i++) {
    const point = nodes[i];
    ctx.beginPath();
    ctx.arc(point.x, point.y, 6, 0, 2 * Math.PI);
    ctx.fillStyle = i === sourceNode ? "orange" : "#fff";
    ctx.fill();
  }
}

function updateNodeListUI() {
  const container = document.getElementById("node-list");
  if (!container) return;

  container.innerHTML = "";

  nodes.forEach((node, index) => {
    const distance =
      sourceNode !== null && index !== sourceNode
        ? distanceMatrix[sourceNode][index].toFixed(2)
        : "-";

    const item = document.createElement("div");
    item.className = "mb-1";
    item.innerHTML = `Node ${index} → (x: ${node.x.toFixed(
      1
    )}, y: ${node.y.toFixed(
      1
    )}) | Distance from source: <span class="text-yellow-400">${distance}</span>`;
    container.appendChild(item);
  });
}
function updateResultTable() {
  const tableDiv = document.getElementById("result-table");
  const pathDiv = document.getElementById("final-path");

  if (!tableDiv || !pathDiv || bestTour.length === 0) return;

  let html = `<table class="w-full text-left border border-gray-600">
    <thead class="bg-gray-800">
      <tr>
        <th class="px-2 py-1 border border-gray-600">Sr</th>
        <th class="px-2 py-1 border border-gray-600">Source</th>
        <th class="px-2 py-1 border border-gray-600">Destination</th>
        <th class="px-2 py-1 border border-gray-600">Cost</th>
      </tr>
    </thead>
    <tbody>`;

  for (let i = 0; i < bestTour.length - 1; i++) {
    const from = bestTour[i];
    const to = bestTour[i + 1];
    const cost = distanceMatrix[from][to].toFixed(2);
    html += `
      <tr>
        <td class="px-2 py-1 border border-gray-600">${i + 1}</td>
        <td class="px-2 py-1 border border-gray-600">${from}</td>
        <td class="px-2 py-1 border border-gray-600">${to}</td>
        <td class="px-2 py-1 border border-gray-600 text-yellow-400">${cost}</td>
      </tr>`;
  }

  html += `</tbody></table>`;
  tableDiv.innerHTML = html;

  // Show final path
  const pathStr = bestTour.join(" → ");
  pathDiv.innerHTML = `<strong>Best Path:</strong> <span class="text-green-400">${pathStr}</span>`;
}
export { updateNodeListUI, updateResultTable };

