```javascript
// pages/about.js

export default function About() {
  const myVariable = typeof window === 'undefined' ? process.env.MY_VARIABLE : 'Client-side value';

  return (
    <div>
      <h1>About Page</h1>
      <p>My Variable: {myVariable}</p>
    </div>
  );
}
```