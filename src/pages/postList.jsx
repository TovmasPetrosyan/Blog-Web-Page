import React, { useEffect, useState } from "react";
import { getUserPostsFromFirestore } from "../services/postServices";
import PostCard from "../utils/postCard";
import "../style/postCard.css";
import { formatTimestamp } from "../utils/formatDate";
import { filterPostsByWeek, isSameDay } from "../utils/dateCheck";

const PostList = ({
  isDataUpdated,
  currentUserID,
  currentUserIDForDelete,
  setPostCount,
  setTodayPosts,
  setThisWeekPosts,
}) => {
  const [userPosts, setUserPosts] = useState([]);

  const fetchUserPosts = async () => {
    try {
      const storedUserPosts =
        JSON.parse(localStorage.getItem("userPosts")) || [];

      if (storedUserPosts.length > 0) {
        setUserPosts(storedUserPosts);
      }

      const latestPosts = await getUserPostsFromFirestore();

      if (
        latestPosts?.allUserPosts?.length > 0 ||
        storedUserPosts.length === 0
      ) {
        const today = new Date();

        const sortedPosts = latestPosts.allUserPosts.sort(
          (a, b) => b.timestamp - a.timestamp
        );
        setUserPosts(latestPosts.allUserPosts);

        if (latestPosts?.allUserPosts) {
          localStorage.setItem(
            "userPosts",
            JSON.stringify(latestPosts.allUserPosts)
          );
        }
      }
    } catch (error) {
      console.error("Error fetching or storing user posts:", error);
    }
  };
  useEffect(() => {
    fetchUserPosts();
    formatTimestamp();
  }, [isDataUpdated]);

  useEffect(() => {
    const today = new Date();
    const postsFromCurrentDay = userPosts.filter((post) =>
      isSameDay(new Date(post.timestamp), today)
    );
   
    {setTodayPosts && setTodayPosts(postsFromCurrentDay.length);}
    const postsFromCurrentWeek = filterPostsByWeek(userPosts);
{  setThisWeekPosts &&   setThisWeekPosts(postsFromCurrentWeek.length);} 
{ setPostCount &&   setPostCount(userPosts.length);
}  }, [userPosts]);

  const filteredPosts = currentUserID
    ? userPosts.filter((post) => post.userID === currentUserID)
    : userPosts;
  const sortedPosts = filteredPosts.sort((a, b) => b.timestamp - a.timestamp);

  return (
    <div className="post-cards-container">
      {sortedPosts &&
        sortedPosts.map((post, index) => (
          <PostCard
            key={post.id || `${post.username}-${post.content}`}
            post={post}
            date={formatTimestamp(post.timestamp)}
            currentUserID={currentUserID}
            currentUserIDForDelete={currentUserIDForDelete}
            onDataUpdated={() => fetchUserPosts()}
            index={index}
          />
        ))}
    </div>
  );
};

export default PostList;
