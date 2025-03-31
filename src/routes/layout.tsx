import './index.css';
import { Link, Outlet } from '@modern-js/runtime/router';

export default function Layout() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/item/1">Item 1</Link>
          </li>
          <li>
            <Link to="/item/2">Item 2</Link>
          </li>
          <li>
            <Link to="/item/3">Item 3</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}
