import React from 'react';
import '../index.css';

// Define interface for UserCard props
interface UserCardProps {
    id: number;
    avatar_url: string;
    login?: string;
    name?: string;
    location?: string;
    email?: string;
    company?: string;
    bio?: string;
    html_url?: string;
    acceptUser?: (id: number) => void;
    declineUser?: (id: number) => void;
}

// Component to display the user information in a card
const UserCard = ({
    id,
    avatar_url,
    login,
    name,
    location,
    email,
    company,
    bio,
    acceptUser,
    declineUser,
}: UserCardProps) => {
    return (
        <div className="userCard">
            {/* Container for the user's avatar */}
            <div className="imgContainer">
                <img src={avatar_url} width="250" height="200" alt={`${login ? login : 'User'}'s avatar`} />
            </div>

            {/* Container for the user's detailed information */}
            <div className="userInfo">
                {login && <h2>{login}</h2>}
                {name && <h2>{name}</h2>}
                {location && <p>Location: {location}</p>}
                {email && (
                    <label>
                        Email: <a href={`mailto:${email}`}>{email}</a>
                    </label>
                )}
                {company && <p>Company: {company}</p>}
                {bio && <p>Bio: {bio}</p>}
            </div>

            {/* Container for the action buttons */}
            <div className="userButtons">
                {/* Decline button */}
                <button className="decline" onClick={() => declineUser && declineUser(id)} aria-label="Decline User">-</button>
                {/* Accept button */}
                <button className="accept" onClick={() => acceptUser && acceptUser(id)} aria-label="Accept User">+</button>
            </div>
        </div>
    );
};

export default UserCard;
