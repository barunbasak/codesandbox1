import _ from 'lodash'

let aaa = () => {
  let ar = [1, 2, 3, 4, 5, 6];
  let str = ""
  //ar.map(n => str += n);
  _.map(ar, (n) => {str += n})
  console.log(str)
  return str
};
var kidsData = [
  {
    name: "Max",
    colors: ["Red", "Blue", "Green"]
  },
  {
    name: "Dan",
    colors: ["Yellow", "Orange", "Red"]
  },
  {
    name: "Maddy",
    colors: ["Orange", "Blue"]
  }
];

function xxx(){
var colors = _.chain(kidsData)
  .map("colors")

  console.log(colors.value())

  console.log(colors.flatten().value())

  console.log(colors.flatten().uniq().value())
  // 
  // .uniq()
  // .value()
}

document.getElementById("app").innerHTML = `
<h1>Hello Parcel!</h1>
<div>
  Look
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>
  for more info about Parcel.
</div>
${aaa()}
${xxx()}
`;
