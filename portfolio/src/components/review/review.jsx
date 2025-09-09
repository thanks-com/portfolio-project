// import hooks
import { useState, useEffect} from "react";
import axios from "axios";

// import react icons
import { FaStar } from "react-icons/fa";

// import css file
import "./reviwe.css";
const Review = () => {
  const [posts, setPosts] = useState([]);
  const [rating, setRating] = useState(0); // Store the selected star rating
  const [review, setReview] = useState();

  // Create post request for posting our data in mongoodb claoud
  const postRating = async (e) => {
    e.preventDefault();
   
    try {
      const res = await axios.post("https://morden-portfolio.onrender.com/api/rating", {
        review,
        rating,
      });

      // Instantly add the new post to state to update UI
      setPosts((prev) => [res.data, ...prev]);

      // Clear input after success
      setReview("");
      setRating(0);
      alert("Data added successfully!", res.data);
    } catch (error) {
      console.error("Error submitting review:", error);
    }
  };

  // ⬇️ Fetch posts from backend when component mounts
  useEffect(() => {
    const getData = async () => {
      const res = await fetch("https://morden-portfolio.onrender.com/api/rating");
      const data = await res.json();
      setPosts(data);
    };
    getData();
  }, []);

  return (
    <div>
      <div className="review-container flex justify-center ">
        {/*---------------- Reviwe site ------------------- */}
        <div>
          <div className="review mt-[50px] mb-[30px]">
            <div className="reviwe-boss flex justify-center ">
              <div>
                <div className="review-content  gap-5 mt-5 items-center rounded-md">
                  <input
                    type="text"
                    name="review"
                    value={review}
                    className=" border border-green-700 bg-inherit bg-gray-100 p-3 w-[300px]  rounded-md "
                    placeholder=" Writing a review message !"
                    onChange={(e) => setReview(e.target.value)}
                  />
                  <div className="button-submit">
                    <button
                      onClick={postRating}
                      className=" p-3 shadow-md pl-10 pr-10 border border-green-700  bg-green-900 hover:bg-green-700 transition-all rounded-md"
                    >
                      Submit
                    </button>
                  </div>
                </div>
                <div className="start flex justify-center mt-4 gap-[5px] bg-gray-700 pl-5 pr-5 rounded-md p-2 ">
                  {[1, 2, 3, 4].map((index) => (
                    <FaStar
                      key={index}
                      className={`text-2xl cursor-pointer transition-all ${
                        index <= rating ? "text-yellow-400" : "text-gray-300"
                      }`}
                      onClick={() => setRating(index)} // Update rating on click
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*------------ import Carousel -------------- */}
      <div className="flex justify-center items-center pb-[50px] ">
        <div className="main-content max-h-[250px] overflow-y-auto" >
          {posts.map((post, index) => (
            <div key={index} className=" max-h-[200px] overflow-y-auto" >
              <div className="border border-green-800 p-[10px] rounded-sm mb-[10px] ">
                <p className="text-gray-200" >{post.review}</p>
                <div className="flex gap-1 text-[18px] mt-[5px] text-yellow-400">
                  {[...Array(post.rating || 0)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Review;
