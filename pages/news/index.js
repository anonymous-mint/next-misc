import React from "react";

const NewsList = ({ articles }) => {
  return <div>{articles}</div>;
};

export default NewsList;

export const getStaticProps = (context) => {
	console.log(context.previewData);
  return {
    props: {
      articles: context.preview
        ? "this is an draft list"
        : "this is an articles list",
    },
  };
};
