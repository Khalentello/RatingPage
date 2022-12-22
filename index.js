const ratingPage = document.querySelector(".ratingPage");
const thankYouPage = document.querySelector(".thankYouScreen");
const ratingValueContainer = document.querySelector(".ratingValue");

const submitBtn = document.querySelector(".submitButton");

submitBtn.addEventListener("click", submitRating);

function submitRating() {
  let rating = document.querySelector('input[name="rating"]:checked');
  if (rating != null) {
    let ratingValue = rating.value;
    ratingValueContainer.innerText = `You selected ${ratingValue}  out of 5`;
    ratingPage.classList.toggle("inactive");
    thankYouPage.classList.toggle("inactive");

    console.log(ratingValue);
    return;
  } else {
    alert("Select a rating Please :)");
    return;
  }
}
