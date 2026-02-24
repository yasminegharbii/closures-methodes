function creerCompte(initiale) {
  var solde = initiale;
  return {
    retirer: function (montant) {
      if (solde - montant >= 0) {
        solde = solde - montant;
        return " Voici votre argent : $ " + montant;
      }
      return "solde insuffisants.";
    },
    deposer: function (montant) {
      solde = solde + montant;
      return "Votre solde est : $" + solde;
    },
    verifierSolde: function () {
      return "Votre solde actuel est" + solde;
    },
  };
}

function makeCounter(start) {
  var initiale = start;
  var counter = start;

  return {
    up: function () {
      counter = counter + 1;
      return counter;
    },
    down: function () {
      counter = counter - 1;
      return counter;
    },
    reset: function () {
      counter = initiale;
      return initiale;
    },
  };
}

function Tv(start) {
  var channel = start;

  return {
    watch: function () {
      return "you're watching now channel #" + channel;
    },

    changeChannel: function (newChannel) {
      channel = newChannel;
      return "you're changing to #" + channel;
    }
  };
}

