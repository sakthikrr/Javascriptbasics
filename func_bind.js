const lfairlines ={
    "airline": "Luftansa",
    "iata": "LH",
    "icao": "DLH",
    "callsign": "LUFTHANSA",
    "country": "Germany",
    "active": true,
    "passengerlist":[],
     book:function(passengername,passportnuber) {
        this.passengerlist.push({passengername,passportnuber});
        console.log("flight booked for ",passengername," passport number=",passportnuber," on airline ",this.airline);
    
    }

};
const eurowings = {
    airline: 'Eurowings',
    iata: 'EW',
    icao: 'EWG',
    callsign: 'EUROWINGS',
    country: 'Germany',
    active: true,
     "passengerlist":[]
}
let book = lfairlines.book("sakthi","A12345");
let pass = lfairlines.book("sakthi","A12345");
//console.log(lfairlines.passengerlist);

//bind method
const bookEW = lfairlines.book.bind(eurowings);
let book1 = bookEW("vel","B12345");
console.log(eurowings.passengerlist);
