let form = document.querySelector("form");
let input = document.querySelector("input");
let select = document.querySelector("#size");
let image = document.querySelector("img");
let downloadBtn = document.querySelector(".download");

const getQRCode = async (e) => {
  e.preventDefault();
  const response = await fetch(
    `https://api.qrserver.com/v1/create-qr-code/?size=${size.value}&data=${input.value}`
  );
  image.setAttribute("src", response.url);
  form.reset();
};
form.addEventListener("submit", getQRCode);

const getDownload = async (e) => {
  e.preventDefault();
  const response = await fetch(image.src);
  const blob = await response.blob();
  const downloadLink = document.createElement("a");
  downloadLink.href = URL.createObjectURL(blob);
  downloadLink.download = "qrcode.jpg";
  downloadLink.click();
};
downloadBtn.addEventListener("click", getDownload);
