const NameTag = ({ firstName, lastName }) => {
  return (
    <div className="nametag">
      <p>First name: {firstName}</p>
      <p>Last name: {lastName}</p>
    </div>
  );
};

export default NameTag;
