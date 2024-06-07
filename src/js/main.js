import "../css/style.css";
import { loadHeaderFooter } from "./utils.mjs";
import { createIcons, Menu, ArrowRight, Globe } from "lucide";

loadHeaderFooter();

// toggle menu in small view
const toggleMenu = () => {
    document.querySelector('#menu').classList.toggle('open');
}

document.querySelector('#toggleMenu').addEventListener('click', toggleMenu);

createIcons({
  icons: {
    Menu,
    ArrowRight,
    Globe
  }
});
