import React from "react";
import "./Patents.css";
import { patentsSection } from "../../portfolio";
import BlogCard from "../../components/blogCard/BlogCard";
import { Fade } from "react-reveal";

export default function Patents() {
  return (
    <Fade bottom duration={1000} distance="20px">
    <div className="main" id="patents">
      <div className="podcast-header">
        <h1 className="podcast-header-title">{patentsSection.title}</h1>
        <p className="subTitle podcast-header-subtitle">{patentsSection.subtitle}</p>
      </div>
      <div className="blog-main-div">
        <div className="blog-text-div">
          {patentsSection.patents.map((patent,index) => {
            return (
              <BlogCard
                key={index}
                blog={{
                  url: patent.url,
                  title: patent.title,
                  description: patent.description
                }}
              />
            );
          })}
        </div>
      </div>
      </div>
    </Fade>
  );
}
