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
    name = null,
    lastName = null,
    role = null,
    country = null,
    city = null
  } = variables;

  // Render cover only if includeCover is true
  const cover = includeCover
    ? `<div class="cover"><img src="${background}" /></div>`
    : `<div class="cover"></div>`;

  // Construimos nombre completo sólo si hay al menos uno
  const fullName = [name, lastName].filter(Boolean).join(" ") || "";

  // Ubicación: ciudad y país, si existen
  const location = [city, country].filter(Boolean).join(", ") || "";

  // Clase para la posición de redes sociales (usa "position-left" o "position-right")
  const socialPositionClass = socialMediaPosition.startsWith("position-")
    ? socialMediaPosition
    : `position-${socialMediaPosition}`;

  // Links sociales sólo si existen las variables
  const twitterLink = twitter
    ? `<li><a href="https://twitter.com/${twitter}" target="_blank"><i class="fa fa-twitter"></i></a></li>`
    : "";
  const githubLink = github
    ? `<li><a href="https://github.com/${github}" target="_blank"><i class="fa fa-github"></i></a></li>`
    : "";
  const linkedinLink = linkedin
    ? `<li><a href="https://linkedin.com/in/${linkedin}" target="_blank"><i class="fa fa-linkedin"></i></a></li>`
    : "";
  const instagramLink = instagram
    ? `<li><a href="https://instagram.com/${instagram}" target="_blank"><i class="fa fa-instagram"></i></a></li>`
    : "";

  // Renderizamos el widget
  document.querySelector("#widget_content").innerHTML = `
    <div class="widget">
      ${cover}
      <img src="${avatarURL}" class="photo" />
      <h1>${fullName}</h1>
      <h2>${role || ""}</h2>
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

/**
 * Don't change any of the lines below, here is where we do the logic for the dropdowns
 */
window.onload = function() {
  window.variables = {
    includeCover: true,
    background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da",
    avatarURL: "https://randomuser.me/api/portraits/women/42.jpg",
    socialMediaPosition: "position-left",
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
  render(window.variables);

  document.querySelectorAll(".picker").forEach(function(elm) {
    elm.addEventListener("change", function(e) {
      const attribute = e.target.getAttribute("for");
      let values = {};
      values[attribute] =
        this.value == "" || this.value == "null"
          ? null
          : this.value == "true"
          ? true
          : this.value == "false"
          ? false
          : this.value;
      render(Object.assign(window.variables, values));
    });
  });
};
