export default function Welcome() {
  return (
    <>
      <h1>Welcome to Coding in React - CRUD Application !</h1>
      <p>Today {new Date().toLocaleDateString()} you will learn:</p>
      <ul>
        <li>
          To install and use <a href="https://mui.com/">Material Design</a>
        </li>
        <li>To divide an application into components</li>
        <li>To use tables and popups</li>
        <li>To understand what is the Children prop and when can be used</li>
        <li>To create and submit Forms</li>
        <li>To perform Conditional Rendering</li>
      </ul>
    </>
  );
}
