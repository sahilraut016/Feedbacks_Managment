import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AdminPage() {
  const [allFeedback, setAllFeedback] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const role = localStorage.getItem("role");

    if (role !== "ADMIN") {
      navigate("/");
    } else {
      loadAllFeedback();
    }
  }, []);

  const loadAllFeedback = async () => {
    try {
      const res = await axios.get("http://localhost:9091/feedback/all");
      setAllFeedback(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteFeedback = async (id) => {
    try {
      await axios.delete(`http://localhost:9091/feedback/delete/${id}`);
      alert("Deleted Successfully");
      loadAllFeedback();
    } catch (error) {
      console.log(error);
      alert("Delete Failed");
    }
  };

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <h3>Welcome Admin</h3>

      <button onClick={logout}>Logout</button>

      <h3>All Feedback</h3>

      {allFeedback.map((fb) => (
        <div
          key={fb.id}
          style={{
            border: "1px solid black",
            margin: "10px",
            padding: "10px",
          }}
        >
          <p>
            <b>User ID:</b> {fb.user_id}
          </p>
          <p>
            <b>Feedback:</b> {fb.feedback}
          </p>

          <button onClick={() => deleteFeedback(fb.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default AdminPage;