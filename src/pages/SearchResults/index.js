import axios from "axios";
import ReactPaginate from 'react-paginate';
import { useEffect, useState } from "react";
import config from "./config";
import './index.css';

function SearchResults() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [currentImgaes, setCurrentImages] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [imagesOffset, setImgaesOffset] = useState(0);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * 8) % images.length;
    setImgaesOffset(newOffset);
  }

  useEffect(() => {
    const endOffset = imagesOffset + 8;
    setCurrentImages(images.slice(imagesOffset, endOffset));
    setPageCount(Math.ceil(images.length / 8));
  }, [images, imagesOffset]);

  useEffect(() => {
   setIsLoading(true);
    axios
      .get(
        `https://api.unsplash.com/photos/?client_id=${config}&per_page=12`
      )
      .then((res) => {
        setImages((prevState) => [...res.data]);
        setIsLoading(false);
        console.log(res.data);
        return res.data;
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);

  return (
    <div>
        <h2>Products</h2>
        <div className="App">
            {images?.map((image, i) => {
                return (
                    <div className="img-wrapper" key={i}>
                    <img src={image?.urls?.thumb} alt={image.alt_description} />
                    </div>
                );
            })}
        </div>

        <div className="pagination">
            <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={15}
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
  )
}
export default SearchResults;