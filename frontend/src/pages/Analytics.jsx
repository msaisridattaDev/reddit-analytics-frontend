import React, { useState, useEffect } from "react";
import "../styles/Analytics.css";
import { getSentimentPosts } from "../utils/api";
import { Pie, Bar } from "react-chartjs-2";
import "chart.js/auto";

const Analytics = () => {
  const [sentimentPosts, setSentimentPosts] = useState([]);

  useEffect(() => {
    async function fetchSentimentData() {
      try {
        const data = await getSentimentPosts();
        setSentimentPosts(data || []);
      } catch (error) {
        console.error("❌ Failed to fetch sentiment data:", error);
      }
    }
    fetchSentimentData();
  }, []);

  const sentimentChartData = {
    labels: ["Positive", "Neutral", "Negative"],
    datasets: [
      {
        data: [
          sentimentPosts.filter((post) => post.sentiment === "positive").length,
          sentimentPosts.filter((post) => post.sentiment === "neutral").length,
          sentimentPosts.filter((post) => post.sentiment === "negative").length,
        ],
        backgroundColor: ["#4CAF50", "#FFEB3B", "#F44336"],
      },
    ],
  };

  const keywordCounts = sentimentPosts.reduce((acc, post) => {
    (post.keywords || []).forEach((keyword) => {
      acc[keyword] = (acc[keyword] || 0) + 1;
    });
    return acc;
  }, {});

  const sortedKeywords = Object.entries(keywordCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10);

  const keywordsChartData = {
    labels: sortedKeywords.map(([keyword]) => keyword),
    datasets: [
      {
        label: "Keyword Frequency",
        data: sortedKeywords.map(([_, count]) => count),
        backgroundColor: "#4285F4",
      },
    ],
  };

  return (
    <div className="analytics-container">
      <h1 className="analytics-title">📊 Sentiment & Keyword Analysis</h1>
      <div className="charts-wrapper">
        <div className="chart-box">
          <h2>📊 Sentiment Overview</h2>
          <Pie data={sentimentChartData} />
        </div>
        <div className="chart-box">
          <h2>🔑 Most Frequent Keywords</h2>
          <Bar data={keywordsChartData} />
        </div>
      </div>
      <div className="analytics-box">
        <h2>📌 Sentiment Posts</h2>
        <ul>
          {sentimentPosts.map((post, index) => (
            <li key={index} className="hoverable-post">
              <a href={post.url} target="_blank" rel="noopener noreferrer">{post.title}</a>
              <p>🔥 Hype Score: {post.hype_score?.toFixed(2) || "N/A"}</p>
              <p>📊 Sentiment: {post.sentiment.toUpperCase()}</p>
              <div className="keywords">
                {(post.keywords || []).map((keyword, idx) => (
                  <span key={idx} className="keyword-tag">#{keyword}</span>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Analytics;
