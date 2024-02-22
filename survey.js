const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name? Nicknames are also acceptable :) ", (name) => {

  rl.question("What's an activity you like doing? ", (activity) => {

    rl.question("whats your favourite animal? ", (animal) => {

      rl.question("What genre of music is your favourite? ", (music) => {

        rl.question("What season do you prefer? ", (season) => {

          rl.question(`What's your favourite accessory to wear during ${season}? `, (accessory) => {

            console.log(`${name}, that's an awesome name!`);
            console.log(`${activity} sounds like a good time`);
            console.log(`${animal} are interesting.`);
            console.log(`${music} sweet! Mine is R&B`);
            console.log(`${season}, they're all pretty good`);
            console.log(`${accessory}, Pretty`);
            console.log("Thanks for playing!")

            rl.close();
          });
        });
      });
    });
  });

});

