import React from "react";
import Image from "next/image";

const ResourcesPage = () => {
  const resources = [
    {
      title: "Kids Help Phone",
      description:
        "A 24/7 national support service offering professional counseling and information.",
      image: "/resources/khphone.jpg",
      tag: "Helpline",
    },
    {
      title: "Youth Mental Health Canada",
      description:
        "An advocacy organization focused on youth mental health education, support, and empowerment.",
      image: "/resources/ymhca.png",
      tag: "Advocacy",
    },
    {
      title: "Foundry",
      description:
        "Provides health and wellness resources, services, and support for young people aged 12-24.",
      image: "/resources/foundry.webp",
      tag: "Health Services",
    },
    {
      title: "Jack.org",
      description:
        "A network of young leaders transforming the way we think about mental health.",
      image: "/resources/jack.jpg",
      tag: "Leadership",
    },
    {
      title: "Canadian Mental Health Association",
      description:
        "Offers resources and support for mental health issues across Canada.",
      image: "/resources/cmha.jpg",
      tag: "Support",
    },
    {
      title: "MindYourMind",
      description:
        "Provides resources and interactive tools to help youth manage mental health challenges.",
      image: "/resources/mym.png",
      tag: "Tools",
    },
  ];

  return (
    <div className="p-5 flex flex-col gap-5 mb-20 md:mb-10">
      <div className="p-5 bg-black rounded-xl">
        <h1 className="text-3xl font-bold text-white">Resources</h1>
      </div>
      <div className="stats stats-vertical lg:stats-horizontal shadow">
        <div className="stat">
          <div className="stat-title">Mental Disorders</div>
          <div className="stat-value">1 in 5</div>
          <div className="stat-desc">Canadian youth affected</div>
        </div>

        <div className="stat">
          <div className="stat-title">Suicide Deaths</div>
          <div className="stat-value">25%</div>
          <div className="stat-desc">Of youth deaths</div>
        </div>

        <div className="stat">
          <div className="stat-title">Access to Care</div>
          <div className="stat-value">50%</div>
          <div className="stat-desc">Receive needed help</div>
        </div>
      </div>
      <div
        role="alert"
        className="alert bg-sky-400 hover:bg-sky-300 cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 shrink-0 stroke-current"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
        <span>
          Mental health is a critical issue among Canadian youth, with 1 in 5
          experiencing mental disorders, and suicide being the cause of 25% of
          youth deaths. Despite the pressing need, only 50% of affected youth
          receive the necessary care. Below are some resources to help support
          youth mental health.
        </span>
      </div>
      <div className="mt-10 flex gap-8 flex-grow flex-wrap justify-center items-center max-md:mx-4">
        {resources.map((resource, key) => {
          return (
            <div
              key={key}
              className="card max-w-[450px] max-h-[450px] h-[450px] w-[450px] shadow-lg opacity-90 hover:shadow-2xl hover:opacity-100"
            >
              <figure className="z-20">
                <Image
                  className="w-full object-cover overflow-hidden"
                  src={resource.image}
                  alt="Image"
                  width={1000}
                  height={1000}
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{resource.title}</h2>
                <p>{resource.description}</p>
                <div className="card-actions justify-end">
                  <div className="badge badge-outline">{resource.tag}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
        <div className="flex flex-col gap-4">
          <div className="p-4 bg-gray-100 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Emergency Help</h3>
            <p>If you are in immediate danger, please call 911.</p>
          </div>
          <div className="p-4 bg-gray-100 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Kids Help Phone</h3>
            <p>Phone: 1-800-668-6868</p>
            <p>Text: CONNECT to 686868</p>
            <p>
              Website:{" "}
              <a
                href="https://kidshelpphone.ca"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                kidshelpphone.ca
              </a>
            </p>
          </div>
          <div className="p-4 bg-gray-100 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Crisis Services Canada</h3>
            <p>Phone: 1-833-456-4566</p>
            <p>Text: 45645</p>
            <p>
              Website:{" "}
              <a
                href="https://www.crisisservicescanada.ca/en/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                crisisservicescanada.ca
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourcesPage;
