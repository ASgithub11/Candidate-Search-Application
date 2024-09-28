import { useState, useEffect } from "react";
import type Candidate from "../interfaces/Candidate.interface";
import UserTable from "../components/UserTable";

// Function to display the list of saved/potential candidates
const SavedCandidates = () => {
  // Initialize the state variable to store the list of saved candidates
  const [users, setUsers] = useState<Candidate[]>([]);

  // Retrieve the list of saved candidates from the local storage on component mount
  useEffect(() => {
    const savedUsers = JSON.parse(localStorage.getItem("acceptedUsers") || "[]");
    setUsers(savedUsers);
  }, []);

  // Function to remove a candidate from the list of saved candidates
  const declineUser = (id: number) => {
    const updatedUsers = users.filter((user: Candidate) => user.id !== id);
    setUsers(updatedUsers);

    // Update the local storage with the updated list of saved candidates
    localStorage.setItem("acceptedUsers", JSON.stringify(updatedUsers));
  };

  return (
    <>
      <h1>Potential Candidates</h1>
      <main>
        {users.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Location</th>
                <th>Email</th>
                <th>Company</th>
                <th>Bio</th>
                <th>Reject</th>
              </tr>
            </thead>

            <body>
              {users.map((user) => (
                <UserTable
                  key={user.id}
                  declineUser={declineUser}
                  {...user}
                />
              ))}
            </body>
          </table>
        ) : (
          <p>No saved candidates found.</p>
        )}
      </main>
    </>
  );
};

export default SavedCandidates;
