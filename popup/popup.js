const btns = document.querySelectorAll(".popup-btn");
const popupsOverlay = document.querySelector(".popups-body");
const popups = document.querySelectorAll(".popup-bg");

btns.forEach((el) => {
  el.addEventListener("click", (e) => {
    let path = e.currentTarget.getAttribute("data-path");

    popups.forEach((el) => {
      el.classList.remove("popup--visible");
    });

    document
      .querySelector(`[data-target="${path}"]`)
      .classList.add("popup--visible");
    popupsOverlay.classList.add("popup-overlay--visible");
  });
});

popupsOverlay.addEventListener("click", (e) => {
  console.log(e.target);

  if (e.target == popupsOverlay) {
    popupsOverlay.classList.remove("popup-overlay--visible");
    popups.forEach((el) => {
      el.classList.remove("popup--visible");
    });
  }
});
