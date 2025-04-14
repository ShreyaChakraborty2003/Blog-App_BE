import React from "react";
import RecentPost from "../Components/RecentPost";

export default function Home(){
    return(
       <>
          <div className="container-fluid bg-dark hero-section text-center">
                <h1 className="fs-1 fw-bold text-light">WELCOME TO MY BLOG</h1>

                <p className="text-light fs-5 mt-3">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta totam odit officia ad earum veritatis distinctio quam voluptates! Minima soluta non quibusdam labore voluptatum minus fuga commodi ratione praesentium eveniet.
                </p>
          </div>


        <div className="container-fluid p-5">
            <RecentPost/>
        </div>
       </>
    )
}