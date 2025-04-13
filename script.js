document.getElementById("generar").addEventListener("click", function() {
    const texto = document.getElementById("input-text").value;
    
    if (texto === "") {
      alert("Por favor, ingresa un texto o URL.");
      return;
    }
  
    // Limpiar cualquier QR anterior
    document.getElementById("qr-code").innerHTML = "";
  
    // Generar el código QR
    const qrCode = new QRCode(document.getElementById("qr-code"), {
      text: texto,
      width: 200,
      height: 200,
      colorDark: "#000000",
      colorLight: "#ffffff",
      correctLevel: QRCode.CorrectLevel.H
    });
  });
  