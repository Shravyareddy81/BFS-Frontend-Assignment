import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const UserDetail = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(res => res.json())
      .then(data => setUser(data));
  }, [id]);

  if (!user) return <p>Loading...</p>;

  return (
    <div style={{ maxWidth: "600px", margin: "auto", textAlign: "center" }}>
      
      <h2>{user.name}</h2>

      {/* Card */}
      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "12px",
          boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
          marginTop: "15px"
        }}
      >
        <p><b>Email:</b> {user.email}</p>
        <p><b>Phone:</b> {user.phone}</p>
        <p><b>Company:</b> {user.company.name}</p>
        <p><b>Website:</b> {user.website}</p>
        <p><b>City:</b> {user.address.city}</p>
      </div>

      {/* Go Back Button BELOW CARD */}
      <button
        onClick={() => window.history.back()}
        style={{
          marginTop: "20px",
          padding: "10px 15px",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer"
        }}
      >
        Go Back
      </button>

    </div>
  );
};

export default UserDetail;