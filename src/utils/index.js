const getInitialData = () => {
  return [
    {
      id: 1,
      title: "ES6+ Sintaksis",
      body: "Kita akan banyak memanfaatkan sintaksis dan fitur JavaScript terbaru (ES6 ke atas) untuk mendapatkan pengalaman yang maksimal dalam menggunakan React. Jadi, biasakan diri Anda untuk menggunakan sintaksis, seperti const, let, class, rest parameter, spread operator, destructuring, default parameter, dan arrow function. Anda juga harus terbiasa dengan penggunaan Promise dan async/await.",
      createdAt: "2022-09-04T04:27:34.572Z",
      archived: false,
    },
    {
      id: 2,
      title: "React DOM",
      body: "React hanyalah library untuk membangun antarmuka pengguna. React dapat digunakan tak hanya untuk aplikasi web, tetapi juga dapat digunakan untuk membangun aplikasi Android dan iOS dengan bantuan React Native. Lain halnya dengan React DOM yang dibutuhkan ketika Anda ingin mengembangkan aplikasi React untuk platform web.",
      createdAt: "2022-09-04T04:27:34.572Z",
      archived: false,
    },
    {
      id: 3,
      title: "React Router",
      body: "React Router adalah salah satu ekosistem React untuk memudahkan implementasi routing di React. Kita akan membutuhkan ini ketika ingin membuat aplikasi yang memiliki lebih dari satu halaman.",
      createdAt: "2022-09-04T04:27:34.572Z",
      archived: false,
    },
    {
      id: 4,
      title: "Redux",
      body: "State merupakan salah satu konsep inti dari React. Secara standar, state bersifat lokal dan hidup di dalam komponen. Dengan Redux, kita bisa membuat state secara terpusat dan bersifat global.",
      createdAt: "2022-09-04T04:27:34.572Z",
      archived: false,
    },
    {
      id: 5,
      title: "Jest",
      body: "Ia merupakan JavaScript testing framework yang dibuat oleh The Meta Open Source team (pengembang yang sama dengan React). Dengan Jest, kita dapat menguji mulai dari kode JavaScript hingga komponen React secara lebih mudah.",
      createdAt: "2022-09-04T04:27:34.572Z",
      archived: false,
    },
    {
      id: 6,
      title: "Imperatif",
      body: "Penulisan kode yang menjelaskan secara detail langkah demi langkah untuk mencapai tujuan.",
      createdAt: "2022-09-04T04:27:34.572Z",
      archived: true,
    },
    {
      id: 7,
      title: "Deklaratif",
      body: "Penulisan kode yang ringkas dan jelas dengan mendeklarasikan apa yang ingin dicapai tanpa menuliskan langkah demi langkah.",
      createdAt: "2022-09-04T04:27:34.572Z",
      archived: true,
    },
  ];
}

const showFormattedDate = (date) => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date(date).toLocaleDateString("id-ID", options);
};

export { getInitialData, showFormattedDate };
