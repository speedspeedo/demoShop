import axios from "axios";
import ReactPaginate from "react-paginate";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useSearchParams } from "react-router-dom";
import { SERVER_IP, PER_PAGE } from "../../config";
import "./index.css";

function SearchResults() {
  const [total, setTotal] = useState(0);
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [currentImgaes, setCurrentImages] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [imagesOffset, setImgaesOffset] = useState(0);
  const [pageId, setPageId] = useState(1);
  const { id } = useParams();

  const isOnline = id === "online";

  const keyword = useSelector((state) =>
    isOnline ? state.onlineSearch.keyword : state.offlineSearch.keyword
  );
  const district = useSelector((state) =>
    isOnline ? state.onlineSearch.district : state.offlineSearch.district
  );
  // const district = useSelector(state => state.onlineSearch.district)
  const api_key = useSelector((state) => state.onlineSearch.api_key);
  const secret = useSelector((state) => state.onlineSearch.secret);

  let [searchParams, setSearchParams] = useSearchParams();
  const handlePageClick = (event) => {
    const pageId = event.selected;
    const newOffset = (pageId * PER_PAGE) % total;
    setPageId(pageId + 1);
    setImgaesOffset(newOffset);
  };

  useEffect(() => {
    const endOffset = imagesOffset + PER_PAGE;
    setCurrentImages(images.slice(imagesOffset, endOffset));
    setPageCount(Math.ceil(total / PER_PAGE));
  }, [images, imagesOffset]);

  useEffect(() => {
    setSearchParams({
      search_keyword: keyword,
      district: district,
      page_num: pageId,
      per_page: PER_PAGE,
    });
    async function fetchData() {
      setIsLoading(true);
      const path =
        id == "online"
          ? `${SERVER_IP}api/online-items/?api_key=${api_key}&secret=${secret}&search_keyword=${keyword}&district=${district}&page_num=${pageId}&per_page=${PER_PAGE}`
          : `${SERVER_IP}api/offline-items/?search_keyword=${keyword}&district=${district}&page_num=${pageId}&per_page=${PER_PAGE}`;
      try {
        const results = await axios.get(path);
        console.log(results);
        setImages(results.data.data);
        setTotal(results.data.total);
      } catch (e) {
        throw e;
      }
      setIsLoading(false);
    }
    fetchData();
  }, [pageId]);

  let products;
  if (images.length > 0) {
    products = images.map((image, idx) => {
      return (
        <div
          className="img-wrapper"
          key={idx}
          // style={{ border: "1px solid rgba(0, 0, 0, 0.5)" }}
        >
          <div class="content-between">
            {/* <!-- Modal toggle --> */}
            <button link="#">
              <div>
                <img
                  src={`${SERVER_IP}${image.Image}`}
                  alt={image.alt_description}
                  link
                />
                <h6 class="border border-b-2 border-pink-400">
                  {image.Title}
                </h6>
              </div>
              <div>{image.Price}</div>
            </button>
          </div>
        </div>
      );
    });
  } else {
    products = <div>No Products</div>;
  }
  return (
    <div>
      <h2>Products</h2>
      <div className="SearchPanel">{products}</div>

      <div className="pagination">
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
          breakClassName={"page-item"}
          breakLinkClassName={"page-link"}
          containerClassName={"pagination"}
          pageClassName={"page-item"}
          pageLinkClassName={"page-link"}
          previousClassName={"page-item"}
          previousLinkClassName={"page-link"}
          nextClassName={"page-item"}
          nextLinkClassName={"page-link"}
          activeClassName={"active"}
        />
      </div>
    </div>
  );
}
export default SearchResults;
