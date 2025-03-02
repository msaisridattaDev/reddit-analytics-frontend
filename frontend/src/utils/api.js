// api.js - Updated to fetch Sentiment, Keywords & Hype Score
const BASE_URL = "https://reddit-analytics-backend.onrender.com/api";

export const getAllPosts = async () => {
  const res = await fetch(`${BASE_URL}/posts`);
  return res.json();
};

export const getPostById = async (id) => {
  const res = await fetch(`${BASE_URL}/posts/${id}`);
  return res.json();
};

export const getTrendingPosts = async () => {
  const res = await fetch(`${BASE_URL}/posts/top`);
  return res.json();
};

export const getPostActivity = async () => {
  const res = await fetch(`${BASE_URL}/posts/activity`);
  return res.json();
};

export const getTrendingSubreddits = async () => {
  const res = await fetch(`${BASE_URL}/posts/trends`);
  return res.json();
};

export const getSentimentPosts = async () => {
  const res = await fetch(`${BASE_URL}/sentiment/get-sentiment-posts`);
  return res.json();
};
