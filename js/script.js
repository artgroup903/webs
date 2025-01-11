// script.js
document.addEventListener("DOMContentLoaded", function () {
    var popup = document.getElementById("popup");
    var openPopupLink = document.getElementById("openPopup");
    var closePopup = document.querySelector(".close");

    openPopupLink.addEventListener("click", function (event) {
        event.preventDefault();
        popup.style.display = "flex";
    });

    closePopup.addEventListener("click", function () {
        popup.style.display = "none";
    });

    window.addEventListener("click", function (event) {
        if (event.target == popup) {
            popup.style.display = "none";
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    var popup = document.getElementById("popup");
    var openPopupLink = document.getElementById("openPopup1");
    var closePopup = document.querySelector(".close");

    openPopupLink.addEventListener("click", function (event) {
        event.preventDefault();
        popup.style.display = "flex";
    });

    closePopup.addEventListener("click", function () {
        popup.style.display = "none";
    });

    window.addEventListener("click", function (event) {
        if (event.target == popup) {
            popup.style.display = "none";
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    var popup = document.getElementById("popup");
    var openPopupLink = document.getElementById("openPopup3");
    var closePopup = document.querySelector(".close");

    openPopupLink.addEventListener("click", function (event) {
        event.preventDefault();
        popup.style.display = "flex";
    });

    closePopup.addEventListener("click", function () {
        popup.style.display = "none";
    });

    window.addEventListener("click", function (event) {
        if (event.target == popup) {
            popup.style.display = "none";
        }
    });
});
/*document.addEventListener("DOMContentLoaded", function () {
  const popup = document.getElementById("popup");
  const closeButtons = document.querySelectorAll(".close, .closePopup");
  const openPopupButtons = document.querySelectorAll(".openPopup");
  const schemeTitle = document.getElementById("schemeTitle");

  openPopupButtons.forEach(button => {
    button.addEventListener("click", function () {
      const schemeName = this.getAttribute("data-scheme");
      schemeTitle.textContent = `Scheme: ${schemeName}`;
      popup.style.display = "block";
    });
  });

  closeButtons.forEach(button => {
    button.addEventListener("click", function () {
      popup.style.display = "none";
    });
  });

  // Close popup when clicking outside the content
  window.addEventListener("click", function (event) {
    if (event.target === popup) {
      popup.style.display = "none";
    }
  });
});*/

/*function filterBranches() {
    const filterText = document.getElementById('branchFilter').value.toLowerCase();
    const branches = document.querySelectorAll('.branchBox');

    branches.forEach(branch => {
      const branchName = branch.querySelector('h4').textContent.toLowerCase();
      if (branchName.includes(filterText)) {
        branch.style.display = '';
      } else {
        branch.style.display = 'none';
      }
    });
  }
    */

  function filterBranches() {
    // Get the filter text from the input
    const filterText = document.getElementById('branchFilter').value.toLowerCase();
    const branches = document.querySelectorAll('.branchBox');

    // Loop through each branch
    branches.forEach(branch => {
        const branchName = branch.querySelector('h4').textContent.toLowerCase();
        
        // Show or hide branches based on the filter text
        if (branchName.includes(filterText)) {
            branch.style.display = ''; // Show branch
        } else {
            branch.style.display = 'none'; // Hide branch
        }
    });
}

/*document.addEventListener("DOMContentLoaded", function () {
  var popup = document.getElementById("popup");
  var openPopupLink = document.getElementById("schememore");
  var closePopup = document.querySelector(".close");

  if (openPopupLink) {
      openPopupLink.addEventListener("click", function (event) {
          event.preventDefault();
          popup.style.display = "flex";
      });
  }

  if (closePopup) {
      closePopup.addEventListener("click", function () {
          popup.style.display = "none";
      });
  }

  window.addEventListener("click", function (event) {
      if (event.target == popup) {
          popup.style.display = "none";
      }
  });
});*/
