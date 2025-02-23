// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

// Material Kit 2 React components
import MKTypography from "components/MKTypography";
import { Link } from "react-router-dom";

// Images
import logo from "assets/images/uae-logo.png";

const date = new Date().getFullYear();

export default {
  brand: {
    name: "UAE Visa Application Centre ",
    image: logo,
    route: "/",
  },
  socials: [
    {
      icon: <FacebookIcon />,
      link: "/signin",
    },
    {
      icon: <TwitterIcon />,
      link: "/signin",
    },
    {
      icon: <YouTubeIcon />,
      link: "/signin",
    },
  ],
  menus: [
    {
      name: "company",
      items: [
        { name: "about us", route: "/about" }

      ],
    },
    {
      name: "help & support",
      items: [
        { name: "Contact Us", route: "/contact" }
      ],
    },
    {
      name: "legal",
      items: [
        { name: "terms & conditions", route: "/" }
      ],
    },
  ],
  copyright: (
    <MKTypography variant="button" fontWeight="regular">
      © {date} <Link to="/">Oriental Travels & Tours (Pvt) Ltd.</Link> All rights reserved
    </MKTypography>
  ),
};
