import React, { useEffect, useState } from "react";
import bg from "./assets/bg.jpg";
import Loading from "./component/Loading";
import { fetchMovies } from "./api";
import Card from "./component/Card";
import Pagenation from "./component/Pagenation";
import SearchBar from "./component/SearchBar";
const App = () => {
  const [loading, setloading] = useState(false);
  const [data, setdata] = useState([]);
  const [currentPage, setcurrentPage] = useState(0);
  const [totalpage, settotalpage] = useState();
  const [totalResult, settotalResult] = useState();
  const [searchFilter, setsearchFilter] = useState(null);

  const fetchData = (page, query) => {
    setloading(true);
    fetchMovies(page, query)
      .then((data) => {
        console.log(data);
        setdata(data.results);
        setcurrentPage(data.page);
        settotalpage(data.total_pages);
        settotalResult(data.total_results);

        if (query) {
          setsearchFilter(query);
        } else {
          setsearchFilter(null);
        }
        setloading(false);
      })
      .catch((error) => {
        console.log(error);

        setloading(false);
      });
  };
  const handlePagination = (page) => {
    fetchData(page);
  };
  const handleSearch = (query) => {
    fetchData(1, query);
  };

  useEffect(() => {
    fetchData(currentPage + 1);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [data]);

  return (
    <div
      className="min-h-screen bg-no-repeat bg-center bg-cover p-5 flex flex-col gap-7 relative"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <header className="text-center  space-y-5">
        <h1 className="text-gray-50 font-bold text-3xl sm:text-6xl tracking-wide font-sans">
          Global Movies
        </h1>
        <SearchBar
          handleSearch={handleSearch}
          query={searchFilter}
          totalResult={totalResult}
        />
      </header>
      <main className="flex-1 flex items-center justify-between flex-col">
        {loading && (
          <div className="sticky top-1/2 left-1/2 z-50 -translate-x-1/2 -translate-y-1/2 bg-black px-3 py-2 rounded bg-opacity-50">
            <Loading />
          </div>
        )}
        {totalResult == 0 && (
          <div className="sticky top-1/2 left-1/2 z-50 -translate-x-1/2 -translate-y-1/2  px-3 py-2 text-gray-200 text-5xl font-semibold">
            No Movie Found !
          </div>
        )}
        <div className="grid gap-2  grid-cols-1 xsm:grid-cols-2  xlg:grid-cols-4 xl:grid-cols-5">
          {data.map((item) => (
            <Card
              key={item.id}
              overview={item.overview}
              image={item.poster_path}
              title={item.title}
              rating={item.vote_average}
              year={item.release_date}
            />
          ))}
        </div>
        <Pagenation
          hasPrev={currentPage - 1 > 0}
          hasNext={currentPage + 1 <= totalpage}
          currentpage={currentPage}
          handlePagination={handlePagination}
          totalPage={totalpage}
        />
      </main>
    </div>
  );
};

export default App;
