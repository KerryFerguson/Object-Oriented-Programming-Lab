const whiskers = {
  animal: "cat",
  age: "3",
  breed: "bengal",
  color: "golden",
  tail: "short",
  gender: "male",
  sound: function () {
    return("Meow");
  },
  play: function () {
    return("Oohh Yarn Toy!");
  },
};

//Access the animal property of the object above and print its value to the console using dot notation.
console.log(whiskers.animal);

//Access the age property of the object above and print its value to the console using dot notation.
console.log(whiskers.age);

//Call the sound method property from object above and print to the console using dot notation.
console.log(whiskers.sound());

//Access the breed property of the object above and print its value to the console using bracket notation.
console.log(whiskers['breed']);

//Access the color property of the object above and print its value to the console using bracket notation.
console.log(whiskers['color']);

//Call the play method property from object above and print to the console using bracket notation.
console.log(whiskers['play']());

// Create a variable and store one of the properties from the object in the variable and print its value to the console using bracket notation.
whiskers.secondSound = "Meow?"
console.log(whiskers['secondSound']);

//Change the value of the color property to white using dot notation.
whiskers.color = "white";

//Change the value of the gender property to female using bracket notation.
whiskers.gender = "female";

//Add a property called size with a value of small using dot notation.
whiskers.size = "13";

//Add a property called diet with a value of kitty mix using bracket notation.
whiskers['diet'] = "kitty mix";


class Smartphone{
constructor(OS, model, app_market, company, ringtone){
  this.OS = OS;
  this.model = model;
  this.app_market = app_market;
  this.company = company;
  this.ringtone = ringtone;
}

call(){
 return(this.ringtone);
}

changeRingtone(ringtone){
  this.ringtone = ringtone;
}
get businessCalls() {
  const today = new Date();
  const hour = today.getHours();

  if(hour > 10 && hour < 21){
    return 'phone has been ringing all day!';
  }else{
    return 'phone on nighttime mode';
  }
}

set phoneOwner(phoneOwner){
  this._phoneOwner = phoneOwner
  console.log(phoneOwner);
}
get phoneOwner(){
}


}
let phone1 = new Smartphone("IOS", "iPhoneX", "App Store", "Apple", "ding dong");
let phone2 = new Smartphone("Andoid", "Samsung Galaxy S20", "Galaxy Store", "Samsung", "dong ding");

console.log(phone1.OS);
console.log(phone2['model']);

console.log(phone1.call());
console.log(phone2['call']());
phone1.changeRingtone('Beyonce')
phone2.changeRingtone('Drake')
console.log(phone1.call());
console.log(phone2.call());
console.log(phone1.businessCalls)
console.log(phone2['businessCalls'])
phone1 ['phoneOwner'] = 'John';
phone2.phoneOwner = 'Jane';

