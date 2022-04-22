import Compony from "./components/Compony";

function App() {
  let OperatingSystem = ["Android", "Blackberry", "iPhone", "Windows Phone"];
  let manfacturers = ["Samsung", "HTC", "Micromax", "Apple"];

  let data = [
    {
      title: "Mobile Operating System",
      items: [
        { product: "Android" },
        { product: "Blackberry" },
        { product: "iPhone" },
        { product: "Windows Phone" },
      ],
    },
    {
      title: "Mobile Manfacturers",
      items: [
        { product: "Samsung", listStyle: "square" },
        { product: "HTC", listStyle: "square" },
        { product: "Micromax" },
        { product: "Apple", listStyle: "circle" },
      ],
    },
  ];

  return (
    <div>
      { data.map(elem => <Compony data={elem}/>)}
    </div>
  );
}

export default App;