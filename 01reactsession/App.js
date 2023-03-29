// how to create the h1 tag
// document.createElement in js
// but here we will use
// React.createElement('')
// creating an element is the core thing of REact so it comes form React
const heading = React.createElement(
  "h1",
  { id: "title" },
  "Hello world from React"
);
//We need to create the root so it is the job of ReactDOM.
const root = ReactDOM.createRoot(document.getElementById("root"));
// now render the heading inside the heading
root.render(heading);
//{} for the element attribute//tag attribute
// {
// id:title
// }

console.log(heading)
// Now, h1 is not an h1 tag , it is an object.
// REact h1 element.
// React element is a normal JS.

// Props are childeren +attributes that we pass in.
