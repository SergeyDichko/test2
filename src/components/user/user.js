// import ReactDOM from "react-dom";
// import profile from './user.json'
import PropTypes from "prop-types";
import { Container, Desc, Avatar, Name, Stats, List } from './user.styled';

export default function User({ username, tag, location, avatar, stats }) {
    return (
        <Container>
            <Desc>
                <Avatar
                    src={avatar}
                    alt="User avatar"
                    className="avatar"
                />
                <Name>{username}</Name>
                <p className="tag">{tag}</p>
                <p className="location">{location}</p>
            </Desc>

            <Stats>
                <List>
                    <span className="label">Followers</span>
                    <span className="quantity">{stats.followers}</span>
                </List>
                <List>
                    <span className="label">Views</span>
                    <span className="quantity">{stats.views}</span>
                </List>
                <List>
                    <span className="label">Likes</span>
                    <span className="quantity">{stats.likes}</span>
                </List>
            </Stats>
        </Container >
    );
}

// ReactDOM.render(user, document.querySelector('#root'));
User.propTypes = {
    username: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.string,
    stats: PropTypes.objectOf(PropTypes.number),
};