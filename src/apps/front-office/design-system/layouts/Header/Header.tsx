import { Link } from "@mongez/react-router";
import URLS from "apps/front-office/utils/urls";

export default function Header() {
  return (
    <>
      <Link to={URLS.home}>Home</Link>
    </>
  );
}
