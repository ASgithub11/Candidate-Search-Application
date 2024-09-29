import type Candidate from '../interfaces/Candidate.interface';
import '../index.css';

// Component to display the user information in a card
const UserCard = (props: Candidate) => {
    return (
        <>
        <div className="userCard">
            {/* Container for the user's avatar */}
            <div className="imgContainer">
                <img src={props.avatar_url} width="250" height="200"></img>
            </div>

            {/* Container for the user's detailed information */}
            <div className="userInfo">
                {props.login && <h2>{props.login}</h2>}
                {props.name && <h2>{props.name}</h2>}
                {props.location && <p>Location: {props.location}</p>}
                {props.email && (
                    <label>
                        Email: <a href={`mailto:${props.email}`}>{props.email}</a>
                    </label>
                )}
                {props.company && <p>Company: {props.company}</p>}
                {props.bio && <p>Bio: {props.bio}</p>}
            </div>

            {/* Container for the action buttons */}
            <div className="userButtons">
                {/* Decline button */}
                <button className="decline" onClick={() => props.declineUser && props.declineUser(props.id)} aria-label="Decline User">-</button>
                {/* Accept button */}
                <button className="accept" onClick={() => props.acceptUser && props.acceptUser(props.id)} aria-label="Accept User">+</button>
            </div>
        </div>
        </>
    );
};

export default UserCard;
