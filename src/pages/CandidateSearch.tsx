import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import Candidate from '../interfaces/Candidate.interface';
import UserCard from '../components/userCard';

// Function to clear local storage
const clearStorage = () => {
  localStorage.clear();
  console.log("Local storage cleared");
}

// Main component for Candidate Search
const CandidateSearch = () => {
  const [users, setUser] = useState<Candidate[]>([]);

  useEffect(() => {
    // Fetch a list of candidates from the GitHub API
    searchGithub().then(async (userData: Candidate[]) => {
      // For each candidate, fetch detailed inoformation and merge the results)
      const detailedUserPromises = userData.map((user: Candidate) =>
        searchGithubUser(user.login).then ((userDetails) => ({
          ...user,
          ...userDetails,
        }))
      );

      // Resolve all promises to get detailed user information
      const detailedUsers = await Promise.all(detailedUserPromises);
      setUser(detailedUsers);
    });
  }, []);

  // Function to accept a user when the "+" button is clicked
  const acceptUser = (id: number) => {
    const acceptedUser = users.find((user) => user.id === id);

    if (acceptedUser) {
      // Retrieve accepted users from local storage
      const savedUsers = JSON.parse(localStorage.getItem('acceptedUsers') || '[]');

      // Add the accepted user to the saved users array
      const updatedAcceptedUsers = [...savedUsers, acceptedUser];
      console.log('Acepeted User:', updatedAcceptedUsers);

      // Save the updated list of accepted users to local storage
      localStorage.setItem('acceptedUsers', JSON.stringify(updatedAcceptedUsers));

      // Remove the accepted user from the list of candidates
      const updatedUsers = users.filter((user) => user.id !== id);
      setUser(updatedUsers);
    }
  };

  // Function to decline a user when the "-" button is clicked
  const declineUser = (id: number) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUser(updatedUsers);
  };

  // Return the main page with user cards and the "Clear Local Storage" button
  return (
    <div className="mainPage">
      <header>
        <h1>Candidate Search</h1>
      </header>

      <main>
        {users.length > 0 ? (
          users.map((user) => (
            <UserCard
              key={user.id}
              acceptUser={acceptUser}
              declineUser={declineUser}
              id={user.id}
              avatar_url={user.avatar_url}
              login={user.login}
              name={user.name}
              location={user.location}
              email={user.email}
              company={user.company}
              bio={user.bio}
              html_url={user.html_url}
            />
          ))
        ) : (
          <p>Loading candidates...</p>
        )}

        {/* Button to clear local storage */}
        <button onClick={() => clearStorage()}>Clear Local Storage</button>
      </main>
    </div>
  )
};

export default CandidateSearch;
