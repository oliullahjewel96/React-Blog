import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../custom hook/useFetch";
import { useHistory } from "react-router-dom";

const BlogDetails = () => {
  let { id } = useParams();
  const {
    data: blog,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs/" + id);

  const history = useHistory();

  const handleDelete = () => {
    fetch("http://localhost:8000/blogs/" + blog.id, {
      method: "DELETE",
    }).then(() => {
      history.push("/");
    });
  };
  return (
    <div className="blog-details">
      {isPending && <p>Loading...</p>}
      {error && <p>Error!</p>}
      {blog && (
        <article>
          <h1>{blog.title}</h1>
          <p>Written By {blog.author}</p>
          <div>{blog.body}</div>
          <button onClick={handleDelete}>Delete</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
