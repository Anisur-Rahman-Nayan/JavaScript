function animalCount(miles){
    const animalDensityFirst10Miles = 10
    const animalDensitySecondMiles = 50
    const animalDensityRestMiles = 100

    if(miles<=10){
        const count = miles * animalDensityFirst10Miles;
        return count;
    }
    else if (miles <=20){
        const firstDenseAnimals = 10 * animalDensityFirst10Miles;
        const restMiles = miles - 10
        const secondDenseAnimals = restMiles * animalDensitySecondMiles
        const totalAnimals = firstDenseAnimals + secondDenseAnimals;
        return totalAnimals
    }
    else{
        const firstDenseAnimals = 10 * animalDensityFirst10Miles;
        const secondDenseAnimals = 10 * animalDensitySecondMiles
        const restMiles = miles - 20;
        const restDenseAnimal = restMiles* animalDensityRestMiles;
        const totalAnimals = firstDenseAnimals + secondDenseAnimals + restDenseAnimal
        return totalAnimals
    }
}
const animal = animalCount(35);
console.log(animal)