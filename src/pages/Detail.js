import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getSingleProducts } from "../service/UserServices";
import { toast } from "react-toastify";
import { ProductContext } from "../context/ProductContext";
import Accordion from "react-bootstrap/Accordion";

const Detail = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [isAdded, setAdded] = useState(false);

  const navigate = useNavigate();

  const { setProducts, amount, setAmount } = useContext(ProductContext);

  const { id } = useParams();
  useEffect(() => {
    getData(id);
  }, [id]);
  const getData = async (id) => {
    const res = await getSingleProducts(id);
    setData(res);
    setLoading(false);
  };

  const handleAddToCart = () => {
    setAdded(true);
    toast.success("Add product success");
    const newPro = {
      name: data.title.substring(0, 30),
      price: data.price,
      id: data.id,
      quantity: 1,
    };

    setProducts((prev) => [...prev, newPro]);
    setAmount((prev) => prev + 1);
  };

  return (
    <>
      {loading ? (
        <div className="d-flex justify-content-center align-items-center vh-100 fs-1">
          <i className="fas fa-spinner fa-pulse"></i>
        </div>
      ) : (
        <>
          <p className="container-top text-center bg-light py-3 fs-5 mb-4">
            Home / Products / &nbsp;
            <b className="fs-4">{data.title.substring(0, 30)}</b>
          </p>
          <div className="container">
            <div className="row main-detail">
              <div className="col-sm-5 col-xs-12 d-flex main-img">
                <img src={data.image} className="detail-img" />
              </div>
              <div className="col-sm-7 col-xs-12 d-flex justify-content-center flex-column p-4">
                <h3>{data.title}</h3>
                <h5 className="my-4">
                  <b>Prices: </b>
                  {data.price} $
                </h5>
                {data && data.rating && data.rating.rate && (
                  <p>
                    <b>Ratings:</b> {data.rating.rate}{" "}
                    <i
                      className="fa-solid fa-star"
                      style={{ color: "yellow" }}
                    ></i>
                  </p>
                )}

                <p className="product-desc my-3">{data.description} </p>
                {data && data.rating && data.rating.count && (
                  <p>
                    Số lượng: <b>{data.rating.count} </b>sản phẩm
                  </p>
                )}
                <button
                  className={
                    isAdded
                      ? "btn btn-dark btn-detail"
                      : "btn-detail btn btn-outline-dark"
                  }
                  disabled={isAdded ? true : false}
                  onClick={handleAddToCart}
                >
                  {isAdded ? "Added" : "Add to cart"}
                </button>
              </div>
            </div>
            <div className="back-home">
              <Link to={"/products"}>
                <i className="fa-solid fa-angles-left"></i>&nbsp; Continue
                shopping&nbsp;&nbsp;
              </Link>
              <Link to={"/checkout"}>
                &nbsp;Check Cart&nbsp;{" "}
                <i className="fa-solid fa-angles-right"></i>
              </Link>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Detail;
