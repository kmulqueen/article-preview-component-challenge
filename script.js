const authorSection = document.getElementById("article-author");
const toastSection = document.getElementById("share-toast");
const shareBtnAuthor = document.getElementById("share-button-author");
const shareBtnToast = document.getElementById("share-button-toast");

/**
 * Toggles the toast section visibility.
 */
function toggleShareToast() {
  toastSection.classList.toggle("hidden");
  const isHidden = toastSection.classList.contains("hidden");
  toastSection.setAttribute("aria-hidden", isHidden);

  // Handle mobile layout - toggle author section visibility
  const maxMobileSize = 768;
  const deviceWidth = window.innerWidth;

  if (deviceWidth < maxMobileSize) {
    authorSection.classList.toggle("hidden");
  }
}

shareBtnAuthor.addEventListener("click", toggleShareToast);
shareBtnToast.addEventListener("click", toggleShareToast);
