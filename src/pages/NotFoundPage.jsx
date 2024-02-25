import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div>
      <h1>Opps, sorry, wrong page :(</h1>
      <Link to="/">Back to &apos;Home&apos; page</Link>
    </div>
  );
}
