// Ambil referensi ke tombol dropdown, elemen dropdown, tombol hamburger, dan menu navigasi
const dropdownBtn = document.querySelectorAll('.dropdown-btn');
const dropdown = document.querySelectorAll('.dropdown');
const hamburgerBtn = document.getElementById('hamburger');
const navMenu = document.querySelector('.menu');
const links = document.querySelectorAll('.dropdown a');

// Fungsi untuk mengatur atribut aria-expanded menjadi false pada semua tombol dropdown
function setAriaExpandedFalse() {
  dropdownBtn.forEach((btn) => btn.setAttribute('aria-expanded', 'false'));
}

// Fungsi untuk menutup dropdown menu
function closeDropdownMenu() {
  dropdown.forEach((drop) => {
    drop.classList.remove('active');
    drop.addEventListener('click', (e) => e.stopPropagation());
  });
}

// Fungsi untuk menampilkan atau menyembunyikan menu navigasi (hamburger menu)
function toggleHamburger() {
  navMenu.classList.toggle('show');
}

// Event listener untuk setiap tombol dropdown
dropdownBtn.forEach((btn) => {
  btn.addEventListener('click', function (e) {
    const dropdownIndex = e.currentTarget.dataset.dropdown;
    const dropdownElement = document.getElementById(dropdownIndex);

    dropdownElement.classList.toggle('active');
    dropdown.forEach((drop) => {
      if (drop.id !== btn.dataset['dropdown']) {
        drop.classList.remove('active');
      }
    });
    e.stopPropagation();
    btn.setAttribute('aria-expanded', btn.getAttribute('aria-expanded') === 'false' ? 'true' : 'false');
  });
});

// Event listener untuk menutup dropdown saat tautan di dalam dropdown diklik
links.forEach((link) =>
  link.addEventListener('click', () => {
    closeDropdownMenu();
    setAriaExpandedFalse();
    toggleHamburger();
  })
);

// Event listener untuk menutup dropdown saat area di luar dropdown atau tombol hamburger diklik
document.documentElement.addEventListener('click', () => {
  closeDropdownMenu();
  setAriaExpandedFalse();
});

// Event listener untuk menutup dropdown saat tombol Escape ditekan
// document.addEventListener('keydown', (e) => {
//   if (e.key === 'Escape') {
//     closeDropdownMenu();
//     setAriaExpandedFalse();
//   }
// });

// Event listener untuk membuka atau menutup menu navigasi (hamburger menu) saat tombol hamburger diklik
hamburgerBtn.addEventListener('click', toggleHamburger);
