import type Candidate from "../interfaces/Candidate.interface";
import "../index.css";

// Add table row to display the candidate details
const UserTable = ({
    id,
    avatar_url,
    login,
    name,
    location,
    email,
    company,
    bio,
    declineUser,
}: Candidate) => {
    return (
        <tr>
            <td>
                <img src={avatar_url} width="100" height="100" alt={`${login}'s avatar`} />
            </td>
            <td>
                <h3>{name || "No name added"}, {login}</h3>
            </td>
            <td>
                <p>{location || "No Location Added"}</p>
            </td>
            <td>
                <a href={`mailto:${email || ""}`}>{email || "No Email Added"}</a>
            </td>
            <td>
                <p>{company || "No Company Added"}</p>
            </td>
            <td>
                <p>{bio || "No Bio Added"}</p>
            </td>
            <td>
                <button className="reject" onClick={() => declineUser && declineUser(id)}>-</button>
            </td>
        </tr>
    );
};

export default UserTable;
