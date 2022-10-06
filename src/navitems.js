import {
  ImHome,
  ImUsers,
  ImUser,
  ImLibrary,
  ImCoinDollar,
  ImMail2,
  ImAppleinc,
  ImCogs,
} from "react-icons/im";


export const navitems = [
  { title: "Dashboard", link: "/dashboard", icon: <ImHome size={25} /> },
  { title: "Pre-tertiary Schools", link: "/dashboard/pretertiary",icon: <ImUser size={25} /> },
  { title: "Pre-secondary Schools", link: "/dashboard/presecondary", icon: <ImUsers size={25} /> },
  { title: "Tertiary Schools", link: "/dashboard/tertiary", icon: <ImLibrary size={25} /> },
  { title: "Kindergarten/Nursery", link: "/dashboard/Nursery", icon: <ImCoinDollar size={25} /> },
  { title: "Contact Us", link: "/dashboard/contact", icon: <ImMail2 size={25} /> },
  { title: "About Us", link: "/dashboard/about", icon: <ImAppleinc size={25} /> },
  { title: "Settings", link: "/dashboard/settings", icon: <ImCogs size={25} /> },
];
 