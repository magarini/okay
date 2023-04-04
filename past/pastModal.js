 // PAST-MODAL

        // Get the pastmodal
        var pastModal = document.getElementById("pastModal");

        // Get the button that opens the modal
        var pastBtn = document.getElementById("past");

        // Get the <span> element that closes the modal
        var pastSpan = document.getElementsByClassName("close")[0];

        // When the user clicks the button, open the modal 
        pastBtn.onclick = function () {
            pastModal.style.display = "block";
        }

        // When the user clicks on <span> (x), close the modal
        pastSpan.onclick = function () {
            pastModal.style.display = "none";
        }

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function (event) {
            if (event.target == pastModal) {
                pastModal.style.display = "none";
            }
        }
