const printTitle = title => {
  console.groupCollapsed(`%c${title}`, `color: lightgreen; text-align: left`);
};

/* 01 - Learn About Functional Programming */
(() => {
  printTitle('01 - Learn About Functional Programming');
  /*
    The members of freeCodeCamp happen to love tea.
    In the code editor, the prepareTea and getTea functions are already defined for you.
    Call the getTea function to get 40 cups of tea for the team, and store them in the tea4TeamFCC variable.1
  */
  const prepareTea = () => 'greenTea';

  const getTea = numOfCups => {
    const teaCups = [];

    for (let cups = 1; cups <= numOfCups; cups += 1) {
      const teaCup = prepareTea();
      teaCups.push(teaCup);
    }
    return teaCups;
  };

  const tea4TeamFCC = getTea(40);

  console.log('tea4TeamFCC:', tea4TeamFCC);
  /*
    tea4TeamFCC: (40)
    [
      "greenTea", "greenTea", "greenTea", "greenTea", "greenTea", "greenTea", "greenTea", "greenTea", "greenTea", "greenTea", "greenTea", "greenTea", "greenTea", "greenTea", "greenTea", "greenTea", "greenTea", "greenTea", "greenTea", "greenTea", "greenTea", "greenTea", "greenTea", "greenTea", "greenTea", "greenTea", "greenTea", "greenTea", "greenTea", "greenTea", "greenTea", "greenTea", "greenTea", "greenTea", "greenTea", "greenTea", "greenTea", "greenTea", "greenTea", "greenTea"
    ]
  */
  console.groupEnd();
})();

/* 02 - Understand Functional Programming Terminology' */
(() => {
  printTitle('02 - Understand Functional Programming Terminology');
  /*
    Prepare 27 cups of green tea and 13 cups of black tea and store
    them in tea4GreenTeamFCC and tea4BlackTeamFCC variables, respectively.
    Note that the getTea function has been modified so it now takes a function as the first argument.

    Note: The data (the number of cups of tea) is supplied as the last argument. We'll discuss this more in later lessons.
  */
  const prepareGreenTea = () => 'greenTea';
  const prepareBlackTea = () => 'blackTea';

  const getTea = (prepareTea, numOfCups) => {
    const teaCups = [];

    for (let cups = 1; cups <= numOfCups; cups += 1) {
      const teaCup = prepareTea();
      teaCups.push(teaCup);
    }
    return teaCups;
  };

  const tea4GreenTeamFCC = getTea(prepareGreenTea, 27);
  const tea4BlackTeamFCC = getTea(prepareBlackTea, 13);

  console.log('tea4GreenTeamFCC:', tea4GreenTeamFCC, 'tea4BlackTeamFCC:', tea4BlackTeamFCC);
  /*
    tea4GreenTeamFCC: (27)
    [
      "greenTea", "greenTea", "greenTea", "greenTea", "greenTea", "greenTea", "greenTea", "greenTea", "greenTea", "greenTea", "greenTea", "greenTea", "greenTea", "greenTea", "greenTea", "greenTea", "greenTea", "greenTea", "greenTea", "greenTea", "greenTea", "greenTea", "greenTea", "greenTea", "greenTea", "greenTea", "greenTea"
    ]

    tea4BlackTeamFCC: (13)
    [
      "blackTea", "blackTea", "blackTea", "blackTea", "blackTea", "blackTea", "blackTea", "blackTea", "blackTea", "blackTea", "blackTea", "blackTea", "blackTea"
    ]
  */
  console.groupEnd();
})();

