import React from "react";

function Product(props) {
  const { id, itemName, price, rating, isDisabled } = props.product;
  return (
    <div className="col-lg-4 col-md-6 mb-4" key={id}>
      <div className="card h-100">
        <a href="#">
          <img
            className="card-img-top"
            src="http://placehold.it/700x400"
            alt=""
          />
        </a>
        <div className="card-body">
          <h4 className="card-title">
            <a href="#">{itemName}</a>
          </h4>
          <h5>Rs.{price}</h5>
          <p className="card-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
            numquam aspernatur!
          </p>
        </div>
        <div className="card-footer">
          {rating === 1 ? (
            <small className="text-muted">★ ☆ ☆ ☆ ☆</small>
          ) : (
            [
              rating === 2 ? (
                <small className="text-muted">★ ★ ☆ ☆ ☆</small>
              ) : (
                [
                  rating === 3 ? (
                    <small className="text-muted">★ ★ ★ ☆ ☆</small>
                  ) : (
                    [
                      rating === 4 ? (
                        <small className="text-muted">★ ★ ★ ★ ☆</small>
                      ) : (
                        <small className="text-muted">★ ★ ★ ★ ★</small>
                      ),
                    ]
                  ),
                ]
              ),
            ]
          )}

          {isDisabled ? (
            <button
              disabled
              className="btn btn-primary ml-5"
              onClick={() => {
                props.handleAddCart(props.product);
              }}
            >
              Add
            </button>
          ) : (
            <button
              className="btn btn-primary ml-5"
              onClick={() => {
                props.handleAddCart(props.product);
              }}
            >
              Add
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Product;
