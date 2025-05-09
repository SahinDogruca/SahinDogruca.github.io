const inp_artist = document.getElementById("artist");
const inp_song = document.getElementById("song");
const btn_search = document.getElementById("search");
const lyrics = document.querySelector(".card .lyrics");
const header = document.querySelector(".card-body__header span");
const btn_copy = document.querySelector(".btn_copy");
var isDataAvailable = false;
var copy_data = "";

const btn_copyEffect = () => {
  // Visual feedback
  btn_copy.innerHTML = "✓ Copied!";
  btn_copy.classList.add("copied");

  // Reset button after 2 seconds
  setTimeout(() => {
    btn_copy.innerHTML = "Copy";
    btn_copy.classList.remove("copied");
  }, 2000);
};

btn_copy.addEventListener("click", (e) => {
  e.preventDefault();

  if (copy_data !== "") {
    navigator.clipboard.writeText(copy_data);
    btn_copyEffect();
  }
});

btn_search.addEventListener("click", async (e) => {
  e.preventDefault();
  if (lyrics.classList.contains("active")) {
    lyrics.classList.remove("active");
  }
  header.textContent = "Loading ...";

  const artist = inp_artist.value.trim();
  const song = inp_song.value.trim();

  const query = `${artist}/${song}`;

  lyrics.innerHTML = "";

  const data = await fetch(`https://api.lyrics.ovh/v1/${query}`)
    .then((res) => {
      if (res.ok) {
        lyrics.classList.add("active");
        return res.json();
      }
      throw new Error("😕 Lyrics Not Available!!!");
    })
    .catch((e) => {
      header.textContent = e.message;
      isDataAvailable = false;
    });

  if (data) {
    header.textContent = `${artist} - ${song}`;
    const lines = data.lyrics.split("\n");
    var content = "";
    lines.forEach((line) => {
      if (line.length != 0)
        content += `<li class="lyrics-line">${line.trim()}</li>`;
    });
    lyrics.innerHTML = content;
    isDataAvailable = true;
    btn_copy.disabled = false;
    copy_data = data.lyrics;
  }
});

const themeToggle = document.getElementById("theme-toggle");
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

// Sistem temasını kontrol et
if (prefersDarkScheme.matches) {
  document.body.classList.add("dark-mode");
  themeToggle.textContent = "☀️";
}

// Toggle butonu işlevi
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  const isDark = document.body.classList.contains("dark-mode");
  themeToggle.textContent = isDark ? "☀️" : "🌙";

  // LocalStorage'da tema tercihini sakla
  localStorage.setItem("darkMode", isDark);
});

// Sayfa yüklendiğinde localStorage'dan tema tercihini yükle
if (localStorage.getItem("darkMode") === "true") {
  document.body.classList.add("dark-mode");
  themeToggle.textContent = "☀️";
}
