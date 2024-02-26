import React, { useEffect, useState } from "react";
import "../App.scss";
import Card from "../components/Card";
import { getAllProducts } from "../service/UserServices";

const ListProducts = () => {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState(products);
  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const res = await getAllProducts();

    setProducts(res);
    setFilter(res);
  };

  const filterItem = (type) => {
    const arr = products.filter((item) => item.category === type);
    setFilter(arr);
  };

  const handleSearchText = (e) => {
    let term = e.target.value;

    if (term) {
      let item = products.filter((item) =>
        item.title.substring(0, 20).includes(term)
      );

      setFilter(item);
    } else {
      getProducts();
    }
  };
  return (
    <>
      <p className="container-top text-center bg-light py-3 fs-5">
        Home / <b className="fs-3">Products</b>
      </p>

      {products.length === 0 ? (
        <div className="d-flex justify-content-center align-items-center vh-100 fs-1">
          <i className="fas fa-spinner fa-pulse"></i>
        </div>
      ) : (
        <div className="container">
          <div className="row d-lg-flex justify-content-between">
            <div className="col-lg-2 col-12 wrap-navstore  ">
              <h3 className="mb-0 text-2xl font-semibold">Filter By</h3>
              <div className="wrap-filter-categories">
                <p className="nav-title">Categories</p>
                <div className="filter-categories d-flex flex-wrap gap-15 custom-scroll">
                  <div className="d-flex align-items-center gap-1">
                    <input
                      type="checkbox"
                      id="64d47d1b30e061ed137c28d0"
                      name="Smart Watch"
                      value="Smart Watch"
                    />
                    <label className="text-lable" for="Smart Watch">
                      men's clothing
                    </label>
                  </div>
                  <div className="d-flex align-items-center gap-1">
                    <input
                      type="checkbox"
                      id="64d47d2530e061ed137c28d2"
                      name="jewelery"
                      value="jewelery"
                    />
                    <label className="text-lable" for="Speaker">
                      jewelery
                    </label>
                  </div>
                  <div className="d-flex align-items-center gap-1">
                    <input
                      type="checkbox"
                      id="64d47d2b30e061ed137c28d4"
                      name="electronics"
                      value="electronics"
                    />
                    <label className="text-lable" for="Laptop">
                      electronics
                    </label>
                  </div>
                  <div className="d-flex align-items-center gap-1">
                    <input
                      type="checkbox"
                      id="64d5c1e146abee9973211eff"
                      name="women's clothing"
                      value="women's clothing"
                    />
                    <label className="text-lable" for="Head Phone">
                      women's clothing
                    </label>
                  </div>
                </div>
              </div>
              <div className="wrap-filter-properties">
                <p className="nav-title">Availability</p>
                <div className="filter-available d-lg-block d-flex gap-lg-0 gap-30">
                  <div className="d-flex align-items-center gap-1 mb-1">
                    <input type="checkbox" id="In" name="In" value="13" />
                    <label className="text-lable" for="In">
                      In stock (13)
                    </label>
                  </div>
                  <div className="d-flex align-items-center gap-1 mb-1">
                    <input type="checkbox" id="Out" name="Out" value="0" />
                    <label className="text-lable" for="Out">
                      Out of stock (0)
                    </label>
                  </div>
                </div>
                <div className="filter-price">
                  <p className="nav-title">Price</p>
                  <div className="d-flex gap-10 flex-wrap">
                    <div className="input-price d-flex align-items-center gap-1">
                      <label for="price-from" className="lb-dolar">
                        $
                      </label>
                      <input
                        type="number"
                        placeholder="From"
                        name="price-from"
                        value=""
                      />
                    </div>
                    <div className="input-price d-flex align-items-center gap-1">
                      <label for="price-to" className="lb-dolar">
                        $
                      </label>
                      <input
                        type="number"
                        placeholder="To"
                        name="price-to"
                        value=""
                      />
                    </div>
                  </div>
                </div>
                <div className="wrap-filter-color">
                  <p className="nav-title">Color</p>
                  <div className="filter-color d-flex gap-15 flex-wrap custom-scroll">
                    <div
                      className="item-color "
                      style={{ backgroundColor: "green" }}
                    ></div>
                    <div
                      className="item-color "
                      style={{ backgroundColor: "red" }}
                    ></div>
                    <div
                      className="item-color "
                      style={{ backgroundColor: "yellow" }}
                    ></div>
                  </div>
                </div>
                <div className="filter-size">
                  <p className="nav-title">Size</p>
                  <div className="d-lg-block d-flex gap-lg-0 gap-30 flex-wrap">
                    <div className="d-flex align-items-center gap-1 mb-1">
                      <input type="checkbox" id="L" name="L" value="2145" />
                      <label
                        for="L"
                        className="d-flex align-content-center gap-1  text-lable"
                      >
                        <p className="fw-medium">L</p>(2145)
                      </label>
                    </div>
                    <div className="d-flex align-items-center gap-1 mb-1">
                      <input type="checkbox" id="XXL" name="XXL" value="780" />
                      <label
                        for="XXL"
                        className="d-flex align-content-center gap-1  text-lable"
                      >
                        <p className="fw-medium">XXL</p>(780)
                      </label>
                    </div>
                    <div className="d-flex align-items-center gap-1 mb-1">
                      <input type="checkbox" id="M" name="M" value="1365" />
                      <label
                        for="M"
                        className="d-flex align-content-center gap-1  text-lable"
                      >
                        <p className="fw-medium">M</p>(1365)
                      </label>
                    </div>
                    <div className="d-flex align-items-center gap-1 mb-1">
                      <input type="checkbox" id="S" name="S" value="650" />
                      <label
                        for="S"
                        className="d-flex align-content-center gap-1  text-lable"
                      >
                        <p className="fw-medium">S</p>(650)
                      </label>
                    </div>
                    <div className="d-flex align-items-center gap-1 mb-1">
                      <input type="checkbox" id="XL" name="XL" value="1495" />
                      <label
                        for="XL"
                        className="d-flex align-content-center gap-1  text-lable"
                      >
                        <p className="fw-medium">XL</p>(1495)
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-10 col-12">
              <div class="products-filter d-sm-flex ">
                <div class="d-flex me-4 mb-sm-0  align-items-center">
                  <p class="mt-1 me-4">Sort By:</p>
                  <div class="sort-by">
                    <div class="dropdown">
                      <button
                        class="dropdown-toggle btn-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Alphabetically, A-Z
                      </button>
                      <ul class="dropdown-menu sort-by-menu">
                        <li>
                          <a class="sort-by-item" href="/our-store">
                            Alphabetically, A-Z
                          </a>
                        </li>
                        <li>
                          <a class="sort-by-item" href="/our-store">
                            Alphabetically, Z-A
                          </a>
                        </li>
                        <li>
                          <a class="sort-by-item" href="/our-store">
                            Price, low to high
                          </a>
                        </li>
                        <li>
                          <a class="sort-by-item" href="/our-store">
                            Price, high to low
                          </a>
                        </li>
                        <li>
                          <a class="sort-by-item" href="/our-store">
                            Date, old to new
                          </a>
                        </li>
                        <li>
                          <a class="sort-by-item" href="/our-store">
                            Date, new to old
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="input-group search-filter my-xl-0 my-3">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Search product here..."
                    aria-label="Recipient's username"
                    aria-describedby="button-addon2"
                    value=""
                  />
                  <button
                    class="btn btn-outline-secondary d-flex justify-content-center align-items-center px-2"
                    type="button"
                    id="button-addon2"
                    disabled=""
                  >
                    <span class="material-symbols-outlined fs-5">search</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ListProducts;

{
  /* <div className="container products-container">
          <div className="d-sm-flex justify-content-between align-items-center p-sm-4">
            <h3>Welcom to my shop</h3>
            <input
              onChange={(e) => handleSearchText(e)}
              placeholder="Search your item....."
              className="col-12 col-sm-4"
            />
          </div>
          <h4 className="text-center mt-3">Filter Category</h4>
          <div className="text-center mt-4 ">
            <button
              className="btn btn-outline-dark mx-1"
              onClick={() => getProducts()}
            >
              All products
            </button>
            <button
              className="btn btn-outline-dark mx-1"
              onClick={() => filterItem("men's clothing")}
            >
              Men's clothing
            </button>
            <button
              className="btn btn-outline-dark mx-1"
              onClick={() => filterItem("jewelery")}
            >
              jewelery
            </button>
            <button
              className="btn btn-outline-dark mx-1"
              onClick={() => filterItem("electronics")}
            >
              electronics
            </button>
            <button
              className="btn btn-outline-dark mx-1"
              onClick={() => filterItem("women's clothing")}
            >
              Woman's clothing
            </button>
          </div>
          <div className="row g-4 mt-4">
            {filter &&
              filter.map((product) => {
                return (
                  <Card
                    key={product.id}
                    image={product.image}
                    title={product.title}
                    price={product.price}
                    rate={product.rating.rate}
                    id={product.id}
                  />
                );
              })}
          </div>
        </div> */
}
