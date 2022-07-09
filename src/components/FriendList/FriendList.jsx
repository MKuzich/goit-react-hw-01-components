import { Friends } from './FriendList.styled';
import { FriendListItem } from 'components/FriendList/FriendListItem';
import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => {
  return (
    <Friends>
      {friends.map(({ id, isOnline, avatar, name }) => (
        <FriendListItem key={id} status={isOnline} url={avatar} name={name} />
      ))}
    </Friends>
  );
};

Friends.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};
