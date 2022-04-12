export const Button = (props) => {
  const className = `${props.className} py-1 px-4 rounded`;
  return <button className={className}>{props.children}</button>;
};
