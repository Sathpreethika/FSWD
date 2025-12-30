import React, { useState } from "react";

function Blog() {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const addComment = (e) => {
    e.preventDefault();

    if (!comment.trim()) {
      alert("❌ Comment cannot be empty");
      return;
    }

    setComments([...comments, comment]);
    setComment("");
  };

  return (
    <div style={{ maxWidth: "800px", margin: "40px auto", padding: "20px" }}>
      
      {/* Blog Section */}
      <div>
        <h1>My Tech Blog</h1>
        <p style={{ color: "gray" }}>Posted on: 27 Dec 2025</p>

        <p>
          Full-stack development involves both frontend and backend technologies.
          React is commonly used for building interactive user interfaces, while
          Node.js and databases handle server-side logic.
        </p>
      </div>

      <hr />

      {/* Comment Form */}
      <div>
        <h3>Add a Comment</h3>

        <form onSubmit={addComment}>
          <textarea
            rows="3"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            style={{ width: "100%" }}
            placeholder="Write your comment..."
          ></textarea>

          <button type="submit" style={{ marginTop: "10px" }}>
            Post Comment
          </button>
        </form>
      </div>

      <hr />

      {/* Comments Section */}
      <div>
        <h3>Comments ({comments.length})</h3>

        {comments.length === 0 ? (
          <p>No comments yet</p>
        ) : (
          comments.map((c, index) => (
            <div
              key={index}
              style={{
                border: "1px solid #ccc",
                padding: "10px",
                marginBottom: "10px",
                borderRadius: "5px",
              }}
            >
              {c}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Blog;
