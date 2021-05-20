const Element = (props) => {
  const { label, type, name, id, validate } = props.param;

  return (
    <div key={id}>
      <label>{label}</label>
      <input
        type={type}
        id={id}
        value={name}
        onChange={(e) => {
          validate(e.target.value, id);
        }}
      />
      <div>Error .!</div>
    </div>
  );
};

export default Element;
