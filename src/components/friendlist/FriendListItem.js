import { Item, Status } from './friendlist.styled';
import PropTypes from 'prop-types';


export default function friendListItem({ friend: { avatar, name, isOnline } }) {

    return (

        <Item>
            <Status status={isOnline}></Status>

            <img
                src={avatar}
                alt="User avatar"
                className="avatar"
                width="48" />

            <p className="name"> {name}</p>
        </Item>


    );
};

friendListItem.propTypes = {
    friend: PropTypes.shape({
        isOnline: PropTypes.bool.isRequired,
        name: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
    })
}; 