Meteor.startup (function () {
  if (Posts.find().count() === 0) {
    var names = [{title: "What is the HTML?",
                  body: "WTF is HTML anyways..."
                },
                {title: "Why is the sky blue?",
                  body: "I mean I get people THINK it's blue but who's to say it's not"
                },
                {title: "Does anyone know how the surf is?",
                  body: "It is always good in Hawaii"
                }
                ];
    for (var i = 0; i < names.length; i++) {
      Posts.insert({title: names[i].title, body: names[i].body, score: 0});
    }
  }
});