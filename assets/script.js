const forms = document.getElementById("forms");
forms.addEventListener("submit", generateQRCode);

function generateQRCode(e) {
  e.preventDefault();

  const qrCodeApi =
    "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";

  const image = document.getElementById("image");
  const input = document.getElementById("input").value;

  image.src = `${qrCodeApi}${input}`;
}
