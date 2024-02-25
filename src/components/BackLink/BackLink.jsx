import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
import css from "./BackLink.module.css";

export default function BackLink({ href, children }) {
  return (
    <button>
      <Link className={css.backLink} to={href} type="button">
        {<BiArrowBack />}
        {children}
      </Link>
    </button>
  );
}
