import { useEffect } from "react";

const HomePage = () => {
  useEffect(() => {
    let res;
    async function fetchData() {
      res = fetch("http://127.0.0.1:8000/", {
        method: "GET",
      });
      console.log(await res);
    }
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = fetch("http://127.0.0.1:8000/", {
      method: "GET",
    });
    console.log(await res);
  };

  return (
    <>
      <section className="bg-ct-blue-600 min-h-screen pt-20">
        <div className="max-w-4xl mx-auto bg-ct-dark-100 rounded-md h-[20rem] flex justify-center items-center">
          <p className="text-3xl font-semibold">
            This is the typescript portion of the monorepo
          </p>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={fetchData}
          >
            Fetch
          </button>
        </div>
      </section>
    </>
  );
};

export default HomePage;
