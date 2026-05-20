import React, { useEffect, useState } from "react";
import axios from "axios";

function FeedbackPage() {
  const [feedback, setFeedback] = useState("");
  const [feedbackList, setFeedbackList] = useState([]);
  const [editId, setEditId] = useState(null);

  const userId = localStorage.getItem("userId");

  useEffect(() => {
    loadFeedback();
  }, []);

  const loadFeedback = async () => {
    try {
      const res = await axios.get(
        `http://localhost:9091/feedback/user/${userId}`
      );
      setFeedbackList(res.data);
    } catch (error) {
      console.log("Load Feedback Error:", error);
    }
  };

  const submitFeedback = async () => {
    try {
      if (editId == null) {
        await axios.post("http://localhost:9091/feedback/add", {
          userId: parseInt(userId),
          feedback: feedback,
        });

        alert("Feedback Added");
      } else {
        await axios.put(`http://localhost:9091/feedback/update/${editId}`, {
          userId: parseInt(userId),
          feedback: feedback,
        });

        alert("Feedback Updated");
        setEditId(null);
      }

      setFeedback("");
      loadFeedback();
    } catch (error) {
      console.log("Submit Error:", error.response);
      alert("Error Occurred");
    }
  };

  const editFeedbackData = (fb) => {
    setEditId(fb.id);
    setFeedback(fb.feedback);
  };

  return (
    <div>
      <h2>Feedback Page</h2>
      <h3>Welcome {localStorage.getItem("userName")}</h3>

      <textarea
        rows="4"
        cols="40"
        placeholder="Write your feedback"
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
      />

      <br />
      <br />

      <button onClick={submitFeedback}>
        {editId == null ? "Add Feedback" : "Update Feedback"}
      </button>

      <h3>Your Feedback</h3>

      {feedbackList.map((fb) => (
        <div
          key={fb.id}
          style={{
            border: "1px solid black",
            margin: "10px",
            padding: "10px",
          }}
        >
          <p>{fb.feedback}</p>
          <button onClick={() => editFeedbackData(fb)}>Edit</button>
        </div>
      ))}
    </div>
  );
}

export default FeedbackPage;