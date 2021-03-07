let zin = 'ik wil een koekje';
let uitkomst = zin.replace('koekje','lasagne van PXL-catering');

let uitkomstfinal = uitkomst.toUpperCase();

document.getElementById('dezin').innerHTML = uitkomstfinal;
console.log(uitkomstfinal);