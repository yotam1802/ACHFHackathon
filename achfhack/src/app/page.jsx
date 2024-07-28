import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div
        className="min-h-screen hero object-cover overflow-hidden"
        style={{ backgroundImage: "url(/hero.jpg)" }}
      >
        <div className="hero-overlay backdrop-blur-sm bg-inherit"></div>
        <div className="hero-content text-neutral-content text-center mt-auto mb-5 lg:mb-20">
          <div>
            <h1 className="mb-5 text-5xl md:text-7xl lg:text-8xl font-extrabold uppercase text-emerald-500">
              HealthBridge
            </h1>
            <h2 className="text-xl md:text-3xl px-4 mb-5 text-emerald-500">
              Connecting youth with essential mental health resources.
            </h2>
            <button className="btn bg-emerald-500 text-gray-100 border-none hover:bg-emerald-400 btn-wide mb-5 font-bold shadow-2xl">
              Connect now
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
