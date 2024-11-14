const findTheOldest = function(people) {
    const ages = [];

    function getAge(birth, death){
        if(!death){
            death = new Date().getFullYear();
        }
        age = death - birth;
        return age;
    }

    
};
/*
if people[i].yearOfDeath = undefined, then
people[i].yearOfDeath =  date.getFullYear();
*/
// Do not edit below this line
module.exports = findTheOldest;
