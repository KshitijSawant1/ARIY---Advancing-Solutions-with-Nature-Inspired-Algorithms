import React from "react";
import { MathJaxContext, MathJax } from "better-react-mathjax";
import KS from "../assets/KS.png";
import arilogo from "../assets/arilogo.png";
const Hero = () => {
  return (
    <>
      <section className="relative bg-white dark:bg-gray-900">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-black z-0"></div>

        {/* Content */}
        <div className="relative z-10 py-12 px-4 mx-auto max-w-screen-xl text-center lg:py-20 flex flex-col items-center justify-center">
          <h1
            className="whitespace-nowrap overflow-hidden text-ellipsis bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 bg-clip-text text-transparent 
             text-[60px] sm:text-[20px] md:text-[100px] lg:text-[120px] font-extrabold text-center"
          >
            🐜 ARIY 🐜
          </h1>

          {/* Tagline */}
          <span className="border border-red-500 mt-4  text-white text-sm sm:text-base font-medium px-3 py-1 rounded-sm dark:bg-red-900 ">
            Advancing Solutions with Nature-Inspired Algorithms
          </span>
        </div>
      </section>

      <section className="overflow-hidden bg-black flex flex-col items-center text-center lg:flex-row lg:justify-between px-4 py-16">
        {/* Text Content */}
        <div className="max-w-xl lg:w-1/2">
          <h2 className="text-2xl font-bold text-white">
            Visualize the Power of Ant Colony Optimization
          </h2>
          <p className="mt-4 text-white">
            Explore how simple ant behavior inspires intelligent algorithms to
            solve complex problems like the Travelling Salesman Problem. ARIY
            offers an interactive way to learn and experiment with
            nature-inspired solutions.
          </p>
          <div className="mt-8">
            <button
              onClick={() => navigate("/visualizer")}
              className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-white rounded-lg group bg-gradient-to-br from-red-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800"
            >
              <span className="relative px-5 py-2.5 bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                Explore the Mechanism
              </span>
            </button>
          </div>
        </div>

        {/* Image with Blur Glow */}
        <div className="relative mt-12 lg:mt-0 lg:w-1/2 flex justify-center items-center overflow-visible">
          {/* Blur Background */}
          <div className="absolute w-[540px] h-[540px] rounded-full bg-red-500 blur-[120px] opacity-50"></div>

          {/* Ant Image */}
          <img
            className="relative rounded-full w-[500px] h-[500px] object-cover shadow-xl z-10"
            src="https://images.unsplash.com/photo-1637257077179-69f65f0f8697?q=80&w=2274&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Ant Image"
          />
        </div>
      </section>

      <section className="relative z-10 bg-black">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
          <div className="bg-gray-900 border border-white rounded-lg p-8 md:p-12 mb-8">
            <h2
              id="problem-statement"
              className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl"
            >
              <mark className="px-4 text-white bg-orange-600 rounded-sm">
                Problem Statement
              </mark>
            </h2>

            <p
              className="text-lg font-normal text-white mb-6 leading-relaxed"
              style={{ textAlign: "justify" }}
            >
              With the increasing complexity of optimization problems in
              logistics, AI, and networking, students and developers face
              several challenges:
            </p>

            <div className="flow-root">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y-2 divide-gray-600">
                  <thead className="ltr:text-left rtl:text-right">
                    <tr className="*:font-medium *:text-white">
                      <th className="px-3 py-2 whitespace-nowrap">Challenge</th>
                      <th className="px-3 py-2 whitespace-nowrap">
                        Description
                      </th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-gray-700 *:even:bg-[#2f3541]">
                    <tr className="*:text-white *:first:font-medium">
                      <td className="px-3 py-2 whitespace-nowrap">
                        Understanding Metaheuristic Algorithms
                      </td>
                      <td className="px-3 py-2 whitespace-nowrap">
                        Comprehending the working of nature-inspired techniques
                        like ACO is difficult.
                      </td>
                    </tr>

                    <tr className="*:text-white *:first:font-medium">
                      <td className="px-3 py-2 whitespace-nowrap">
                        Lack of Visual Learning Tools
                      </td>
                      <td className="px-3 py-2 whitespace-nowrap">
                        Most ACO implementations are purely mathematical, with
                        minimal interactivity.
                      </td>
                    </tr>

                    <tr className="*:text-white *:first:font-medium">
                      <td className="px-3 py-2 whitespace-nowrap">
                        Bridging Theory and Real-World Application
                      </td>
                      <td className="px-3 py-2 whitespace-nowrap">
                        Learners struggle to relate algorithms to practical
                        optimization problems.
                      </td>
                    </tr>

                    <tr className="*:text-white *:first:font-medium">
                      <td className="px-3 py-2 whitespace-nowrap">
                        Experimenting with Parameters in Real-Time
                      </td>
                      <td className="px-3 py-2 whitespace-nowrap">
                        Exploring how α, β, ρ, and number of ants affect results
                        is not intuitive.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <p
              className="text-lg font-normal text-white mt-6 leading-relaxed"
              style={{ textAlign: "justify" }}
            >
              <b>ARIY</b> addresses these challenges by providing an interactive
              visual simulation of the Ant Colony Optimization algorithm. It
              allows users to experiment with parameters, view ant traversal
              behavior, and understand how nature-inspired strategies solve
              complex problems.
            </p>
          </div>
          <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
              <h2 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                <mark className="px-4  text-white bg-orange-600 rounded-sm dark:bg-orange-500">
                  Vision
                </mark>
              </h2>

              <p className="text-lg font-normal text-white mb-4 text-justify">
                To foster a deeper understanding of intelligent systems by
                creating an interactive platform that visually demonstrates how
                nature-inspired algorithms like ACO can solve real-world
                optimization challenges across industries.
              </p>
            </div>
            <div className="bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
              <h2 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                <mark className="px-4  text-white bg-orange-600 rounded-sm dark:bg-orange-500">
                  Mission
                </mark>
              </h2>

              <ul className="max-w-md space-y-1 text-white list-inside  ">
                <li className="flex items-center">
                  <svg
                    className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 shrink-0"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  <b>Simplify Complex Algorithms</b>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 shrink-0"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  <b>Bridge Learning and Application</b>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 shrink-0"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  <b>Promote Nature-Inspired AI Thinking</b>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 shrink-0"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  <b>Empower Educators & Students</b>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 shrink-0"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  <b>Encourage Parameter Exploration</b>
                </li>
              </ul>
            </div>
          </div>
          <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

          <div className="bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12 mb-8">
            <h2
              id="mechanism"
              className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white"
            >
              <mark className="px-4 text-white bg-orange-600 rounded-sm dark:bg-orange-500">
                Mechanism
              </mark>
            </h2>
            <MathJaxContext>
              <div className="text-lg font-normal text-white  mb-6 leading-relaxed text-justify space-y-4">
                <p>
                  Given a bunch of points, the travelling salesman problem
                  involves finding the shortest path that visits all the points
                  exactly once. Finding or verifying a solution absolutely
                  requires a brute force search, whose time complexity scales as
                  factorial. Ant Colony Optimization (ACO) is one way to find
                  near-optimal solutions for the travelling salesman problem.
                </p>

                <p>
                  ACO involves keeping two matrices: the pheromone matrix{" "}
                  <b>P</b> such that{" "}
                  <b>
                    P<sub>ij</sub>
                  </b>{" "}
                  represents the amount of pheromone between nodes <i>i</i> and{" "}
                  <i>j</i>, and the a priori knowledge matrix <b>A</b> such that{" "}
                  <b>
                    A<sub>ij</sub>
                  </b>{" "}
                  represents the a priori knowledge of the distance between
                  nodes <i>i</i> and <i>j</i>. In this case, we set{" "}
                  <b>
                    A<sub>ij</sub> = 1 / d<sub>ij</sub>
                  </b>{" "}
                  where{" "}
                  <b>
                    d<sub>ij</sub>
                  </b>{" "}
                  is the distance between nodes <i>i</i> and <i>j</i>. The
                  pheromone matrix is initialized to 1 in the beginning.
                </p>

                <p>
                  When the{" "}
                  <i>
                    n<sup>th</sup>
                  </i>{" "}
                  ant is at the{" "}
                  <i>
                    i<sup>th</sup>
                  </i>{" "}
                  node, it can travel to any node it hasn’t visited yet. The
                  probability that it will travel to the{" "}
                  <i>
                    j<sup>th</sup>
                  </i>{" "}
                  node is given by:
                </p>

                {/* Fix 1: Wrap each MathJax block in an overflow-x-auto container */}
                <div className="overflow-x-auto">
                  <MathJax>
                    {
                      "\\[ P_{ij}^{(n)} = \\frac{P_{ij}^{\\alpha} A_{ij}^{\\beta}}{\\sum_{k \\in U_a} P_{ik}^{\\alpha} A_{ik}^{\\beta}} \\]"
                    }
                  </MathJax>
                </div>

                <p>
                  Here,{" "}
                  <b>
                    U<sub>a</sub>
                  </b>{" "}
                  is the set of nodes not yet visited by the{" "}
                  <i>
                    n<sup>th</sup>
                  </i>{" "}
                  ant, <b>α</b> is the influence of pheromones, and <b>β</b> is
                  the influence of the a priori knowledge. The intensity of the
                  line between edges is proportional to this probability.
                </p>

                <p>
                  Once a population of ants has visited all nodes exactly once,
                  the pheromone matrices are updated as follows:
                </p>

                <div className="overflow-x-auto">
                  <MathJax>
                    {
                      "\\[ P_{ij} = (1 - \\rho) P_{ij} + \\sum_{n=1}^{N} \\Delta P_{ij}^{(n)} \\]"
                    }
                  </MathJax>
                </div>

                <div className="overflow-x-auto">
                  <MathJax>
                    {
                      "\\[ \\Delta P_{ij}^{(n)} = \\begin{cases} \\frac{Q}{L_k}, & \\text{if ant moved from } i \\text{ to } j \\\\ 0, & \\text{otherwise} \\end{cases} \\]"
                    }
                  </MathJax>
                </div>

                <p>
                  Here, <b>ρ</b> is the evaporation rate, <b>Q</b> is a constant
                  that determines the amount of pheromone deposited, and{" "}
                  <b>
                    L<sub>k</sub>
                  </b>{" "}
                  is the length of the path taken by the{" "}
                  <i>
                    k<sup>th</sup>
                  </i>{" "}
                  ant. After 200 iterations, the simulation stops and the
                  shortest path is displayed.
                </p>
              </div>
            </MathJaxContext>
          </div>

          <div className="bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12 mb-8">
            <h2
              id="tweaking"
              className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white"
            >
              <mark className="px-4 text-white bg-orange-600 rounded-sm dark:bg-orange-500">
                Tweaking
              </mark>
            </h2>

            <MathJaxContext>
              <ul className="list-disc ml-5 space-y-3 text-lg text-white leading-relaxed">
                <li>
                  A lower population of ants will cause the approximated optimal
                  solution to change rapidly between iterations.
                </li>
                <li>
                  A high value of evaporation rate allows the population to
                  explore more paths, but it may not necessarily return an
                  optimal path at the end.
                </li>
                <li>
                  <MathJax inline>
                    {"\\( (\\alpha, \\beta) = (0, 1) \\)"}
                  </MathJax>{" "}
                  is equivalent to using only the a priori knowledge, giving the
                  nearest neighbor heuristic.
                </li>
                <li>
                  <MathJax inline>{"\\( \\alpha = 0 \\)"}</MathJax> and{" "}
                  <MathJax inline>{"\\( \\beta > 1 \\)"}</MathJax> leads to
                  collapse into a local minimum, but the result is usually far
                  from optimal.
                </li>
                <li>
                  <MathJax inline>{"\\( \\alpha > 0.5 \\)"}</MathJax> causes
                  ants to heavily favor shorter edges.
                </li>
                <li>
                  When points are selected randomly,{" "}
                  <MathJax inline>
                    {"\\( (\\alpha, \\beta) = (1, 1) \\)"}
                  </MathJax>{" "}
                  tends to yield the best results.
                </li>
                <li>
                  The simulation is computationally intensive and may lag on
                  lower-end devices.
                </li>
                <li>
                  You can tweak the evaporation factor, pheromone influence, and
                  a priori influence live to explore different behaviors.
                </li>
                <li>
                  Changing the number of ants mid-simulation will restart the
                  entire process.
                </li>
              </ul>
            </MathJaxContext>
          </div>

          <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
        </div>
      </section>

      <footer className="bg-gray-900 text-white">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between md:items-start md:space-x-12">
            {/* Logo and Tagline */}
            <div className="mb-6 md:mb-0">
              <div className="flex-shrink-0">
                <img src={arilogo} alt="ARI Logo" className="w-32 sm:w-40" />
                <p className="mt-3 text-sm text-gray-400 max-w-xs">
                  Advancing Solutions with Nature-Inspired Algorithms
                </p>
              </div>
            </div>

            {/* Middle Profile Card (Horizontal Layout) */}
            <div className="flex max-w-3xl bg-gray-900 border border-white rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
              {/* Image Section */}
              <div className="w-1/2">
                <img
                  className="object-cover w-60 h-60 rounded-l-lg transition-all duration-300 filter grayscale hover:grayscale-0"
                  src={KS}
                  alt="Kshitij K Sawant"
                />
              </div>

              {/* Content Section */}
              <div className="w-1/2 p-6 flex flex-col justify-center text-center">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                  Kshitij K Sawant
                </h5>
                <p className="mb-4 text-sm font-normal text-white">
                  Software Developer | AI & Data Science Visionary | Educator
                </p>

                <div className="flex flex-col gap-2">
                  <a
                    href="https://github.com/KshitijSawant1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-[#24292F] rounded-lg hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30"
                  >
                    <svg
                      className="w-4 h-4 mr-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Explore GitHub
                  </a>

                  <a
                    href="https://www.linkedin.com/in/kshitijksawant/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-[#0A66C2] rounded-lg hover:bg-[#0A66C2]/90 focus:ring-4 focus:outline-none focus:ring-[#0A66C2]/50 dark:focus:ring-[#0A66C2]/55"
                  >
                    <svg
                      className="w-4 h-4 mr-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0zM7.08 20.45H3.56V9h3.52v11.45zM5.32 7.53c-1.13 0-2.05-.92-2.05-2.05 0-1.13.92-2.05 2.05-2.05s2.05.92 2.05 2.05c0 1.13-.92 2.05-2.05 2.05zm14.62 12.92h-3.52v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7H9.88V9h3.38v1.57h.05c.47-.9 1.62-1.86 3.34-1.86 3.57 0 4.23 2.35 4.23 5.42v6.32z" />
                    </svg>
                    Connect on LinkedIn
                  </a>
                </div>
              </div>
            </div>

            {/* Tech Stack and Documentation */}
            <div className="grid grid-cols-2 gap-8 sm:gap-12 sm:grid-cols-2 md:grid-cols-2 mt-6 md:mt-0">
              {/* Tech Stack */}
              <div>
                <h2 className="mb-4 text-sm font-semibold uppercase text-white">
                  Tech Stack
                </h2>
                <ul className="text-gray-400 font-medium space-y-2">
                  <li>
                    <a href="https://react.dev/" className="hover:underline">
                      React.js
                    </a>
                  </li>
                  <li>
                    <a href="https://vitejs.dev/" className="hover:underline">
                      Vite.js
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://tailwindcss.com/"
                      className="hover:underline"
                    >
                      Tailwind CSS
                    </a>
                  </li>
                  <li>
                    <a href="https://flowbite.com/" className="hover:underline">
                      Flowbite
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.hyperui.dev/"
                      className="hover:underline"
                    >
                      Hyper UI
                    </a>
                  </li>
                </ul>
              </div>

              {/* Docs */}
              <div>
                <h2 className="mb-4 text-sm font-semibold uppercase text-white">
                  Documentation
                </h2>
                <ul className="text-gray-400 font-medium space-y-2">
                  <li>
                    <a href="#" className="hover:underline">
                      README.md
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      MIT License
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <hr className="my-6 border-gray-700" />

          {/* Social icons (optional) */}
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-gray-400 hover:text-white">
              GitHub
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Discord
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Twitter
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Hero;
