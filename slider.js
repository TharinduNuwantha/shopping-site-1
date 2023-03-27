const navList = document.querySelector(".nav_list");

document.querySelector(".hambager").onclick = () => {
  navList.classList.add("show");
  navList.getElementsByClassName.right='0';
};

document.querySelector(".colse").onclick = () => {
  navList.classList.remove("show");
};