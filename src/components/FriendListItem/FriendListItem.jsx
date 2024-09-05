const FriendListItem = ({ data: { avatar, name, isOnline } }) => {
  return (
    <>
      <span>{isOnline}</span>
      <img src={avatar} alt={name} width="48" />
      <p>{name}</p>
    </>
  );
};

export default FriendListItem;
