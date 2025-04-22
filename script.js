document.addEventListener("DOMContentLoaded", function () {
  const downloadButtons = document.querySelectorAll(
    ".download-btn, .cta-download-btn"
  );
  const playStoreButton = document.querySelector(".footer-download-btn");
  const appUrl = "https://app.litvibes.club/5bkS/hct7qstc";

  downloadButtons.forEach((btn) => {
    btn.addEventListener("click", function () {
      window.open(appUrl, "_blank");
    });
  });

  if (playStoreButton) {
    playStoreButton.addEventListener("click", function () {
      window.open(appUrl, "_blank");
    });
  }
});
