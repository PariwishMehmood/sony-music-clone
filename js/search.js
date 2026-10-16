const searchInput = document.getElementById("artistSearch");
const artists = document.querySelectorAll(".artist-card");

searchInput.addEventListener("keyup", function () {

    const searchText = searchInput.value.toLowerCase();

    artists.forEach(function (artist) {

        const artistName = artist.querySelector("h3").textContent.toLowerCase();

        if (artistName.includes(searchText)) {
            artist.style.display = "block";
        } else {
            artist.style.display = "none";
        }

    });

});