import NavBar from "./components/NavBar";
import AddCar from "./components/AddCar";
// import CarRental from "./components/CarRental";
import CarRentalCollectionnew from "./ui-components/CarRentalCollectionnew";
import './App.css';
import { withAuthenticator ,Divider} from "@aws-amplify/ui-react";
import { useState } from "react";
import { DataStore } from "@aws-amplify/datastore";
import { RentalCars } from "./models";



function App({user, signOut}) {

const [name, setName] = useState("")
const [price, setPrice] = useState("")
const [description, setDescription] = useState("")
const [image, setImage] = useState("")

  const saveRentalCar = async () => {
    try {
      await DataStore.save(
        new RentalCars({
          name: name,
          price: parseFloat(price),
          description: description,
          image: image
        })
      );
    } catch (error) {
      console.log(error);
    }
  }
    // console.log(saveRentalCar);
    const addCarOverrides = {
      'TextField29766922': {
        onChange: (e) => {
          setName(e.target.value);
        }
      },
      'TextField29766923': {
        onChange: (e) => {
          setPrice(e.target.value);
        }
      },
      'TextField29766924': {
        onChange: (e) => {
          setDescription(e.target.value);
        }
      },
      'TextField31482711': {
        onChange: (e) => {
          setImage(e.target.value);
        }
      },
      "Button": {
        // eslint-disable-next-line
        onClick: saveRentalCar
      }
    };
    const navbarOverrides = {
      'car--v1 1': {
        src: "https://img.icons8.com/color/50/000000/car--v1.png"
      },
      'image': {
        src: user?.attributes?.profile
      },
      'Sign In': {
        onClick: signOut
      }
    };

    return (
      <div className="App">
        <NavBar overrides={navbarOverrides} width='100%' />
        <header className="App-header">
          <h1>Car Rental App</h1>
          <AddCar overrides={addCarOverrides} style={{ textAlign: 'left', margin: '1rem' }} />
          <Divider />
          <CarRentalCollectionnew />
          {/* <CarRental /> */}
        </header>
      </div>
    );
  }

export default withAuthenticator(App);
