import React from "react";
import list from "../../public/list.json";
import Cards from "./Cards";
import {Link} from "react-router-dom"

function Course() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20">
        <div className="mt-28 items text-center">
          <h1 className="text-black text-2xl font-semibold">
            We're delighted to have you{" "}
            <span className="text-pink-500">Here!:</span>
          </h1>
          <p className="text-black">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam
            ipsum voluptatum error quia, eos debitis distinctio aliquam unde
            culpa nostrum? Iste debitis, dicta sint dolore dolorem delectus
            beatae fugit quaerat. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Commodi aut at dolor ratione, vel veniam, sint
            error maxime possimus exercitationem, quasi deleniti illum maiores
            velit asperiores voluptatum est iure eligendi. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Sequi a eum, natus, quasi
            reprehenderit placeat aut quibusdam et labore ipsum minima
            accusantium dicta numquam delectus! Voluptas nostrum dolorem
            repudiandae labore.
          </p>
          <Link to={"/"}>
          <button className="bg-pink-500 text-white px-4 my-5 py-2 rounded-md hover:bg-pink-700 ">Back</button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {list.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
