import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <div>
      <h1>Let's choose a project!</h1>

      <ul>
        <li>
          <Link to="/local-state">Local state</Link>
        </li>
        <li>
          <Link to="/database-comments">Database comments</Link>
        </li>
      </ul>
    </div>
  );
}
