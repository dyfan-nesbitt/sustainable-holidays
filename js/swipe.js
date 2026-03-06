document.addEventListener("DOMContentLoaded", () => {

  let currentIndex = 0;
  let likedHolidays = [];

  // Drag state
  let startX = 0;
  let currentX = 0;
  let isDragging = false;
  const card = document.getElementById("card");

  // Mouse events
  card.addEventListener("mousedown", dragStart);
  document.addEventListener("mousemove", dragMove);
  document.addEventListener("mouseup", dragEnd);

  function dragStart(e) {
    isDragging = true;
    startX = e.clientX;
    card.style.transition = "none";
  }

  function dragMove(e) {
    if (!isDragging) return;
    currentX = e.clientX - startX;

    const rotate = currentX * 0.1;
    card.style.transform = `translateX(${currentX}px) rotate(${rotate}deg)`;

    // Show like / dislike when dragging
    if (currentX > 50) {
      card.style.borderColor = "green";
    } else if (currentX < -50) {
      card.style.borderColor = "red";
    } else {
      card.style.borderColor = "#333";
    }
  }

  function dragEnd(e) {
    if (!isDragging) return;
    isDragging = false;

    const threshold = 100;

    if (currentX > threshold) {
      // Swiped right
      flyOut("right");
    } else if (currentX < -threshold) {
      // Swiped left
      flyOut("left");
    } else {
      // Snap to centre 
      card.style.transition = "transform 0.3s ease";
      card.style.transform = "translateX(0) rotate(0deg)";
      card.style.borderColor = "#333";
    }

    currentX = 0;
  }

  function flyOut(direction) {
    card.style.transition = "transform 0.4s ease, opacity 0.4s ease";

    if (direction === "right") {
      card.style.transform = "translateX(150%) rotate(20deg)";
      likedHolidays.push(holidays[currentIndex].id);
    } else {
      card.style.transform = "translateX(-150%) rotate(-20deg)";
    }

    card.style.opacity = "0";

    setTimeout(() => {
      card.style.transition = "none";
      card.style.transform = "translateX(0) rotate(0deg)";
      card.style.opacity = "1";
      card.style.borderColor = "#333";
      currentIndex++;
      loadCard(currentIndex);
    }, 400);
  }

  function loadCard(index) {
    if (index >= holidays.length) {
      finish();
      return;
    }

    const h = holidays[index];
    if (h) {
      document.getElementById("cardImage").src = h.image;
      document.getElementById("cardDestination").textContent = h.destination;
      document.getElementById("cardDescription").textContent = h.description;
      document.getElementById("cardCost").textContent = "£" + h.cost;
      document.getElementById("cardCarbon").textContent = h.carbonScore + "kg";
      document.getElementById("cardDuration").textContent =
        h.duration + " days";
      document.getElementById("progress").textContent =
        `Card ${index + 1} of ${holidays.length}`;
    }
  }

  function swipe(direction) {
    // if (direction === "like") {
    //   likedHolidays.push(holidays[currentIndex].id);
    // }
    // currentIndex++;
    // loadCard(currentIndex);
    flyOut(direction === "like" ? "right": "left");
  }

  function finish() {
    localStorage.setItem("likedHolidays", JSON.stringify(likedHolidays));
    const result = findMatch(likedHolidays);
    localStorage.setItem("matchedProfile", JSON.stringify(result.match));
    localStorage.setItem("compatibility", result.compatibility);
    window.location.href = "match.html";
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") swipe("like");
    if (e.key === "ArrowLeft") swipe("dislike");
  });

  window.swipe = swipe;

  loadCard(0);
});
