// Seleksi semua elemen <div>
const divs = document.getElementsByTagName("div");

// Loop untuk mengubah background menjadi hitam pada setiap elemen <div>
for (let i = 0; i < divs.length; i++) {
  divs[i].style.backgroundColor = "black"; // Mengubah warna background menjadi hitam
}

// Seleksi semua elemen <a>
const links = document.getElementsByTagName("a");

// Loop untuk mencari dan mengubah href yang berisi "#"
for (let i = 0; i < links.length; i++) {
  if (links[i].getAttribute("href") === "#") {
    links[i].setAttribute("href", "https://www.google.com"); // Mengubah href menjadi https://www.google.com
  }
}

// Loop untuk mencari div dengan id "container2"
for (let i = 0; i < divs.length; i++) {
  if (divs[i].id === "container2") {
    // Mengubah teks di dalam container2
    divs[i].innerHTML = "<h2>Sulthon Aqthoris Sama</h2><p>NIM.</p>";

    // Mengubah style font size
    divs[i].style.fontSize = "18px";

    // Mengubah warna background menjadi putih
    divs[i].style.backgroundColor = "pink";

    // Mengubah warna teks menjadi hitam
    divs[i].style.color = "black";
  }
}
