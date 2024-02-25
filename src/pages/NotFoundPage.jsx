import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div>
      <h1>Opps, sorry :(</h1>
      <Link to="/">Back to main page</Link>
    </div>
  );
}
