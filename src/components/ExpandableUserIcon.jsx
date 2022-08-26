const ExpndableUserIcon = ({ loggedInUser, children }) => {
  return <div>{loggedInUser.username ? children : null}</div>;
};

export default ExpndableUserIcon;
