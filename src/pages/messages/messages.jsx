import { useSelector } from "react-redux";
import { getActiveUsers } from "../../services/userServices";
import ChatBox from "./chat";
import "./messages.css";
import { useState, useEffect } from "react";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import userPhoto from "../../images/userMale.png";

const MessageComponent = () => {
  const [activeUsers, setActiveUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedUserId, setSelectedUserId] = useState(null);

  const [userImages, setUserImages] = useState({});

  const { id } = useSelector((state) => state.user);

  const fetchActiveUsers = async () => {
    try {
      const users = await getActiveUsers();
      setActiveUsers(users.filter((user) => user.userId !== id));
    } catch (error) {
      console.error("Error fetching active users:", error);
    }
  };

  useEffect(() => {
    fetchActiveUsers();
  }, []);

  const handleUserClick = (user) => {
    setSelectedUser(user);
    setSelectedUserId(user.userId === selectedUserId ? null : user.userId);
  };

  useEffect(() => {
    console.log(activeUsers);
  }, [activeUsers]);

  const fetchUserImage = async (userId) => {
    try {
      const storage = getStorage();
      const storageRef = ref(storage, `user_photos/${userId}/user-photo.jpg`);

      const downloadURL = await getDownloadURL(storageRef);
      setUserImages((prevUserImages) => ({
        ...prevUserImages,
        [userId]: downloadURL,
      }));
      console.log(userImages);
    } catch (error) {}
  };

  useEffect(() => {
    activeUsers.forEach((user) => fetchUserImage(user.userId));
  }, [activeUsers]);

  return (
    <div className="message-container">
      <div className="messageBox">
        <div className="active-users-container">
          <div className="h2title">
    
            <h2>Users</h2>
          </div>
          <ul className="active-users-list">
            {activeUsers.map((user) => (
              <li
                key={user.userId}
                className={`active-user ${
                  selectedUserId === user.userId ? "active" : ""
                }`}
                onClick={() => handleUserClick(user)}
              >
                <img
                  src={
                    userImages[user.userId]
                      ? userImages[user.userId]
                      : userPhoto
                  }
                  alt="User Avatar"
                />

                <div>
                  <div className="active-user-name">{user.name}</div>
                  <div className="active-user-status">{user.status}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="chat">
          <ChatBox selectedUser={selectedUser} />
        </div>
      </div>
    </div>
  );
};

export default MessageComponent;