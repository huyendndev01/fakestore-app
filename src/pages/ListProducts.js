import _ from "lodash";
import _debounce from "lodash/debounce";
import React, { useEffect, useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import "../App.scss";
import Card from "../components/Card";
import { getAllProducts } from "../service/UserServices";
const ListProducts = () => {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState([]);

  const [sortBy, setSortBy] = useState("asc");
  const [sortField, setSortField] = useState("price");

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const res = await getAllProducts();

    setProducts(res);
    setFilter(res);
  };

  const handleSearchText = _debounce(
    (e) => {
      let term = e.target.value;

      if (term) {
        let item = products.filter((item) =>
          item.title.substring(0, 20).includes(term)
        );

        setFilter(item);
      }
      else {
        getProducts();
      }
    },
    [300]
  );
  const handleInputForm = (value) => {
    const arr = products.filter((el) => el.category === value);

    setFilter(arr);
  };

  const handleSort = (sortBy, sortField) => {
    setSortBy(sortBy);
    setSortField(sortField);

    let cloneListUser = _.cloneDeep(products);
    cloneListUser = _.orderBy(cloneListUser, [sortField], [sortBy]);
    setFilter(cloneListUser);
  };

  const handleFilterPrice = (min, max) => {
    let cloneListUser = _.cloneDeep(products);
    cloneListUser = cloneListUser.filter(item => item.price >= min && item.price <=max)

    setFilter(cloneListUser);
  }

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
          <div className="row d-md-flex justify-content-between align-items-start">
            <div className="col-md-2 col-12 wrap-navstore  ">
              <h3 className="mb-0 text-2xl font-semibold">Filter By</h3>
              <div className="wrap-filter-categories">
                <p className="nav-title">Categories</p>
                <div className="filter-categories d-flex flex-wrap gap-15 custom-scroll">
                  <div className="d-flex align-items-center gap-1">
                    <input
                      type="radio"
                      name="filter"
                      onChange={() => getProducts()}
                    />
                    <label className="text-lable">All Products</label>
                  </div>
                  <div className="d-flex align-items-center gap-1">
                    <input
                      type="radio"
                      name="filter"
                      value="men's clothing"
                      onChange={(e) => handleInputForm(e.target.value)}
                    />
                    <label className="text-lable">Men's Products</label>
                  </div>
                  <div className="d-flex align-items-center gap-1">
                    <input
                      type="radio"
                      name="filter"
                      value="jewelery"
                      onChange={(e) => handleInputForm(e.target.value)}
                    />
                    <label className="text-lable">Jewelery</label>
                  </div>
                  <div className="d-flex align-items-center gap-1">
                    <input
                      type="radio"
                      name="filter"
                      value="electronics"
                      onChange={(e) => handleInputForm(e.target.value)}
                    />
                    <label className="text-lable">Electronics</label>
                  </div>
                  <div className="d-flex align-items-center gap-1">
                    <input
                      type="radio"
                      name="filter"
                      value="women's clothing"
                      onChange={(e) => handleInputForm(e.target.value)}
                    />
                    <label className="text-lable">Women's clothing</label>
                  </div>
                </div>
              </div>
              <div className="wrap-filter-properties d-none d-md-block">
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
                  <div>
                    <input type="radio" name="price" onClick={() => handleFilterPrice(0, 50)}/>
                    <label className="pl-1">0 - 50 đ</label>
                  </div>
                  <div>
                    <input type="radio" name="price" onClick={() => handleFilterPrice(50, 100)}/>
                    <label className="pl-1">50 - 100 đ</label>
                  </div>
                  <div>
                    <input type="radio" name="price" onClick={() => handleFilterPrice(100, 150)}/>
                    <label className="pl-1">100 - 150 đ</label>
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
            <div className="col-md-10 col-12">
              <div className="products-filter d-sm-flex ">
                <div className="d-flex me-4 mb-sm-0  align-items-center">
                  <p className="mt-1 me-4">Sort By:</p>
                  <div className="sort-by">
                    <Dropdown>
                      <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                        Sort by: {sortField}
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item
                          onClick={() => handleSort("asc", "title")}
                        >
                          Title, A-Z
                        </Dropdown.Item>
                        <Dropdown.Item
                          onClick={() => handleSort("desc", "title")}
                        >
                          Title, Z - A
                        </Dropdown.Item>
                        <Dropdown.Item
                          onClick={() => handleSort("desc", "price")}
                        >
                          Price, high to low
                        </Dropdown.Item>
                        <Dropdown.Item
                          onClick={() => handleSort("asc", "price")}
                        >
                          Price, low to high
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </div>
                <div className="input-group search-filter my-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search product here..."
                    aria-label="Recipient's username"
                    aria-describedby="button-addon2"
                    onChange={(e) => handleSearchText(e)}
                  />
                  <button
                    className="btn btn-outline-secondary d-flex justify-content-center align-items-center px-2"
                    type="button"
                    id="button-addon2"
                    disabled=""
                  >
                    <span className="material-symbols-outlined fs-5">
                      <i className="fas fa-search"></i>
                    </span>
                  </button>
                </div>
              </div>
              <div className="row">
                {filter?.map((product) => {
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
            
          </div>
        </div> */
}
