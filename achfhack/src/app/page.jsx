import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div
        className="min-h-screen hero"
        style={{ backgroundImage: "url(/tfdl.jpg)" }}
      >
        <div className="hero-overlay bg-opacity-60 backdrop-blur-xs"></div>
        <div className="hero-content text-neutral-content text-center">
          <div>
            <h1 className="mb-5 text-5xl md:text-7xl font-extrabold text-ucalgaryGold uppercase">
              Explore the University of Calgary
            </h1>
            <h2 className="text-xl md:text-3xl px-4 mb-5">
              Your go-to resource for navigating campus life.
            </h2>

            <button className="btn bg-red-600 text-gray-100 border-none hover:bg-red-800 btn-wide mb-5 font-bold shadow-2xl">
              Get started now
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center my-10 text-gray-800 gap-5 mx-5">
        <h1 className="text-2xl md:text-4xl font-bold flex justify-center mt-5">
          Why Use CampusConnect?
        </h1>
      </div>
      <div className="flex w-full flex-col">
        <div className="divider mt-0 mb-5"></div>
      </div>
    </main>
  );
}