/* 03 - Understand the Hazards of Using Imperative Code */
(() => {
  printTitle('03 - Understand the Hazards of Using Imperative Code');
  /*
    Examine the code in the editor. It's using a method that has side effects in the program, causing incorrect behaviour.\n The final list of open tabs, stored in finalTabs.tabs, should be ['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium',\n 'new tab', 'Netflix', 'YouTube', 'Vine', 'GMail', 'Work mail', 'Docs', 'freeCodeCamp', 'new tab'] but the list produced by the code is slightly different.

    Change Window.prototype.tabClose so that it removes the correct tab.
  */
  var Window = function (tabs) {
    this.tabs = tabs;
  };

  Window.prototype.join = function (otherWindow) {
    this.tabs = this.tabs.concat(otherWindow.tabs);
    return this;
  };

  Window.prototype.tabOpen = function (tab) {
    this.tabs.push('new tab');
    return this;
  };

  Window.prototype.tabClose = function (index) {
    var tabsBeforeIndex = this.tabs.slice(0, index);
    var tabsAfterIndex = this.tabs.slice(index + 1);

    this.tabs = tabsBeforeIndex.concat(tabsAfterIndex);

    return this;
  };

  var workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']);
  var socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']);
  var videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']);

  var finalTabs = socialWindow
    .tabOpen()
    .join(videoWindow.tabClose(2))
    .join(workWindow.tabClose(1).tabOpen());

  console.log('finalTabs.tabs:', finalTabs.tabs);
  /*
    finalTabs.tabs: (14) 
    [
      "FB", "Gitter", "Reddit", "Twitter", "Medium", "new tab", "Netflix", "YouTube", "Vine", "GMail", "Work mail", "Docs", "freeCodeCamp", "new tab"
    ]
  */
  console.groupEnd();
})();

/* 04 - Avoid Mutations and Side Effects Using Functional Programming */
(() => {
  printTitle('04 - Avoid Mutations and Side Effects Using Functional Programming');
  var fixedValue = 4;

  function incrementer() {
    return fixedValue + 1;
  }

  console.log('incrementer:', incrementer());
  /*
    incrementer: 5
  */
  console.groupEnd();
})();

/* 05 - Avoid Mutations and Side Effects Using Functional Programming */
(() => {
  printTitle('05 - Avoid Mutations and Side Effects Using Functional Programming');
  const fixedValue = 4;

  function incrementer(n) {
    return n + 1;
  }

  console.log('incrementer:', incrementer(fixedValue));
  /*
    incrementer: 5
  */
  console.groupEnd();
})();

/* 06 - Refactor Global Variables Out of Functions */
(() => {
  printTitle('06 - Refactor Global Variables Out of Functions');
  const bookList = [
    'The Hound of the Baskervilles',
    'On The Electrodynamics of Moving Bodies',
    'Philosophiæ Naturalis Principia Mathematica',
    'Disquisitiones Arithmeticae'
  ];

  const add = (bookList, bookName) => [...bookList, bookName];
  const remove = (bookList, bookName) => bookList.filter(name => name !== bookName);

  const newBookList = add(bookList, 'A Brief History of Time');
  const newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
  const newestBookList = remove(
    add(bookList, 'A Brief History of Time'),
    'On The Electrodynamics of Moving Bodies'
  );

  console.log(
    'newBookList:',
    newBookList,
    'newerBookList:',
    newerBookList,
    'newestBookList:',
    newestBookList
  );
  /*
    newBooksList: (5)
    [
      "The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae", "A Brief History of Time"
    ]

    newerBookList: (3)
    [
      "The Hound of the Baskervilles", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae", "A Brief History of Time"
    ]

    newestBookList: (4)
    [
      "The Hound of the Baskervilles", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae", "A Brief History of Time"
    ]
  */
  console.log('bookList:', bookList);
  /*
    bookList: (4)
    [
      "The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"
    ]
  */
  console.groupEnd();
})();

