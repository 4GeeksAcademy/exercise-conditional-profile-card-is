import "../style/index.css";

/**
 *  EDIT ONLY INSIDE THIS RENDER FUNCTION
 *  This function is called every time the user changes types or changes any input
 * 
    {
        includeCover: true, // if includeCover is true the algorithm should show the cover image
        background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da", // this is the image's url that will be used as a background for the profile cover
        avatarURL: "https://randomuser.me/api/portraits/women/42.jpg", // this is the url for the profile avatar
        socialMediaPosition: "right", // social media bar position (left or right)
        
        twitter: null, // social media usernames
        github: null,
        linkedin: null,
        instagram: null,

        name: null,
        lastName: null,
        role: null,
        country: null,
        city: null
    }
 */
function render(variables = {}) {
  const {
    includeCover = true,
    background = "https://images.unsplash.com/photo-1511974035430-5de47d3b95da",
    avatarURL = "https://storage.googleapis.com/breathecode-asset-images/3c15f2d5e8b14c8b5bc801cf99a02f1c88a450303a550a875e395b9ae099fa54.jpg",
    socialMediaPosition = "right",
    twitter = null,
    github = null,
    linkedin = null,
    instagram = null,
    name = "",
    lastName = "",
    role = "",
    country = "",
    city = ""
  } = variables;

  const cover = includeCover
    ? `<div class="cover"><img src="${background}" /></div>`
    : `<div class="cover"></div>`;

  const socialLinks = {
    twitter: twitter
      ? `<li><a href="https://twitter.com/${twitter}"><i class="fa fa-twitter"></i></a></li>`
      : "",
    github: github
      ? `<li><a href="https://github.com/${github}"><i class="fa fa-github"></i></a></li>`
      : "",
    linkedin: linkedin
      ? `<li><a href="https://linkedin.com/in/${linkedin}"><i class="fa fa-linkedin"></i></a></li>`
      : "",
    instagram: instagram
      ? `<li><a href="https://instagram.com/${instagram}"><i class="fa fa-instagram"></i></a></li>`
      : ""
  };

  document.querySelector("#widget_content").innerHTML = `
    <div class="widget">
      ${cover}
      <img src="${avatarURL}" class="photo" />
      <h1>${name} ${lastName}</h1>
      <h2>${role}</h2>
      <h3>${city}${city && country ? ", " : ""}${country}</h3>
      <ul class="${socialMediaPosition}">
        ${socialLinks.twitter}
        ${socialLinks.github}
        ${socialLinks.linkedin}
        ${socialLinks.instagram}
      </ul>
    </div>
  `;
  n;
  document.querySelector("#widget_content").innerHTML = `
    <div class="widget">
      ${cover}
      <img src="${variables.avatarURL ||
        "https://via.placeholder.com/150"}" class="photo" />
      <h1>${fullName}</h1>
      <h2>${role}</h2>
      <h3>${location}</h3>
      <ul class="${socialPositionClass}">
        ${twitterLink}
        ${githubLink}
        ${linkedinLink}
        ${instagramLink}
      </ul>
    </div>
  `;
}
// reset the website body with the new html output
document.querySelector("#widget_content").innerHTML = `<div class="widget">
            ${cover}
          <img src="${variables.avatarURL}" class="photo" />
          <h1>Lucy Boilett</h1>
          <h2>Web Developer</h2>
          <h3>Miami, USA</h3>
          <ul class="position-right">
            <li><a href="https://twitter.com/4geeksacademy"><i class="fab fa-twitter"></i></a></li>
            <li><a href="https://github.com/4geeksacademy"><i class="fab fa-github"></i></a></li>
            <li><a href="https://linkedin.com/school/4geeksacademy"><i class="fab fa-linkedin"></i></a></li>
            <li><a href="https://instagram.com/4geeksacademy"><i class="fab fa-instagram"></i></a></li>
          </ul>
        </div>
    `;

/**
 * Don't change any of the lines below, here is where we do the logic for the dropdowns
 */
window.onload = function() {
  window.variables = {
    // if includeCover is true the algorithm should show the cover image
    includeCover: true,
    // this is the image's url that will be used as a background for the profile cover
    background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da",
    // this is the url for the profile avatar
    avatarURL: "https://randomuser.me/api/portraits/women/42.jpg",
    // social media bar position (left or right)
    socialMediaPosition: "position-left",
    // social media usernames
    twitter: null,
    github: null,
    linkedin: null,
    instagram: null,
    name: null,
    lastName: null,
    role: null,
    country: null,
    city: null
  };
  render(window.variables); // render the card for the first time

  document.querySelectorAll(".picker").forEach(function(elm) {
    elm.addEventListener("change", function(e) {
      // <- add a listener to every input
      const attribute = e.target.getAttribute("for"); // when any input changes, collect the value
      let values = {};
      values[attribute] =
        this.value == "" || this.value == "null"
          ? null
          : this.value == "true"
          ? true
          : this.value == "false"
          ? false
          : this.value;
      render(Object.assign(window.variables, values)); // render again the card with new values
    });
  });
};
