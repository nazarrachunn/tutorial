function Message() {
  // JSX: JavaScript XML
  const name = "Nazar";
  if (name) return <h1>Hello {name}</h1>;
  else return <h1>Hello unknown person</h1>;
}
export default Message;
