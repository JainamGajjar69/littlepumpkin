"use client";

const Page = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-white-100">
      <div className="bg-white p-8 border border-gray-300 rounded-md shadow-lg text-gray-900 max-w-3xl w-full">
        <img
          src="LLP1.jpg"
          alt="The members of the team and the company"
          className="w-full h-auto rounded-md mb-6"
        />
        <h1 className="text-3xl font-bold tracking-tight mb-4">Welcome to LilPumpkins!</h1>
        <p className="text-lg leading-relaxed mb-4">
          Founded in 2024, LilPumpkins is dedicated to delivering innovative clothing that empowers individuals and businesses. Our mission is to inspire confidence and self-expression through fashion, guided by our core values of customer centricity, innovation, integrity, collaboration, and excellence.
        </p>
        <p className="text-lg leading-relaxed">
          Join us on our journey to create exceptional value and drive success for our clients.
        </p>
      </div>
    </div>
  );
};

export default Page;