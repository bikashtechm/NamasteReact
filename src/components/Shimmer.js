const Shimmer = () => {
  return (
    <>
      <div className="search">
        <input type="text" className="searchTerm" />
        <button type="submit" className="searchButton">
          {" "}
          Search
        </button>
      </div>
      <div className="restaurant-lists">
        {Array(10).fill(
          <div className="card">
            <img src="" />
            <div className="restaurant-name"></div>
            <div className="restaurant-cuisines"></div>
            <div className="restaurant-star"></div>
          </div>
        )}
      </div>
    </>
  );
};

export default Shimmer;
