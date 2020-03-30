const audit = {

  exerciseA() {

    function fn() {
      console.log(this);
    }

    // What is the value of `this` when we call fn()?

    const result = 'global window object';

    return result;
  },








  exerciseB() {

    var data = {
      type: 'complex',
      verify: function() {
        return this.type;
      }
    };

    // What is the value of `this` when we call data.verify())?

    const result = 'data';

    return result;
  },








  exerciseC() {

    const dog = {
      totalBarks : 4,
      bark: () => {
        this.totalBarks++;
      }
    };

    // What is the value of `this` when we call dog.bark();

    const result = 'global window object';

    return result;
  },








  exerciseD() {

    let greeting = 'welcome';

    const greetingGenerator = () => {
      let greeting = 'hi';

      if (greeting === 'hi') {
        let greeting = 'hey';
      }

      // Log A: greeting 'hi'
      const newGreeting = ()  => {
        greeting = 'hi';

        // Log B: 'hi'
      };

      newGreeting();

      // Log C: greeting 'hi'
    };

    // Log D: greeting //'welcome'
    greetingGenerator();

    const result = [
      {A: 'hi'},
      {B: 'hi'},
      {C: 'hi'},
      {D: 'welcome'};
    }];

    return result;
  },








  exerciseE() {

    var shoe = 'heel';
    // Log A: 'heel'

    function putOnShoe() {
      shoe = 'boot';

      // Log B: 'boot'
    }

    // Log C: 'heel'
    putOnShoe();

    // Log D: shoe 'boot'

    const result = [
      {A: 'heel'}, {B: 'boot'}, {C: 'heel'}, {D: 'boot'}
    ];

    return result;
  },








  exerciseF() {

    const restaurants = [
      {
        name: 'Beckon',
        capacity: 15,
        cuisine: 'New American',
        takeout: false,
        popular_dishes: ['beef', 'pork', 'seafood']
      },
      {
        name: 'El Five',
        capacity: 50,
        cuisine: 'Tapas/small plates',
        takeout: true,
        popular_dishes: ['seafood', 'lamb', 'steak']
      },
      {
        name: 'ChoLon',
        capacity: 70,
        cuisine: 'Asian Fusion',
        takeout: true,
        popular_dishes: ['pork', 'beef', 'seafood']
      },
      {
        name: 'Super Mega Bien',
        capacity: 40,
        cuisine: 'Tapas/small plates',
        takeout: true,
        popular_dishes: ['pork', 'duck', 'steak', 'seafood']
      }
    ];

    // Return an array of just the names of the restuarants:

    // e.g.
    // ['Beckon', 'El Five', 'ChoLon', 'Super Mega Bien']

    const result = restaurants.map(restaurant => {
      return restaurant.name
    })

    return result;
  },








  exerciseG() {

    const restaurants = [
      {
        name: 'Beckon',
        capacity: 15,
        cuisine: 'New American',
        takeout: false,
        popular_dishes: ['beef', 'pork', 'seafood']
      },
      {
        name: 'El Five',
        capacity: 50,
        cuisine: 'Tapas/small plates',
        takeout: true,
        popular_dishes: ['seafood', 'lamb', 'steak']
      },
      {
        name: 'ChoLon',
        capacity: 70,
        cuisine: 'Asian Fusion',
        takeout: true,
        popular_dishes: ['pork', 'beef', 'seafood']
      },
      {
        name: 'Super Mega Bien',
        capacity: 40,
        cuisine: 'Tapas/small plates',
        takeout: true,
        popular_dishes: ['pork', 'duck', 'steak', 'seafood']
      }
    ];

    // Return an array of objects that include just the name of the restaurant and whether takeout is available

    // e.g.
    // [
    //    { restaurant: 'Beckon', takeOut: false },
    //    { restaurant: 'El Five', takeOut: true },
    //    ..etc
    // ]

    const result = restaurants.map(restaurant => {
      let canTakeOut = {};
        canTakeOut['restaurant'] = restaurant.name;
        canTakeOut['takeOut'] = restaurant.takeout;

        return canTakeOut

    });

    return result;
  },








  exerciseH() {

    const restaurants = [
      {
        name: 'Beckon',
        capacity: 15,
        cuisine: 'New American',
        takeout: false,
        popular_dishes: ['beef', 'pork', 'seafood']
      },
      {
        name: 'El Five',
        capacity: 50,
        cuisine: 'Tapas/small plates',
        takeout: true,
        popular_dishes: ['seafood', 'lamb', 'steak']
      },
      {
        name: 'ChoLon',
        capacity: 70,
        cuisine: 'Asian Fusion',
        takeout: true,
        popular_dishes: ['pork', 'beef', 'seafood']
      },
      {
        name: 'Super Mega Bien',
        capacity: 40,
        cuisine: 'Tapas/small plates',
        takeout: true,
        popular_dishes: ['pork', 'duck', 'steak', 'seafood']
      }
    ];

    // Return an object whose keys are the different restaurant cuisines and whose values are arrays of the restaurants

    // e.g.
    // {
    //    'New American': ['Beckon'],
    //    'Tapas/small plates': ['El Five', 'Super Mega Bien'],
    //    'Asian Fusion': ['ChoLon']
    // }

    const result = restaurants.reduce((newObj, restaurant) => {
        if (!newObj[restaurant.cuisine]) {
          newObj[restaurant.cuisine] = [];
          newObj[restaurant.cuisine].push(restaurant.name)
        } else {
          newObj[restaurant.cuisine].push(restaurant.name)
      };
      return newObj
    },{})

    return result;
  },

  exerciseBonus() {

    // There is a war and nobody knows - the alphabet war!
    // There are two groups of hostile letters. The tension between left side letters and right side letters was too high and the war began.

    // Write a function that accepts fight string consists of only small letters and return who wins the fight. When the left side wins return 'Left side wins!', when the right side wins return 'Right side wins!', in other case return 'Let's fight again!'.

    // The left side letters and their power:
    // w - 4
    // p - 3
    // b - 2
    // s - 1

    // The right side letters and their power:

    // m - 4
    // q - 3
    // d - 2
    // z - 1

    // All other letters don't have power and are only victims.

    // alphabetWar("z");        //=> Right side wins!
    // alphabetWar("zdqmwpbs"); //=> Let's fight again! rightside: 1234 leftside: 4
    // alphabetWar("zzzzs");    //=> Right side wins!
    // alphabetWar("wwwwwwz");  //=> Left side wins!


    // Fill out functionality below. Your result variable (line 320) is already set up and does not need to be modified

    function alphabetWar(fight) {
    let leftSide = 0;
    let rightSide = 0;

    let array = fight.split('').forEach(character => {
     switch (character) {
       case 'w':
       leftSide += 4;
       break;
       case 'p':
       leftSide += 3;
       break;
       case 'b':
       leftSide += 2;
       break;
       case 's':
       leftSide += 1;
       break;
       case 'm':
       rightSide += 4;
       break;
       case 'q':
       rightSide += 3;
       break;
       case 'd':
       rightSide += 2;
       break;
       case 'z':
       rightSide += 1;
       break;
     }
   });

   if(rightSide > leftSide) {
     return "Right side wins"
   }

   if(leftSide > rightSide) {
     return "Left side wins!"
   }

   if(leftSide === rightSide) {
     return "Let's fight again!"
   }
 }


    const result = {
      one: alphabetWar('z'),
      two: alphabetWar('zdqmwpbs'),
      three: alphabetWar('zzzzs'),
      four: alphabetWar('wwwwwwz')
    };

    return result;
  }
};

module.exports = audit;
