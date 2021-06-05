const tabItems = document.querySelectorAll(".tab-item");
const tabContentItems = document.querySelectorAll(".tab-content-item");

// select a tab content item

function selectItem(e) {
  removeBorder();
  removeShow();
  //add border to current tab
  this.classList.add("tab-border");

  // add show class to content item
  const tabContentItem = document.querySelector(`#${this.id}-content`);

  tabContentItem.classList.remove("show");
  tabContentItem.classList.add("show");
}

//remove border from current tabs
function removeBorder() {
  tabItems.forEach((item) => {
    item.classList.remove("tab-border");
  });
}

// Listen for a tab icon click
tabItems.forEach((item) => {
  item.addEventListener("click", selectItem);
});

//remove show class  from current tab
function removeShow() {
  tabContentItems.forEach((item) => {
    item.classList.remove("show");
  });
}
