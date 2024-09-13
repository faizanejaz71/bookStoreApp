import React from "react";

function Cards({ item }) {
  return (
    <>
      <div className="py-10 p-3 ">
        <div className="card bg-white w-92 shadow-xl hover:scale-105 duration-200">
          <figure> 
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary text-white">
                {item.category}
              </div>
            </h2>
            <p>I{item.title}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline">${item.price}</div>
              <div className="cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white hover:p-2 duration-200">
                Buy Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
