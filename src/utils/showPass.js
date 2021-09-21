import see from "../img/see.svg";
import nosee from "../img/nosee.svg";

export const ShowPass = (event) => {
  const item = event.target;
  let imgItem = item.src;
  item.classList.toggle("visible");
  if (item.classList.contains("visible")) {
    imgItem = { nosee };
    item.type = "text";
  } else {
    imgItem = { see };
    item.type = "password";
  }
};