/* 07 - Use the map Method to Extract Data from an Array */
(() => {
  printTitle('07 - Use the map Method to Extract Data from an Array');
  /*
    The watchList array holds objects with information on several movies. Use map on watchList to assign a new array of objects with only title and rating keys to the ratings variable. The code in the editor currently uses a for loop to do this, so you should replace the loop functionality with your map expression.
  */
  const watchList = [
    {
      Title: 'Inception',
      Year: '2010',
      Rated: 'PG-13',
      Released: '16 Jul 2010',
      Runtime: '148 min',
      Genre: 'Action, Adventure, Crime',
      Director: 'Christopher Nolan',
      Writer: 'Christopher Nolan',
      Actors: 'Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy',
      Plot:
        'A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.',
      Language: 'English, Japanese, French',
      Country: 'USA, UK',
      Awards: 'Won 4 Oscars. Another 143 wins & 198 nominations.',
      Poster:
        'http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg',
      Metascore: '74',
      imdbRating: '8.8',
      imdbVotes: '1,446,708',
      imdbID: 'tt1375666',
      Type: 'movie',
      Response: 'True'
    },
    {
      Title: 'Interstellar',
      Year: '2014',
      Rated: 'PG-13',
      Released: '07 Nov 2014',
      Runtime: '169 min',
      Genre: 'Adventure, Drama, Sci-Fi',
      Director: 'Christopher Nolan',
      Writer: 'Jonathan Nolan, Christopher Nolan',
      Actors: 'Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow',
      Plot:
        "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      Language: 'English',
      Country: 'USA, UK',
      Awards: 'Won 1 Oscar. Another 39 wins & 132 nominations.',
      Poster:
        'http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg',
      Metascore: '74',
      imdbRating: '8.6',
      imdbVotes: '910,366',
      imdbID: 'tt0816692',
      Type: 'movie',
      Response: 'True'
    },
    {
      Title: 'The Dark Knight',
      Year: '2008',
      Rated: 'PG-13',
      Released: '18 Jul 2008',
      Runtime: '152 min',
      Genre: 'Action, Adventure, Crime',
      Director: 'Christopher Nolan',
      Writer:
        'Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)',
      Actors: 'Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine',
      Plot:
        'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.',
      Language: 'English, Mandarin',
      Country: 'USA, UK',
      Awards: 'Won 2 Oscars. Another 146 wins & 142 nominations.',
      Poster:
        'http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg',
      Metascore: '82',
      imdbRating: '9.0',
      imdbVotes: '1,652,832',
      imdbID: 'tt0468569',
      Type: 'movie',
      Response: 'True'
    },
    {
      Title: 'Batman Begins',
      Year: '2005',
      Rated: 'PG-13',
      Released: '15 Jun 2005',
      Runtime: '140 min',
      Genre: 'Action, Adventure',
      Director: 'Christopher Nolan',
      Writer:
        'Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)',
      Actors: 'Christian Bale, Michael Caine, Liam Neeson, Katie Holmes',
      Plot:
        'After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.',
      Language: 'English, Urdu, Mandarin',
      Country: 'USA, UK',
      Awards: 'Nominated for 1 Oscar. Another 15 wins & 66 nominations.',
      Poster:
        'http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg',
      Metascore: '70',
      imdbRating: '8.3',
      imdbVotes: '972,584',
      imdbID: 'tt0372784',
      Type: 'movie',
      Response: 'True'
    },
    {
      Title: 'Avatar',
      Year: '2009',
      Rated: 'PG-13',
      Released: '18 Dec 2009',
      Runtime: '162 min',
      Genre: 'Action, Adventure, Fantasy',
      Director: 'James Cameron',
      Writer: 'James Cameron',
      Actors: 'Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang',
      Plot:
        'A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.',
      Language: 'English, Spanish',
      Country: 'USA, UK',
      Awards: 'Won 3 Oscars. Another 80 wins & 121 nominations.',
      Poster:
        'http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg',
      Metascore: '83',
      imdbRating: '7.9',
      imdbVotes: '876,575',
      imdbID: 'tt0499549',
      Type: 'movie',
      Response: 'True'
    }
  ];

  const ratings = watchList.map(movie => ({ title: movie.Title, rating: movie.imdbRating }));

  console.log('ratings:', ratings);
  /*
    ratings: (5)
    [
      {
        "title": "Inception",
        "rating": "8.8"
      },
      {
        "title": "Interstellar",
        "rating": "8.6"
      },
      {
        "title": "The Dark Knight",
        "rating": "9.0"
      },
      {
        "title": "Batman Begins",
        "rating": "8.3"
      },
      {
        "title": "Avatar",
        "rating": "7.9"
      }
    ]
  */
  console.groupEnd();
})();

/* 08 - Implement map on a Prototype */
(() => {
  printTitle('08 - Implement map on a Prototype');
  /*
    Write your own Array.prototype.myMap(), which should behave exactly like Array.prototype.map(). You may use a for loop or the forEach method.
  */
  const s = [23, 65, 98, 5];

  Array.prototype.myMap = function (callback) {
    let newArray = [];
    const sLength = this.length;

    for (let i = 0; i < sLength; i++) {
      const callBackVal = callback(this[i], i, this);
      newArray = [...newArray, callBackVal];
    }

    return newArray;
  };

  const new_s = s.myMap(function (item) {
    return item * 2;
  });

  console.log('new_s:', new_s);
  /*
    new_s: (4) [46, 130, 196, 10]
   */
  console.groupEnd();
})();

