import { Link } from "react-router-dom";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-stone-800 p-[20px] text-center text-bgWhite">
      <p className="text-sm sm:text-base">
        © {currentYear}{" "}
        <Link
          to={"https://www.linkedin.com/https://www.linkedin.com/"}
          target="_blank"
          className="transition-all hover:text-bgWhite"
        >
          Danesh Kumar
        </Link>
        . All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;
