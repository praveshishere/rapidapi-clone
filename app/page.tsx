export default function Home() {
  const metrics = [
    { value: "7M+", label: "Developers" },
    { value: "86K+", label: "APIs in the Hub" },
    { value: "9B+", label: "API calls per month" },
  ];

  return (
    <div className="font-sans min-h-screen max-w-5xl mx-auto flex flex-col gap-12">
      <div className="bg-gray-50 px-10 py-8 rounded-sm">
        <div className="w-1/2 flex flex-col gap-4">
          {/* <div> */}
          <h2 className="text-3xl font-bold">
            Your dream API is on the market
          </h2>
          {/* </div> */}

          {/* <div> */}
          <p className="text-sm mb-2">
            Previously known as Rapid, Nokia API Hub is more than just catalog
            for APIs, Find the perfect API using our discovery features or
            publish your own APIs and drive new API revenue streams.
          </p>
          {/* </div> */}

          <button className="inline-flex items-center justify-center font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-7 px-2 py-1 rounded text-xs w-fit bg-blue-500 text-white hover:bg-blue-500/90 hover:cursor-pointer">
            API Hub
          </button>
        </div>
      </div>

      <div className="flex justify-center flex-col items-center gap-8 px-8 py-6">
        <div className="">
          <h1 className="text-center text-4xl font-bold">
            World's largest public <br />
            API hub
          </h1>
        </div>

        <div className="flex justify-between gap-48">
          {/* Metrics */}
          {metrics.map((metric) => (
            <div className="flex flex-col gap-2" key={metric.label}>
              <span className="text-4xl font-bold leading-10 text-blue-600">
                {" "}
                {metric.value}
              </span>
              <span className="text-sm font-normal leading-tight text-gray-800">
                {" "}
                {metric.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="">
        <img
          src="/images/home_page_center_banner.png"
          alt=""
          className="h-auto w-full rounded-lg object-contain"
          decoding="async"
          loading="lazy"
          width={0}
          height={0}
        />
      </div>

      <div className="bg-gray-50 px-10 py-8 rounded-sm">
        <div className="w-1/2 flex flex-col gap-4">
          {/* <div> */}
          <h2 className="text-3xl font-bold">Get started with Nokia API hub</h2>
          {/* </div> */}

          {/* <div> */}
          <p className="text-sm mb-2">
            Previously known as Rapid, Nokia API Hub is more than just catalog
            for APIs, Find the perfect API using our discovery features or
            publish your own APIs and drive new API revenue streams.
          </p>
          {/* </div> */}

          <button className="inline-flex items-center justify-center font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-7 px-2 py-1 rounded text-xs w-fit bg-blue-500 text-white hover:bg-blue-500/90 hover:cursor-pointer">
            API Hub
          </button>
        </div>
      </div>
    </div>
  );
}
