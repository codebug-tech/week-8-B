document.addEventListener('DOMContentLoaded', function() {
  // Write your JavaScript below. After you finish a section, comment out the code.

  console.log("*********Names, Names, Names***********");
  ///////////// Names, Names, Names /////////////
  ///////////////////////////////////////////////
  var classList = ["Sarah", "McArthur", "Brandon", "Catherine", "Mike"];
  for (var i = 0; i < classList.length; i++) {
    console.log(classList[i]);
  }
  for (var i = 0; i < classList.length; i++) {
    var name = classList[i];
    console.log(name.toUpperCase());
  }
  for (var i = 0; i < classList.length; i++) {
    var name = classList[i];
    console.log(name + " is so smart!");
  }



  ///////////////////////////////////////////////
  ///////////////////////////////////////////////

  console.log("*********Best Num, Num, Nums***********");
  ///////////// Best Num, Num, Nums /////////////
  ///////////////////////////////////////////////
  var favNums = [11, 22, 33, 44, 55, 66];

  for (var i = 0; i < favNums.length; i++) {
    console.log(favNums[i]);
  }

  for (var i = 0; i < favNums.length; i++) {
    var favNum = favNums[i] + 2;
    console.log(favNum);
  }

  for (var i = 0; i < favNums.length; i++) {
    var answer = "";
    if (favNums[i] > 10) {
      answer = "The number is greater than 10.";
    } else {
      answer = "The number is less than 10.";
    }
    console.log(answer);
  }

  for (var i = 0; i < favNums.length; i++) {
    var sqRoot = Math.sqrt(favNums[i]);
    console.log(sqRoot);
  }

  ///////////////////////////////////////////////
  ///////////////////////////////////////////////

  console.log("*********Worst, Num, Num, Nums***********");
  //////////// Worst, Num, Num, Nums  ///////////
  ///////////////////////////////////////////////
  var hatedNums = [16, 26, 36, 46, 56, 66, 76, 85, 96, 106];

  for (var i = 0; i < hatedNums.length; i++) {
    console.log(Math.pow(hatedNums[i], hatedNums[i]));
  }

  for (var i = 0; i < hatedNums.length; i++) {
    var bool = true;
    if (hatedNums[i] % 2 == 0) {
      console.log(bool);
    } else {
      bool = false;
      console.log(bool);
    }
  }

  ///////////////////////////////////////////////
  ///////////////////////////////////////////////

  console.log("*********Challenge, Challenge, Challenge***********");
  //////   Challenge, Challenge, Challenge  //////
  ///////////////////////////////////////////////
  var tenNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  //////////////////////////////////////////////////////////////////////////
    // Write `sum` below.
  function sum(list) {
    var total = 0;
    for (var i = 0; i < list.length; i++) {
      total += list[i];
    }
    return total;
  }




    // Uncomment the console.logs below, and look in the console to see if your function worked!
    console.log(sum([1, 2, 3]));
    // Expected output: 6
    console.log(sum([11, 423, 593, 91, 4, 19, 241, -44]));
    // Expected output: 1338

  //////////////////////////////////////////////////////////////////////////

  //////////////////////////////////////////////////////////////////////////
    // Write `blastOff` below.
    function blastOff(number) {
      var blastNote = "BLAST OFF!";

      for (var i = number; i > 0; i--) {
        if (number > 0) {
          console.log(i);
        }
      }
      return blastNote;
    }

    console.log(blastOff(10));




  //////////////////////////////////////////////////////////////////////////

  //////////////////////////////////////////////////////////////////////////
    // Write `ninetyNineBottles` below.
    function ninetyNineBottles(numOfBottles) {

      for (var i = numOfBottles; i > 0; i--) {
        console.log(i + " bottles of beer on the wall, " + i + " bottles of beer. Take one down and pass it around, " + (i-1) + " bottles of beer on the wall.");
      }
    }

    console.log(ninetyNineBottles(10));




  //////////////////////////////////////////////////////////////////////////

  ///////////////////////////////////////////////
  ///////////////////////////////////////////////





})