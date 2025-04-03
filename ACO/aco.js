// aco.js - Core logic for Ant Colony Optimization Visualizer with Ant Path Animation

// Global variables
let nodes = []; // Stores positions of nodes
let pheromoneMatrix = []; // Pheromone levels between nodes
let distanceMatrix = []; // Distances between nodes
let numAnts = 10;
let alpha = 1; // pheromone importance
let beta = 2; // distance importance
let evaporation = 0.5; // pheromone evaporation rate
let Q = 100; // pheromone deposit factor
let bestTour = [];
let bestLength = Infinity;
let isRunning = false;

let antAgents = []; // for animation
let animationInterval;

// Calculate Euclidean distance
function euclidean(p1, p2) {
  let dx = p1.x - p2.x;
  let dy = p1.y - p2.y;
  return Math.sqrt(dx * dx + dy * dy);
}

// Initialize matrices
function initializeACO() {
  let n = nodes.length;
  pheromoneMatrix = Array.from({ length: n }, () => Array(n).fill(1));
  distanceMatrix = Array.from({ length: n }, (_, i) =>
    Array.from({ length: n }, (_, j) =>
      i === j ? Infinity : euclidean(nodes[i], nodes[j])
    )
  );
}

// Choose next node for an ant
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

// Start animated simulation of ants
function animateAnts() {
  antAgents = [];

  for (let a = 0; a < numAnts; a++) {
    let startNode = a % nodes.length;
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

    // draw ant head
    const head = nodes[ant.path[ant.path.length - 1]];
    ctx.beginPath();
    ctx.arc(head.x, head.y, 4, 0, 2 * Math.PI);
    ctx.fillStyle = "red";
    ctx.fill();
  }
}

// Called when Start button is clicked
function startACO() {
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
    isRunning = false;
  }, 5000);
}

function runACOIteration() {
  let allTours = [];
  let allLengths = [];

  for (let a = 0; a < numAnts; a++) {
    let startNode = a % nodes.length;
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

function clearCanvas() {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  nodes = [];
  bestTour = [];
  bestLength = Infinity;
  isRunning = false;
  clearInterval(animationInterval);
}

function addRandomNodes(count) {
  const canvas = document.getElementById("canvas");
  const rect = canvas.getBoundingClientRect();
  for (let i = 0; i < count; i++) {
    const x = Math.random() * rect.width;
    const y = Math.random() * rect.height;
    nodes.push({ x, y });
  }
  drawPoints();
}

document.getElementById("canvas").addEventListener("click", function (e) {
  if (isRunning) return;
  const rect = this.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  nodes.push({ x, y });
  drawPoints();
});

function drawPoints() {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#fff";
  for (let point of nodes) {
    ctx.beginPath();
    ctx.arc(point.x, point.y, 5, 0, 2 * Math.PI);
    ctx.fill();
  }
}