/* 09 - Use the filter Method to Extract Data from an Array */
(() => {
  printTitle('09 - Use the filter Method to Extract Data from an Array');
  /*
    The variable watchList holds an array of objects with information on several movies. Use a combination of filter and map on watchList to assign a new array of objects with only title and rating keys. The new array should only include objects where imdbRating is greater than or equal to 8.0. Note that the rating values are saved as strings in the object and you may need to convert them into numbers to perform mathematical operations on them.
  */
  const watchList = [
    {
      Title: 'Inception',
      Year: '2010',
      Rated: 'PG-13',
      Released: '16 Jul 2010',
      Runtime: '148 min',
      Genre: 'Action, Adventure, Crime',
      Director: 'Christopher Nolan',
      Writer: 'Christopher Nolan',
      Actors: 'Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy',
      Plot:
        'A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.',
      Language: 'English, Japanese, French',
      Country: 'USA, UK',
      Awards: 'Won 4 Oscars. Another 143 wins & 198 nominations.',
      Poster:
        'http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg',
      Metascore: '74',
      imdbRating: '8.8',
      imdbVotes: '1,446,708',
      imdbID: 'tt1375666',
      Type: 'movie',
      Response: 'True'
    },
    {
      Title: 'Interstellar',
      Year: '2014',
      Rated: 'PG-13',
      Released: '07 Nov 2014',
      Runtime: '169 min',
      Genre: 'Adventure, Drama, Sci-Fi',
      Director: 'Christopher Nolan',
      Writer: 'Jonathan Nolan, Christopher Nolan',
      Actors: 'Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow',
      Plot:
        "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      Language: 'English',
      Country: 'USA, UK',
      Awards: 'Won 1 Oscar. Another 39 wins & 132 nominations.',
      Poster:
        'http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg',
      Metascore: '74',
      imdbRating: '8.6',
      imdbVotes: '910,366',
      imdbID: 'tt0816692',
      Type: 'movie',
      Response: 'True'
    },
    {
      Title: 'The Dark Knight',
      Year: '2008',
      Rated: 'PG-13',
      Released: '18 Jul 2008',
      Runtime: '152 min',
      Genre: 'Action, Adventure, Crime',
      Director: 'Christopher Nolan',
      Writer:
        'Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)',
      Actors: 'Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine',
      Plot:
        'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.',
      Language: 'English, Mandarin',
      Country: 'USA, UK',
      Awards: 'Won 2 Oscars. Another 146 wins & 142 nominations.',
      Poster:
        'http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg',
      Metascore: '82',
      imdbRating: '9.0',
      imdbVotes: '1,652,832',
      imdbID: 'tt0468569',
      Type: 'movie',
      Response: 'True'
    },
    {
      Title: 'Batman Begins',
      Year: '2005',
      Rated: 'PG-13',
      Released: '15 Jun 2005',
      Runtime: '140 min',
      Genre: 'Action, Adventure',
      Director: 'Christopher Nolan',
      Writer:
        'Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)',
      Actors: 'Christian Bale, Michael Caine, Liam Neeson, Katie Holmes',
      Plot:
        'After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.',
      Language: 'English, Urdu, Mandarin',
      Country: 'USA, UK',
      Awards: 'Nominated for 1 Oscar. Another 15 wins & 66 nominations.',
      Poster:
        'http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg',
      Metascore: '70',
      imdbRating: '8.3',
      imdbVotes: '972,584',
      imdbID: 'tt0372784',
      Type: 'movie',
      Response: 'True'
    },
    {
      Title: 'Avatar',
      Year: '2009',
      Rated: 'PG-13',
      Released: '18 Dec 2009',
      Runtime: '162 min',
      Genre: 'Action, Adventure, Fantasy',
      Director: 'James Cameron',
      Writer: 'James Cameron',
      Actors: 'Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang',
      Plot:
        'A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.',
      Language: 'English, Spanish',
      Country: 'USA, UK',
      Awards: 'Won 3 Oscars. Another 80 wins & 121 nominations.',
      Poster:
        'http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg',
      Metascore: '83',
      imdbRating: '7.9',
      imdbVotes: '876,575',
      imdbID: 'tt0499549',
      Type: 'movie',
      Response: 'True'
    }
  ];

  const filteredList = watchList
    .filter(movie => movie.imdbRating > 8)
    .map(movie => ({ title: movie.Title, rating: movie.imdbRating }));

  console.log('filteredList:', filteredList);
  /*
    filteredList: (4)
    [
      {
        "title": "Inception",
        "rating": "8.8"
      },
      {
        "title": "Interstellar",
        "rating": "8.6"
      },
      {
        "title": "The Dark Knight",
        "rating": "9.0"
      },
      {
        "title": "Batman Begins",
        "rating": "8.3"
      }
    ]
   */
  console.groupEnd();
})();

