import React from "react";
import { Link } from "react-router-dom";

const Card = ({ image, title, price, rate, id }) => {
  return (
    <>
      <div class="wrap-product-cart col-lg-3 col-md-4 col-6">
        <Link to={`/products/${id}`} className="d-block link">
          <div class="product-card position-relative">
            <div class="row">
              <div class="product-image">
                <div class="wrap-img">
                  <img src={image} className="img-fluid " />
                </div>
              </div>
              <div class="product-details mt-3">
                <h5 class="product-title">{title.substring(0, 20)}</h5>
                <div class="react-stars-wrapper-045756917956045307">
                  <div>
                    <span
                      style={{ color: "yellow" }}
                      class=""
                      data-index="0"
                      data-forhalf="★"
                    >
                      ★
                    </span>
                    &nbsp;
                    <span className="star-rate fw-bold">{rate}</span>
                  </div>
                </div>
                <div class="d-flex gap-2 align-items-center">
                  <p class="product-price">{price} ₫</p>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Card;

{
  /* <div className="card col-6 col-sm-4 col-md-3">
      <div className="product-img">
        <img src={image} className="product-img" />
      </div>
      <div className="card-body">
        <p className="product-title text-center">
          <b>{title.substring(0, 30)}</b>
        </p>
        <p className="card-text">
          <span>{price} ₫</span>
          &nbsp;&nbsp;
          <span>
            {rate} <i className="fa-solid fa-star"></i>
          </span>
        </p>
        <div className="d-flex justify-content-center">
          &nbsp;
          <Link to={`/products/₫{id}`} className="btn btn-outline-dark">
            Buy now
          </Link>
        </div>
      </div>
    </div> */
}
