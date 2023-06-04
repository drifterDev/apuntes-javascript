export function createPetList() {
  const petList = [];
  return function addPet(myPet) {
    if (myPet) {
      petList.push(myPet);
    }
    return petList;
  };
}

const myPetList = createPetList();
myPetList("michi");
myPetList("firulais");
myPetList();
