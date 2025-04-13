import { AiOutlineHome, AiOutlineFundProjectionScreen, AiOutlineUser } from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
import { FaBriefcase } from "react-icons/fa";

const navLinks = [
  { to: "/", label: "Home", icon: <AiOutlineHome /> },
  { to: "/about", label: "Sobre", icon: <AiOutlineUser /> },
  { to: "/experience", label: "Experiências", icon: <FaBriefcase /> },
  { to: "/project", label: "Projects", icon: <AiOutlineFundProjectionScreen /> },
  { to: "/resume", label: "Resumo", icon: <CgFileDocument /> },
];

export default navLinks;
