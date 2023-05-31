import React from "react";
import banner from "../assets/banner.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="text-center text-white px-10">
      <div class="container px-5 shadow-inner shadow-black rounded-lg mx-auto flex flex-col md:flex-row items-center my-12 md:my-24">
        {/* <!--Left Col--> */}
        <div class="flex flex-col w-full lg:w-1/2 justify-center items-start pt-12 pb-24 px-6 ">
          <p class="uppercase tracking-loose">Precise products</p>
          <h1 class="font-bold text-3xl my-4">Welcome to League info</h1>
          <p class="leading-normal mb-4">
            Are you a sports fan who loves to read about the latest news,
            trends, and tips in the world of sports? If so, you've come to the
            right place! Welcome to Sports Zone, your ultimate source of sports
            content for a sports blog site. Here you will find everything you
            need to know about your favorite sports, teams, players, and events.
            Whether you are into football, basketball, baseball, soccer, or any
            other sport, we have something for you. You will also learn how to
            improve your own skills and performance with our expert advice and
            guides. Plus, you will enjoy our fun and engaging features, such as
            quizzes, polls, trivia, and more. So what are you waiting for? Join
            us today and become part of the Sports Zone community!
          </p>

          <Link to="/leagues">
            <button className="btn glass ">Leagues</button>
          </Link>
        </div>
        {/* <!--Right Col--> */}
        <div class="w-full lg:w-1/2 lg:py-6 text-center">
          {/* <!--Add your product image here--> */}
          <img
            src={banner}
            alt=""
          />
        </div>
      </div>
      <footer>
        <h3 className="text-lg italic hover:underline">
          <a
            href="https://fre-frontline.netlify.app/"
            target="_blank"
          >
            @ FRE Frontline
          </a>
        </h3>
      </footer>
    </div>
  );
};

export default Home;
