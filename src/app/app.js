let searchEngineSelection = 0;

const searchEngines = [
  {
    src: "goog.svg",
    action: "https://www.google.com/search?q="
  },
  {
    src: "ddg.svg",
    action: "https://www.duckduckgo.com/"
  },
  {
    src: "reddit.svg",
    action: "https://www.reddit.com/search?q="
  },
  {
    src: "youtube.svg",
    action: "https://www.youtube.com/results?q="
  }
];

window.addEventListener('load', (event) => {
  let time = getCurrentTime();
  displayTime(time);
});

setInterval(function () {
  let time = getCurrentTime();
  displayTime(time);
}, 1000);

function getCurrentTime() {
  let today = new Date();
  return today.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit'
  });
}

function displayTime(time) {
  document.getElementById("time").innerHTML = time;
}

function isSearchEmpty() {
  return document.forms["search-form"]["q"].value == "";
}

document.getElementById("search-input").addEventListener('keypress', function (event) {
  if (event.key == 'Enter' && isSearchEmpty()) {
    event.preventDefault();
  }
});

document.getElementById("search-input").addEventListener("keydown", function(event) {
  if (event.key == 'ArrowUp') {
    searchEngineSelection++;
    cycleSearchEngines(searchEngineSelection);
  }
  if (event.key == 'ArrowDown') {
    searchEngineSelection == 0 ? searchEngineSelection = searchEngines.length -1 : searchEngineSelection--;
    cycleSearchEngines(searchEngineSelection);
  }
});

function cycleSearchEngines(searchEngine) {
  const curData = searchEngines[(searchEngine) % searchEngines.length];
  document.getElementById("search-icon").src = "../assets/icons/" + curData.src;
  document.getElementById("search-form").action = curData.action;
};