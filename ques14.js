let profile = {
    name : "shalini",
    age : 21,
    address : {
        city: " delhi",
    zipcode: "00001",
    }
};
let updates = {
    age : 22,
    address : {
        zipcode : "00002",
        city : "bhopal",
    }
};
const mergedProfile = {
    ...profile,
    age : updates.age,
    address : {
       ...profile.address,
       ...updates.address
}
};
console.log(mergedProfile)