/* 10 - Implement the filter Method on a Prototype */
(() => {
  printTitle('10 - Implement the filter Method on a Prototype');
  /*
    Write your own Array.prototype.myFilter(), which should behave exactly like Array.prototype.filter(). You may use a for loop or the Array.prototype.forEach() method.
  */
  const s = [23, 65, 98, 5];

  Array.prototype.myFilter = function (callback) {
    var newArray = [];
    const thisLength = this.length;

    for (let i = 0; i < thisLength; i++) {
      const isTrue = callback(this[i], i, this);
      if (isTrue) {
        newArray = [...newArray, this[i]];
      }
    }

    return newArray;
  };

  var new_s = s.myFilter(function (item) {
    return item % 2 === 1;
  });

  console.log('new_s:', new_s);
  /*
    new_s: (3) [23, 65, 5]
  */
  console.groupEnd();
})();

/* 11 - Return Part of an Array Using the slice Method */
(() => {
  printTitle('11 - Return Part of an Array Using the slice Method');
  /*
    Use the slice method in the sliceArray function to return part of the anim array given the provided beginSlice and endSlice indices. The function should return an array.
  */
  function sliceArray(anim, beginSlice, endSlice) {
    if (beginSlice === undefined) beginSlice = 0;
    if (endSlice === undefined) endSlice = anim.length;

    return anim.slice(beginSlice, endSlice);
  }

  const inputAnim = ['Cat', 'Dog', 'Tiger', 'Zebra', 'Ant'];
  const slicedArray = sliceArray(inputAnim, 1, 3);

  console.log('slicedArray:', slicedArray);
  /*
    slicedArray: (2) ["Dog", "Tiger"]
  */
  console.groupEnd();
})();

/* 12 - Remove Elements from an Array Using slice Instead of splice */
(() => {
  printTitle('12 - Remove Elements from an Array Using slice Instead of splice');
  /*
    Rewrite the function nonMutatingSplice by using slice instead of splice. It should limit the provided cities array to a length of 3, and return a new array with only the first three items.

    Do not mutate the original array provided to the function.
  */
  function nonMutatingSplice(cities) {
    return cities.slice(0, 3);
  }

  const inputCities = ['Chicago', 'Delhi', 'Islamabad', 'London', 'Berlin'];
  const slicedCitiesArray = nonMutatingSplice(inputCities);

  console.log('slicedCitiesArray:', slicedCitiesArray);
  /*
    slicedCitiesArray: (3) ["Chicago", "Delhi", "Islamabad"]
  */
  console.groupEnd();
})();

/* 13 - Combine Two Arrays Using the concat Method */
(() => {
  printTitle('13 - Combine Two Arrays Using the concat Method');
  /*
    Use the concat method in the nonMutatingConcat function to concatenate attach to the end of original. The function should return the concatenated array.
  */
  const nonMutatingConcat = (original, attach) => original.concat(attach);

  const first = [1, 2, 3];
  const second = [4, 5];

  const concatenatedArray = nonMutatingConcat(first, second);

  console.log('concatenatedArray:', concatenatedArray);
  /* concatenatedArray: (5) [1, 2, 3, 4, 5] */
  console.groupEnd();
})();

(() => {
  printTitle('14 - Add Elements to the End of an Array Using concat Instead of push');
  /*
    Change the nonMutatingPush function so it uses concat to add newItem to the end of original instead of push. The function should return an array.
  */
  const nonMutatingPush = (original, newItem) => original.concat(newItem);

  const first = [1, 2, 3];
  const second = [4, 5];

  const nonMutatedArray = nonMutatingPush(first, second);

  console.log('nonMutatedArray:', nonMutatedArray);
  /*nonMutatedArray: (5) [1, 2, 3, 4, 5]*/
  console.groupEnd();
})();

