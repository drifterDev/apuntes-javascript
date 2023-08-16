const $links = document.getElementById("links");
const $name = document.querySelector("h1");
const $nickName = document.querySelector("h2");
const $description = document.querySelector("p");

const data = {
  name: "Mateo Álvarez Murillo 🇨🇴",
  nickname: "@drifterDev",
  description: `Student at @platzi - Student at National university of Colombia -
  computer enthusiast, #html #css #javascript #typescript #sass -
  #eternal student`,
  avatar: "...",
  // social: [
  //   {
  //     name: "twitter",
  //     url: "https://twitter.com/",
  //     username: "",
  //   },
  //   {
  //     name: "instagram",
  //     url: "https://instagram.com/",
  //     username: "",
  //   },
  // ],

  links: [
    // {
    //   name: "blog",
    //   url: "https://example.com/",
    //   color: "red",
    //   emoji: "📖",
    // },
    // {
    //   name: "podcast",
    //   url: "https://example.com/",
    //   color: "yellow",
    //   emoji: "💬",
    // },
  ],
  footer: "Made with Love on Colombia",
};

const main = () => {
  let name = document.createTextNode(data?.name);
  let nickname = document.createTextNode(data?.nickname);
  let description = document.createTextNode(data?.description);
  let links = data?.links
    .map((item) => {
      return `<div class="bg-${item.color}-200 px-4 py-5 w-full flex justify-between">
    <a
      class="text-sm font-bold text-${item.color}-600 text-center hover:text-${item.color}-800 cursor-pointer"
      href="${item.url}"
      target="_blank"
    >
    ${item.name}
    </a>
    <span>${item.emoji}</span>
  </div>`;
    })
    .join("");
  let newItem = document.createElement("section");
  newItem.innerHTML = links;
  $links.appendChild(newItem);
  $name.appendChild(name);
  $nickName.appendChild(nickname);
  $description.appendChild(description);
};

main();
