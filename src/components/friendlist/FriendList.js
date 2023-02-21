
import FriendListItem from "./FriendListItem";
import { List } from './friendlist.styled';
import PropTypes from 'prop-types';

export default function friendList({ friends }) {

    return (
        <List>
            {friends.map(friend => (
                <li key={friend.id} className="item">
                    <FriendListItem friend={friend} />
                </li>
            ))}
        </List>
    );
}


friendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
        }),
    ),
};