var mobiles = [
    {
        brand: "Apple",
        model: "Iphone 11",
        price: 900000
    },
    {
        brand: "Nokia",
        model: "Nkia Pro98",
        price: 700000
    },
    {
        brand: "Oppo",
        model: "Oppo Promax",
        price: "10010000"
    }
];
var filteredData= mobiles.filter((element, index)=>{
    return element.brand === "Apple";
});

console.log(filteredData);