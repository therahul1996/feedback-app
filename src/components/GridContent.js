import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteFeedback } from "../redux/actions";
import close from "../img/grid-close.png";
import noDataImg from "../img/no-data.png";
import Pagination from "./pagination/Pagination";
import Loader from "./loader/Loader";
const ITEMS_PER_PAGE = 6;

const GridContent = () => {
  const [isLoading, setIsLoading] = useState(true);
  const feedbacks = useSelector((state) => state.feedbacks);
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");

  const filteredItems = feedbacks.filter((feedback) =>
    // feedback.name.toLowerCase().includes(searchQuery.toLowerCase())
    Object.values(feedback).some(
      (field) =>
        typeof field === "string" &&
        field.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );
  const handleDelete = (feedbackId) => {
    dispatch(deleteFeedback(feedbackId));
  };
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(filteredItems.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentItems = filteredItems.slice(startIndex, endIndex);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);
  return (
    <div className="mainSec">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="mainContent">
            {feedbacks.length === 0 ? (
              ""
            ) : (
              <div className="search-sec">
                <input
                  type="text"
                  placeholder="Search..."
                  className={`form-control ${
                    filteredItems.length > 0 ? "data-avail" : "data-noavail"
                  }`}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            )}
            {filteredItems.length > 0 && feedbacks.length > 0 ? (
              <div className="my-20px">
                <div className="grid-group">
                  {currentItems.map((feedback) => (
                    <div className="grid-card" key={feedback.id}>
                      <div className="mt-25px">
                        <div>
                          <h3 className="m-0">{feedback.title}</h3>
                          <h4 className="m-0">{feedback.desc}</h4>
                        </div>
                        <div className="d-flex align-items-center">
                          <div className="img-box">
                            <img
                              src={feedback.url}
                              alt={feedback.name}
                              className="user-image"
                            />
                          </div>
                          <div className="name-box">
                            <h2>{feedback.name}</h2>
                            <p>{feedback.date}</p>
                          </div>
                        </div>
                      </div>
                      <img
                        src={close}
                        className="grid-close-icon"
                        alt="close-icon"
                        onClick={() => handleDelete(feedback.id)}
                      />
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="no-data-sec">
                <img src={noDataImg} alt="no data" />
                <h3>No Data Found</h3>
              </div>
            )}
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default GridContent;
