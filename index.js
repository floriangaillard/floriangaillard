const addr = "https://api.etherscan.io/api?module=gastracker&action=gasoracle&apikey=1NGFXG77E3K188FWZYJ5KAZC8ZZIWPSQIR&fbclid=IwAR34rQJaM0P19y98QBHJaarGvSgfB5kCRsK8zOMqh6E68SUfPasYpFhuvb8";
fetch(addr) // on appel l'api en GET
  .then(function(res) {
    return res.json(); // on transforme la réponse en json
  })
  .then(function (data) { // on affiche dans chaque balise le résultat qui la concerne, en la récupérant avec document.getElementById
    document.getElementById('lastBlock').innerText = data.result.LastBlock;
    document.getElementById('safeGasPrice').innerText = data.result.SafeGasPrice;
    document.getElementById('proposeGasPrice').innerText = data.result.ProposeGasPrice;
    document.getElementById('fastGasPrice').innerText = data.result.FastGasPrice;
  })
