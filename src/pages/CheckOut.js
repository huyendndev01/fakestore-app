import React, { useContext, useMemo } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { ProductContext } from "../context/ProductContext";

const CheckOut = () => {
  const { products, setProducts, setAmount } = useContext(ProductContext);

  const total = useMemo(() => {
    const result = products.reduce(
      (total, item) => total + item.quantity * item.price,
      0
    );

    return Math.round(result * 100) / 100;
  }, [products]);

  const handleDelete = (item) => {
    const arr = products.filter((pro) => pro !== item);
    setProducts(arr);
    setAmount((prev) => prev - 1);
    toast.success("delete success");
  };
  const handleQuantityItem = (item, sl) => {
    const index = products.findIndex((pro) => pro === item);

    if (products[index].quantity >= 1) {
      products[index].quantity += sl;
    } else if (products[index].quantity <= 0) {
      products[index].quantity = 1;
      toast.error("min value 1");
    }

    setProducts([...products]);
  };
  return (
    <div className="container mt-5 ">
      <p className=" mt-3 container-top">
        <Link to="/" className="link">
          Home
        </Link>{" "}
        / Checkout
      </p>
      {products && products.length === 0 ? (
        <h5>Cart is emty.....</h5>
      ) : (
        <>
          <div style={{ overflowX: "auto" }}>
            <table responsive className="table table-dark table-hover">
              <thead>
                <tr>
                  <th className="w-10" scope="col">
                    STT
                  </th>
                  <th className="w-30" scope="col">
                    Name
                  </th>
                  <th className="w-30 text-center" scope="col">
                    Quantity
                  </th>
                  <th className="w-20" scope="col">
                    Total
                  </th>
                  <th className="w-10" scope="col">
                    Remove
                  </th>
                </tr>
              </thead>
              <tbody>
                {products.map((item, idex) => {
                  return (
                    <tr key={idex}>
                      <th scope="row">{idex + 1}</th>
                      <td>{item.name}</td>
                      <td className="text-center">
                        <span
                          onClick={() => handleQuantityItem(item, -1)}
                          className="px-1 cursor-pointer"
                        >
                          -
                        </span>
                        <span className="px-1">{item.quantity}</span>
                        <span
                          onClick={() => handleQuantityItem(item, 1)}
                          className="px-1 cursor-pointer"
                        >
                          +
                        </span>
                      </td>
                      <td>
                        $ {Math.round(item.price * item.quantity * 100) / 100}
                      </td>
                      <td>
                        <i
                          onClick={() => handleDelete(item)}
                          className="fa-solid fa-delete-left cursor-pointer"
                        ></i>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="d-flex justify-content-between mt-5 px-2">
            <div className="justify-content-start">
              <button
                className="btn btn-outline-dark"
                onClick={() => {
                  setProducts([]);
                  setAmount(0);
                }}
              >
                Clear Cart
              </button>
            </div>
            <div>
              <div className="d-flex justify-content-between mb-1">
                <b>Tạm tính: </b>
                <b>$ {total}</b>
              </div>
              <p className="fw-lighter mb-1">
                Taxes and shopping caculated at checkout
              </p>
              <button className="btn btn-danger w-100">Mua ngay</button>
              <Link to="/products" className="link d-block mt-1">
                <i className="fa-solid fa-arrow-left-long"></i>&nbsp;Continue
                Shopping
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CheckOut;
