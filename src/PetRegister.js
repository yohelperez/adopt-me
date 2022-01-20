import { useEffect, useState, useContext } from "react";

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];
const ALPHABET = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

const PetRegister = () => {
  const [animal, updateAnimal] = useState("");
  const [location, updateLocation] = useState("");
  const [name, updateName] = useState("");
  const [breed, updateBreed] = useState("");

  return (
    <div className="search-params">
      
      <form

        onSubmit={(e) => {
          alert(`Submitted Succesfully!: \n
          Location: ${location} \n
          Name: ${name} \n
          Animal: ${animal} \n
          Breed: ${breed}`)
        }}
      >
        <h3 className="search-params">Pet Register</h3>
        <br></br>

        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={(e) => updateLocation(e.target.value)}
          />
        </label>

        <label htmlFor="Name">
          Name
          <input
            id="name"
            value={name}
            placeholder="name"
            onChange={(e) => updateName(e.target.value)}
          />
        </label>

        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={animal}
            onChange={(e) => updateAnimal(e.target.value)}
            onBlur={(e) => updateAnimal(e.target.value)}
          >
            <option />
              {
                ANIMALS.map((animal) => (
                  <option key={animal} value={animal}>
                    {animal}

                  </option>
                ))
              }
          
          </select>
        </label>
        <label htmlFor="breed">
          Breed
          <input
          id="breed"
          value={breed}
          onChange={(e) => updateBreed(e.target.value)}
          >
          </input>
        </label>

        <button>Submit</button>
      </form>
    </div>
  );
};

export default PetRegister;
