
// import { Heading } from "./Heading";
// import { Para } from "./Para";
// import { Navigation } from "./Navigation";
// import { Person } from "./Person";
// import { Person1 } from "./Person1";
import image1 from "./images/1.png";
import image2 from "./images/3.png";
import BulkImages from "./BulkImages";
function App() {
  let height = 100;
  let width = 100
  return (
    <>
      {/*--------------Individual components create--------- */}
      {/* <Heading />
      <Para />
      <Navigation /> */}
      {/*--------- props concept------------------ */}
      {/* <Person name="Keerthi" age={31} profession="UI dev" city="Pune" />
      <Person name="Sandesh" age={36} profession="Manager" city="Delhi" />

      <hr />

      <Person1 name="Rushika" age={8} profession="Study" city="Pune" />
      <Person1 name="Satwika" age={5} profession="UKG" city="Delhi" /> */}

      {/*images upload */}
      {/*individual image upload */}
      <img src={image1} alt="" height={height} width={width} />
      <img src={image2} alt="" height={height} width={width} />

      {/*using bulk images by image object */}
      {/* <img src={imageObj.image4} height={height} width={width} /> */}
      {/*---------using json-------- */}
      {
        BulkImages.map((item) => {
          return (<li key={item.id}>
            <img src={item.img} alt="" width={width} height={height} />
          </li>)
        })
      }
    </>
  )
}

export default App
