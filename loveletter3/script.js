document.addEventListener("DOMContentLoaded", function () {
  const popupBtn = document.getElementById("popupBtn");

  popupBtn.addEventListener("click", function () {
    alert("You’ve opened the love letter 💌");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const popupBtn1 = document.getElementById("popupBtn1");
  const popupBtn2 = document.getElementById("popupBtn2");

  popupBtn1.addEventListener("click", function () {
    alert("You’ve opened the love letter 💌");
  });

  popupBtn2.addEventListener("click", function () {
    alert("A reply has been sent with love 💬❤️");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const popupBtn = document.getElementById("popupBtn");
  const modal = document.querySelector(".modal");
  const secondModal = document.getElementById("secondModal");
  const closeBtn = document.querySelector(".modal-content button");
  const closeSecond = document.getElementById("closeSecond");

  popupBtn.addEventListener("click", function () {
    modal.style.display = "block";
  });

  closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
    // Show second popup after closing first
    secondModal.style.display = "block";
  });

  closeSecond.addEventListener("click", function () {
    secondModal.style.display = "none";
  });
});
