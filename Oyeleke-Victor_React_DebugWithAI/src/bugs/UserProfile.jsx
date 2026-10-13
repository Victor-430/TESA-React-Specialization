import { useState, useEffect } from "react";

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, [userId]);

  if (!user) return <p>Loading...</p>;

  return (
    <div>
      <h3>{user.name}</h3>
      <p>{user.email}</p>
    </div>
  );
}

export default function ProfilePage() {
  const [id, setId] = useState(1);
  return (
    <>
      <button onClick={() => setId(id + 1)}>Next user</button>
      <UserProfile userId={id} />
    </>
  );
}