(() => {
  printTitle('15 - Use the reduce Method to Analyze Data');
  /*
    The variable watchList holds an array of objects with information on several movies. Use reduce to find the average IMDB rating of the movies directed by Christopher Nolan. Recall from prior challenges how to filter data and map over it to pull what you need. You may need to create other variables, and return the average rating from getRating function. Note that the rating values are saved as strings in the object and need to be converted into numbers before they are used in any mathematical operations.
  */
  var watchList = [
    {
      Title: 'Inception',
      Year: '2010',
      Rated: 'PG-13',
      Released: '16 Jul 2010',
      Runtime: '148 min',
      Genre: 'Action, Adventure, Crime',
      Director: 'Christopher Nolan',
      Writer: 'Christopher Nolan',
      Actors: 'Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy',
      Plot:
        'A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.',
      Language: 'English, Japanese, French',
      Country: 'USA, UK',
      Awards: 'Won 4 Oscars. Another 143 wins & 198 nominations.',
      Poster:
        'http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg',
      Metascore: '74',
      imdbRating: '8.8',
      imdbVotes: '1,446,708',
      imdbID: 'tt1375666',
      Type: 'movie',
      Response: 'True'
    },
    {
      Title: 'Interstellar',
      Year: '2014',
      Rated: 'PG-13',
      Released: '07 Nov 2014',
      Runtime: '169 min',
      Genre: 'Adventure, Drama, Sci-Fi',
      Director: 'Christopher Nolan',
      Writer: 'Jonathan Nolan, Christopher Nolan',
      Actors: 'Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow',
      Plot:
        "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      Language: 'English',
      Country: 'USA, UK',
      Awards: 'Won 1 Oscar. Another 39 wins & 132 nominations.',
      Poster:
        'http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg',
      Metascore: '74',
      imdbRating: '8.6',
      imdbVotes: '910,366',
      imdbID: 'tt0816692',
      Type: 'movie',
      Response: 'True'
    },
    {
      Title: 'The Dark Knight',
      Year: '2008',
      Rated: 'PG-13',
      Released: '18 Jul 2008',
      Runtime: '152 min',
      Genre: 'Action, Adventure, Crime',
      Director: 'Christopher Nolan',
      Writer:
        'Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)',
      Actors: 'Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine',
      Plot:
        'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.',
      Language: 'English, Mandarin',
      Country: 'USA, UK',
      Awards: 'Won 2 Oscars. Another 146 wins & 142 nominations.',
      Poster:
        'http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg',
      Metascore: '82',
      imdbRating: '9.0',
      imdbVotes: '1,652,832',
      imdbID: 'tt0468569',
      Type: 'movie',
      Response: 'True'
    },
    {
      Title: 'Batman Begins',
      Year: '2005',
      Rated: 'PG-13',
      Released: '15 Jun 2005',
      Runtime: '140 min',
      Genre: 'Action, Adventure',
      Director: 'Christopher Nolan',
      Writer:
        'Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)',
      Actors: 'Christian Bale, Michael Caine, Liam Neeson, Katie Holmes',
      Plot:
        'After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.',
      Language: 'English, Urdu, Mandarin',
      Country: 'USA, UK',
      Awards: 'Nominated for 1 Oscar. Another 15 wins & 66 nominations.',
      Poster:
        'http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg',
      Metascore: '70',
      imdbRating: '8.3',
      imdbVotes: '972,584',
      imdbID: 'tt0372784',
      Type: 'movie',
      Response: 'True'
    },
    {
      Title: 'Avatar',
      Year: '2009',
      Rated: 'PG-13',
      Released: '18 Dec 2009',
      Runtime: '162 min',
      Genre: 'Action, Adventure, Fantasy',
      Director: 'James Cameron',
      Writer: 'James Cameron',
      Actors: 'Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang',
      Plot:
        'A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.',
      Language: 'English, Spanish',
      Country: 'USA, UK',
      Awards: 'Won 3 Oscars. Another 80 wins & 121 nominations.',
      Poster:
        'http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg',
      Metascore: '83',
      imdbRating: '7.9',
      imdbVotes: '876,575',
      imdbID: 'tt0499549',
      Type: 'movie',
      Response: 'True'
    }
  ];

  const getRating = (watchList, director) => {
    const movies = watchList.reduce(
      (acc, movie) =>
        movie.Director === director
          ? {
              ratingSum: acc.ratingSum + parseFloat(movie.imdbRating),
              count: acc.count + 1
            }
          : acc,
      { count: 0, ratingSum: 0 }
    );

    const averageRating = movies.ratingSum / movies.count;
    return averageRating;
  };

  const averageRating = getRating(watchList, 'Christopher Nolan');

  console.log('averageRating:', averageRating);
  /* averageRating: 8.675 */
  console.groupEnd();
})();
