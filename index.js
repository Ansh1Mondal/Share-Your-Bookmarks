console.log("Hello World");

// const urlSearchParams = new URLSearchParams(window.location.search);
// const params = Object.fromEntries(urlSearchParams.entries());
// console.log(params);
// const domain = params.domain;
// const subDomain = params.subdomain;

const showNames = () => {
  if (data != "") {
    for (let i = 0; i < data.length; i++) {
      showData.innerHTML += `
          <div class="singlePerson" >
            <button id="displayName" onclick="getElement()">${data[i].username}</span></button>
            </div>
          `;
    }
  }
};

// const getElement = () => {
//   let p = document.getElementById("displayName").innerText;
//   console.log(p);
// };

const fetchData = async () => {
  try {
    const alldata = await fetch(`./data.json`);
    data = await alldata.json();
    await showNames();
    console.log(data);
  } catch (e) {
    throw new Error(e);
  }
};

fetchData();
