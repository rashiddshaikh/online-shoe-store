import React, { useState, useEffect } from "react";
import Layout from "../components/Layout/Layout";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/CategoryProductStyles.css";
import { useCart } from "../context/cart";
import axios from "axios";
const CategoryProduct = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [cart, setCart] = useCart();

  const removeCartItem = (pid) => {
    try {
      let myCart = [...cart];
      let index = myCart.findIndex((item) => item._id === pid);
      myCart.splice(index, 1);
      setCart(myCart);
      localStorage.setItem("cart", JSON.stringify(myCart));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (params?.slug) getPrductsByCat();
  }, [params?.slug]);
  const getPrductsByCat = async () => {
    try {
      const { data } = await axios.get(
        `/api/v1/product/product-category/${params.slug}`
      );
      setProducts(data?.products);
      setCategory(data?.category);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <div className="container mt-3 category">
        <h4 className="text-center">Category - {category?.name}</h4>
        <h6 className="text-center">{products?.length} result found </h6>
        <div className="row">
          <div className="col-md-9 offset-1">
            <div className="d-flex flex-wrap">
              {products?.map((p) => (
                <div className="wrapper">
                  <div className="container">
                    <div className="top">
                      <img
                        src={`/api/v1/product/product-photo/${p._id}`}
                        className="card-img-top"
                        alt={p.name}
                      />
                    </div>
                    <div className="bottom">
                      <div className="left">
                        <div className="details">
                          <h1>{p.name}</h1>
                          <p>
                            {p.price.toLocaleString("en-US", {
                              style: "currency",
                              currency: "INR",
                            })}
                          </p>
                        </div>
                        <div
                          className="buy"
                          onClick={() => {
                            setCart([...cart, p]);
                            localStorage.setItem(
                              "cart",
                              JSON.stringify([...cart, p])
                            );
                            {
                              document
                                .getElementsByClassName("bottom")[0]
                                .classList.add("clicked");
                            }
                            {
                            }
                          }}
                        >
                          <i className="material-icons">add_shopping_cart</i>
                        </div>
                      </div>
                      <div className="right">
                        <div className="done">
                          <i className="material-icons">done</i>
                        </div>
                        <div className="details">
                          <h1>{p.name}</h1>
                          <p>Added to your cart</p>
                        </div>
                        <div
                          className="remove"
                          onClick={() => {
                            {
                              document
                                .getElementsByClassName("bottom")[0]
                                .classList.remove("clicked");
                            }
                            removeCartItem(p._id);
                          }}
                        >
                          <i className="material-icons">clear</i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="inside"
                    onClick={() => navigate(`/product/${p.slug}`)}
                  >
                    <div className="icon">
                      <i className="material-icons">info_outline</i>
                    </div>
                    <div className="contents">
                      {p.description.substring(0, 60)}...
                    </div>
                  </div>
                </div>
                // <div className="card m-2" key={p._id}>
                //   <img
                //     src={`/api/v1/product/product-photo/${p._id}`}
                //     className="card-img-top"
                //     alt={p.name}
                //   />
                //   <div className="card-body">
                //     <div className="card-name-price">
                //       <h5 className="card-title">{p.name}</h5>
                //       <h5 className="card-title card-price">
                //         {p.price.toLocaleString("en-US", {
                //           style: "currency",
                //           currency: "USD",
                //         })}
                //       </h5>
                //     </div>
                //     <p className="card-text ">
                //       {p.description.substring(0, 60)}...
                //     </p>
                //     <div className="card-name-price">
                //       <button
                //         className="btn btn-info ms-1"
                //         onClick={() => navigate(`/product/${p.slug}`)}
                //       >
                //         More Details
                //       </button>
                //       {/* <button
                //     className="btn btn-dark ms-1"
                //     onClick={() => {
                //       setCart([...cart, p]);
                //       localStorage.setItem(
                //         "cart",
                //         JSON.stringify([...cart, p])
                //       );
                //       toast.success("Item Added to cart");
                //     }}
                //   >
                //     ADD TO CART
                //   </button> */}
                //     </div>
                //   </div>
                // </div>
              ))}
            </div>
            {/* <div className="m-2 p-3">
            {products && products.length < total && (
              <button
                className="btn btn-warning"
                onClick={(e) => {
                  e.preventDefault();
                  setPage(page + 1);
                }}
              >
                {loading ? "Loading ..." : "Loadmore"}
              </button>
            )}
          </div> */}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CategoryProduct;
