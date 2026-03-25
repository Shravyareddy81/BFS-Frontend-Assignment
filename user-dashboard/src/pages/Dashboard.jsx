import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
    const navigate = useNavigate();   

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(search.toLowerCase()) ||
    user.email.toLowerCase().includes(search.toLowerCase())
  );


  if (loading) return <h2>Loading users...</h2>;

  const sortByName = () => {
  const sorted = [...users].sort((a, b) =>
    a.name.localeCompare(b.name)
  );
  setUsers(sorted);
};

const sortByCompany = () => {
  const sorted = [...users].sort((a, b) =>
    a.company.name.localeCompare(b.company.name)
  );
  setUsers(sorted);
};


  return (
    <div style={{ maxWidth: "900px", margin: "auto" }}>
      <h2>User Dashboard</h2>

      <input
      type="text"
      placeholder="Search by name or email"
      onChange={(e) => setSearch(e.target.value)}
        style={{ marginBottom: "10px" }}   // 👈 ADD HERE

      />

      <button onClick={sortByName} style={{ marginRight: "10px" }}>
  Sort by Name
</button>

<button onClick={sortByCompany}>
  Sort by Company
</button>

      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Company</th>
          </tr>
        </thead>

        <tbody>
  {filteredUsers.map(user => (
    <tr key={user.id} onClick={() => navigate(`/user/${user.id}`)}>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.phone}</td>
      <td>{user.company.name}</td>
    </tr>
  ))}
</tbody>

      </table>
    </div>
  );
};

export default Dashboard;