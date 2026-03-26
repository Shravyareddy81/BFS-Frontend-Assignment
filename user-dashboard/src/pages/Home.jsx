import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Welcome!!</h1>

      <button
        onClick={() => navigate("/dashboard")}
        style={{
          padding: "10px 20px",
          marginTop: "20px",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        Go to Dashboard
      </button>
    </div>
  );
};

export default Home;