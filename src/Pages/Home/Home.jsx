import React, { useState } from "react";
import { useEffect } from "react";
import Header from "../../Components/Header/Header";
import Posts from "../../Components/Posts/Posts";
import Sidebar from "../../Components/Sidebar/Sidebar";
import axios from "axios";
import { useLocation } from "react-router-dom";
import Carousel from "../../Components/Carousel/Carousel";
import Latest from "../../Components/Latest&Trending/Latest";

function Home() {
  const [post, setPosts] = useState([]);
  const { search } = useLocation();
  useEffect(() => {
    const fetchPost = async () => {
      const res = await axios.get("http://localhost:5000/api/posts" + search);
      setPosts(res.data);
    };
    fetchPost();
  }, []);

  return (
    <>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-md-9">
            <Carousel />
            <Latest />
            <Posts posts={post} />
          </div>
          <div className="col-md-3">
            <Sidebar />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;