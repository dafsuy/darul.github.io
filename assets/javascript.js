function myFunction() {
    // mengambil objek dari navigasi
    var x = document.getElementById("myNavigation");
    // percabangan untuk mengubah nama class untuk menampilkan navigasi yang tersembunyi
    if (x.className === "navigation") {
      x.className += " responsive";
    } else {
      x.className = "navigation";
    }
  }