// PostCard.jsx - Updated to include Sentiment, Keywords & Hype Score
import React from "react";

const PostCard = ({ post }) => {
  return (
    <div className="post-card" style={{ borderLeft: `5px solid ${post.sentiment === "positive" ? "green" : post.sentiment === "negative" ? "red" : "gray"}` }}>
      <h3>{post.title}</h3>
      <p>📝 Author: {post.author}</p>
      <p>💬 Comments: {post.num_comments}</p>
      <p>🔥 Score: {post.score}</p>
      <p>🔥 Hype Score: {post.hype_score.toFixed(2)}</p>
      <div className="keywords">
        {post.keywords.map((keyword, index) => (
          <span key={index} className="keyword-tag">#{keyword}</span>
        ))}
      </div>
    </div>
  );
};

export default PostCard;