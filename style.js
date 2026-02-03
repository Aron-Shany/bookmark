let bookmarkFormEl = document.getElementById("bookmarkForm");
let siteNameInputEl = document.getElementById("siteNameInput");
let siteNameErrMsgEl = document.getElementById("siteNameErrMsg");
let siteUrlInputEl = document.getElementById("siteUrlInput");
let siteUrlErrMsgEl = document.getElementById("siteUrlErrMsg");
let bookmarksListEl = document.getElementById("bookmarksList");

let errorMsg = "Required*";



// Fixed createBookmarkItem with required structure
function createBookmarkItem(name, url) {
    const li = document.createElement("li");
    li.className = "bookmark d-flex flex-column";

    const nameEl = document.createElement("p");
    nameEl.className = "site-name";
    nameEl.textContent = name;

    const link = document.createElement("a");
    link.href = url;
    link.target = "_blank";
    link.textContent = url;
    link.classList.add("mt-1");

    li.appendChild(nameEl);
    li.appendChild(link);
    bookmarksListEl.appendChild(li);
}


siteNameInputEl.addEventListener("change", function(event) {
    siteNameErrMsgEl.textContent = event.target.value ? "" : "Required*";
});
siteUrlInputEl.addEventListener("change", function(event) {
    siteUrlErrMsgEl.textContent = event.target.value ? "" : "Required*";
});




bookmarkFormEl.addEventListener("submit", function(event) {
    event.preventDefault();
    const isValid = siteNameInputEl.value && siteUrlInputEl.value;

    if (isValid) {

        createBookmarkItem(siteNameInputEl.value, siteUrlInputEl.value);
        bookmarkFormEl.reset();
        siteNameErrMsgEl.textContent = "";
        siteUrlErrMsgEl.textContent = "";


    } else {
        if (!siteNameInputEl.value) siteNameErrMsgEl.textContent = errorMsg;
        if (!siteUrlInputEl.value) siteUrlErrMsgEl.textContent = errorMsg;
    }
});