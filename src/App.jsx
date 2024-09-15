import { useEffect, useState } from "react";
import Input from "./Input";
import cities from "./cities.json";

function App() {
  const [searchedValue, setSearchedValue] = useState("");
  const [hint, setHint] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    for (let index = 0; index < cities.length; index++) {
      if (cities[index].startsWith(searchedValue) && searchedValue !== "") {
        setHint(cities[index]);
        break;
      }
    }
  }, [searchedValue]);

  function handleChange(event) {
    setHint("");
    setSearchedValue(event.target.value);
  }
  function toggleHandler() {
    setIsOpen((prev) => !prev);
    setHint("");
    setSearchedValue("");
  }
  return (
    <Input
      handleChange={handleChange}
      hint={hint}
      toggleHandler={toggleHandler}
      isOpen={isOpen}
      searchedValue={searchedValue}
    />
  );
}
export default App;
