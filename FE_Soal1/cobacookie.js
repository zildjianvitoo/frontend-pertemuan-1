// Mengecek cookie yang ada atau belum
let visitCount = parseInt(getCookie("visitCount"));
if(isNaN(visitCount)) {
  // Jika belum ada, set nilai awal menjadi 1
  visitCount = 1;
} else {
  // Jika sudah ada, tambahkan 1 pada nilai yang sudah ada
  visitCount++;
}
// Set cookie dengan nilai baru
setCookie("visitCount", visitCount, 365);

// Menampilkan jumlah kunjungan pada halaman HTML
document.getElementById("visit-count").innerText = visitCount;

// Fungsi untuk mengambil nilai cookie
function getCookie(name) {
  let value = "; " + document.cookie;
  let parts = value.split("; " + name + "=");
  if (parts.length === 2) {
    return parts.pop().split(";").shift();
  }
}

// Fungsi untuk menyetel cookie
function setCookie(name, value, days) {
  let expires = "";
  if (days) {
    let date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}
