import PostList from "./components/PostList";

const DUMMY_DATA = [
  {
    id: "7c12cc7c-178e-4d70-984c-6856e45bcd96",
    body: "Test body update",
    description: "Updating",
    title: "Test title3",
  },
  {
    id: "1d041dd0-011d-4f2f-83d6-242e61fa965f",
    body: "Test body",
    description: "Test description",
    title: "Test title",
  },
];

function App() {
  return (
    <div>
      <h2>Posts</h2>
      <PostList posts={DUMMY_DATA} />
    </div>
  );
}

export default App;
