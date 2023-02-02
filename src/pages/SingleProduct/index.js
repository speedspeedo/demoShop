// http://192.168.125.74:8000/api/item-detail/?num_iid=650543599436&district=taobao
import { width } from "@mui/system";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { SERVER_IP } from "../../config";

let imgId, district;
function SingleProduct() {
  const [isLoading, setIsLoading] = useState(false);

  const [results, setResults] = useState({});
  const [propImgs, setPropImgs] = useState([]);
  const [propsList, setPropsList] = useState([]);
  const [skuImgs, setSkuImgs] = useState([]);

  let [searchParams] = useSearchParams();

  useEffect(() => {
    setIsLoading(true);
    for (const entry of searchParams.entries()) {
      const [param, value] = entry;
      if (param == "id") imgId = value;
      if (param == "district") district = value;
    }
    async function fetchData() {
      const mainImgPath = `${SERVER_IP}/api/item-detail?num_iid=${imgId}&district=${district}`;
      try {
        const tempResults = await axios.get(mainImgPath);
        const propImgsPath = Object.values(tempResults.data.json.props_img);
        console.log(tempResults.data.json);
        // propImgs
        setPropImgs(
          propImgsPath.map((val) => {
            return (
              // <article class="itemside mb-3">
              //   <a href="#" class="aside">
              //     <img
              //       src={`${val}`}
              //       width="200"
              //       height="200"
              //       class="img-thumbnail"
              //     />
              //   </a>
              //   <div class="info">
              //     <a href="#" class="title mb-1">
              //       {" "}
              //       T-shirts with multiple colors, for men and lady{" "}
              //     </a>
              //     <strong class="price"> $120.00</strong>
              //   </div>
              // </article>
              <img
                class="mx-3 mb-2"
                src={`${val}`}
                width="150px"
                height= "150px"
                style={{ display: "inline-block" }}
              />
            );
          })
        );
        // props_list
        const lists = Object.values(tempResults.data.json.props_list);
        setPropsList(
          lists.map((val) => {
            return (
              <button class="btn btn-outline-primary d-block mb-2">
                {val}
              </button>
            );
          })
        );
        // console.log(lists);

        const skuArray = Object.values(tempResults.data.json.skus);
        console.log(skuArray[0]);
        setSkuImgs(
          skuArray[0].map((val) => {
            return (
              <article class="itemside mb-3">
                <a href="#" class="aside">
                  <img
                    src="assets/images/items/8.webp"
                    width="96"
                    height="96"
                    class="img-md img-thumbnail"
                  />
                </a>
                <div class="info">
                  <a class="title mb-1">
                    {" "}
                    <strong class="price"> Price : ¥{val.price}</strong> <br />
                    Name : {val.properties_name} <br />
                    Quantity : {val.quantity}{" "}
                  </a>
                </div>
              </article>
            );
          })
        );
        setResults(tempResults.data.json);
      } catch (error) {
        throw error;
      }
      setIsLoading(false);
    }

    fetchData();
  }, []);

  // console.log(results.desc_img[0]);

  return (
    // <div>213</div>
    <div className="home-section">
      {/* <section class="bg-primary padding-y-sm">
          <div class="container">
            <ol class="breadcrumb ondark mb-0">
              <li class="breadcrumb-item">
                <a href="#">Home</a>
              </li>
              <li class="breadcrumb-item">
                <a href="#">Library</a>
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                Data
              </li>
            </ol>
          </div>
        </section> */}

      <section class="padding-y">
        <div class="container">
          <div class="row">
            <aside class="col-lg-6">
              <article class="gallery-wrap">
                <div class="img-big-wrap img-thumbnail">
                  <a
                    data-fslightbox="mygalley"
                    data-type="image"
                    href="assets/images/items/10.webp"
                  >
                    <img height="560" src={`${SERVER_IP}${results.pic_url}`} />
                  </a>
                </div>
              </article>
              <div class="">
                <div
                  id="carouselExampleControls"
                  class="carousel slide"
                  data-ride="carousel"
                >
                  <div class="">
                    <div class="carousel-inner">
                      <div class="carousel-item active">
                        <img
                          class="d-block"
                          width="300px"
                          height="300px"
                          src={`http://192.168.125.74:8000/${results?.desc_img[0]}`}
                          alt="First slide"
                        ></img>
                      </div>
                      <div class="carousel-item">
                        <img
                          class="d-block"
                          width="300px"
                          height="300px"
                          src={`http://192.168.125.74:8000/${results?.desc_img[1]}`}
                          alt="Second slide"
                        ></img>
                      </div>
                      <div class="carousel-item">
                        <img
                          class="d-block"
                          width="300px"
                          height="300px"
                          src={`http://192.168.125.74:8000/${results?.desc_img[2]}`}
                          alt="Third slide"
                        ></img>
                      </div>
                      <div class="carousel-item">
                        <img
                          class="d-block"
                          width="300px"
                          height="300px"
                          src={`http://192.168.125.74:8000/${results?.desc_img[3]}`}
                          alt="Third slide"
                        ></img>
                      </div>
                      <div class="carousel-item">
                        <img
                          class="d-block w-30"
                          width="300px"
                          height="300px"
                          src={`http://192.168.125.74:8000/${results?.desc_img[4]}`}
                          alt="Third slide"
                        ></img>
                      </div>
                    </div>

                    <a
                      class="carousel-control-prev"
                      href="#carouselExampleControls"
                      role="button"
                      data-slide="prev"
                    >
                      <span
                        class="carousel-control-prev-icon"
                        aria-hidden="true"
                      ></span>
                      <span class="sr-only">Previous</span>
                    </a>
                    <a
                      class="carousel-control-next"
                      href="#carouselExampleControls"
                      role="button"
                      data-slide="next"
                    >
                      <span
                        class="carousel-control-next-icon"
                        aria-hidden="true"
                      ></span>
                      <span class="sr-only">Next</span>
                    </a>
                  </div>
                </div>
              </div>
            </aside>
            <main class="col-lg-6">
              <article class="ps-lg-3">
                <h2 class="title text-dark">{results?.title} </h2>
                <div class="rating-wrap my-3">
                  <ul class="rating-stars">
                    <li style={{ width: "80%" }} class="stars-active">
                      {" "}
                      <img
                        src="assets/images/misc/stars-active.svg"
                        alt=""
                      />{" "}
                    </li>
                    <li>
                      {" "}
                      <img
                        src="assets/images/misc/starts-disable.svg"
                        alt=""
                      />{" "}
                    </li>
                  </ul>
                  <b class="label-rating text-warning">
                    {" "}
                    {results?.seller_info?.item_score}
                  </b>
                  <i class="dot"></i>
                  <span class="label-rating text-muted">
                    {" "}
                    <i class="fa fa-shopping-basket"></i> Sales {results?.sales}{" "}
                  </span>
                  {/* <i class="dot"></i>
                  <span class="label-rating text-success">In stock</span> */}
                </div>

                <div class="mb-3">
                  <var class="price h5">¥{results?.price}.00</var>
                  <span class="text-muted">/per box</span>
                </div>

                <div class="row">
                  <div class="col-3">
                    <h3>硬盘容量</h3>
                  </div>
                  <div class="col-9">{propsList}</div>
                </div>

                <dl class="row">
                  <dt class="col-5">Type:</dt>
                  <dd class="col-7">Regular</dd>

                  <dt class="col-5">Color</dt>
                  <dd class="col-7">Brown</dd>

                  <dt class="col-5">Brand</dt>
                  <dd class="col-7">{results?.brand} </dd>
                </dl>

                <hr />

                <div class="row mb-4">
                  <div class="col-md-4 col-6 mb-2">
                    <label class="form-label">Size</label>
                    <select class="form-select">
                      <option>Small</option>
                      <option>Medium</option>
                      <option>Large</option>
                    </select>
                  </div>
                  <div class="col-md-4 col-6 mb-3">
                    <label class="form-label d-block">Quantity</label>
                    <div class="input-group input-spinner">
                      <button class="btn btn-icon btn-light" type="button">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="22"
                          height="22"
                          fill="#999"
                          viewBox="0 0 24 24"
                        >
                          <path d="M19 13H5v-2h14v2z"></path>
                        </svg>
                      </button>
                      <input
                        class="form-control text-center"
                        placeholder=""
                        value="14"
                      />
                      <button class="btn btn-icon btn-light" type="button">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="22"
                          height="22"
                          fill="#999"
                          viewBox="0 0 24 24"
                        >
                          <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>

                <a href="#" class="btn  btn-warning">
                  {" "}
                  Buy now{" "}
                </a>
                <a href="#" class="btn  btn-primary">
                  {" "}
                  <i class="me-1 fa fa-shopping-basket"></i> Add to cart{" "}
                </a>
                <a href="#" class="btn  btn-light">
                  {" "}
                  <i class="me-1 fa fa-heart"></i> Save{" "}
                </a>
              </article>
            </main>
          </div>
        </div>
      </section>

      <section class="padding-y bg-light border-top">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="card">
                <header class="card-header">
                  <ul class="nav nav-tabs card-header-tabs">
                    {/* <li class="nav-item">
                      <a
                        href="#"
                        data-bs-target="#tab_specs"
                        data-bs-toggle="tab"
                        class="nav-link active"
                      >
                        Specification
                      </a>
                    </li> */}
                    <li class="nav-item">
                      <a
                        href="#"
                        data-bs-target="#tab_warranty"
                        data-bs-toggle="tab"
                        class="nav-link"
                      >
                        Property info
                      </a>
                    </li>
                    {/* <li class="nav-item">
                      <a
                        href="#"
                        data-bs-target="#tab_shipping"
                        data-bs-toggle="tab"
                        class="nav-link"
                      >
                        Shipping info
                      </a>
                    </li> */}
                    <li class="nav-item">
                      <a
                        href="#"
                        data-bs-target="#tab_seller"
                        data-bs-toggle="tab"
                        class="nav-link"
                      >
                        Seller Information
                      </a>
                    </li>
                  </ul>
                </header>
                <div class="tab-content">
                  <article
                    id="tab_specs"
                    class="tab-pane show active card-body"
                  >
                    <p>
                      With supporting text below as a natural lead-in to
                      additional content. Lorem ipsum dolor sit amet,
                      consectetur adipisicing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua. Ut enim ad
                      minim veniam, quis nostrud exercitation ullamco laboris
                      nisi ut aliquip ex ea commodo consequat. Duis aute irure
                      dolor in reprehenderit in voluptate velit esse cillum
                      dolore eu fugiat nulla pariatur.{" "}
                    </p>
                    <ul class="list-check cols-two">
                      <li>Some great feature name here </li>
                      <li>Lorem ipsum dolor sit amet, consectetur </li>
                      <li>Duis aute irure dolor in reprehenderit </li>
                      <li>Optical heart sensor </li>
                      <li>Easy fast and ver good </li>
                      <li>Some great feature name here </li>
                      <li>Modern style and design</li>
                    </ul>
                    <table class="table border table-hover">
                      <tr>
                        <th> Display: </th>{" "}
                        <td> 13.3-inch LED-backlit display with IPS </td>
                      </tr>
                      <tr>
                        <th> Processor capacity: </th>{" "}
                        <td> 2.3GHz dual-core Intel Core i5 </td>
                      </tr>
                      <tr>
                        <th> Camera quality: </th>{" "}
                        <td>720p FaceTime HD camera </td>
                      </tr>
                      <tr>
                        <th> Memory </th> <td> 8 GB RAM or 16 GB RAM </td>
                      </tr>
                      <tr>
                        <th> Graphics </th>{" "}
                        <td> Intel Iris Plus Graphics 640 </td>
                      </tr>
                    </table>
                  </article>
                  <article id="tab_warranty" class="tab-pane card-body text-left">
                    {propImgs}
                  </article>
                  <article id="tab_shipping" class="tab-pane card-body">
                    Another tab content or sample information now <br />
                    Dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim
                    ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure
                    dolor in reprehenderit in voluptate velit esse cillum dolore
                    eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                    non proident, sunt in culpa qui officia deserunt mollit anim
                    id est laborum.
                  </article>
                  <article id="tab_seller" class="tab-pane card-body text-xl">
                    <dl class="row">
                      <dt class="col-5">Shop name</dt>
                      <dd class="col-7">{results?.seller_info?.shop_name}</dd>

                      <dt class="col-5">Link URL</dt>
                      <dd class="col-7">
                        <a herf="{results.seller_info.zhuy}">
                          {results?.seller_info?.zhuy}
                        </a>
                      </dd>

                      <dt class="col-5">Location</dt>
                      <dd class="col-7">
                        <a herf="{results?.seller_info?.zhuy}">
                          {results?.location}
                        </a>
                      </dd>

                      <dt class="col-5">Delivery Score</dt>
                      <dd class="col-7">
                        {results?.seller_info?.delivery_score}points
                      </dd>

                      <dt class="col-5">Item Score</dt>
                      <dd class="col-7">
                        {results?.seller_info?.item_score}points
                      </dd>

                      <dt class="col-5">Brand</dt>
                      <dd class="col-7">{results?.brand} </dd>
                    </dl>
                  </article>
                </div>
              </div>
            </div>
            <div class="text-left text-lg">
              <div class="card">
                <div class="card-body">
                  <h2 class="card-title">Similar items</h2>

                  {skuImgs}
                </div>
              </div>
            </div>
          </div>

          <br />
          <br />
        </div>
      </section>
    </div>
  );
}
export default SingleProduct;
