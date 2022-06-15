export default function setWinText(score) {
  const numScore = +score;
  let returningValue;
  switch (numScore) {
      case 0:
          returningValue = `You managed to score 0 points! Do not be sad, the game can be played endlessly until greedy developers make it paid =)`
          break
      case 1:
          returningValue = `1 point is also the result! Unfortunately, you do not know birds very well, but we are sure that you know something else perfectly. Do not be sad!`
          break
      case 2:
          returningValue = `2 points is better than one! Yes, birds are not your forte, but you have succeeded in something else.`
          break
      case 3:
          returningValue = `3 points is also the result! Not the best, to be honest, but you tried! Try again, you'll have better luck!`
          break
      case 4:
          returningValue = `4 points - it would be great if there was only one round in the game! Until then, keep practicing and you'll be fine!`
          break
      case 5:
          returningValue = `5 points is an indication that you at least know how some birds sound. They will not be offended, but I would like you to recognize the voices of the birds better.`
          break
      case 6:
          returningValue = `6 points! You can tell an owl from a sparrow, but anything more complex is difficult. Try again and you'll do better`
          break
      case 7:
          returningValue = `7 points! Lucky number and it will definitely make you happier, we know that. But the birds will be grateful to you if you can better distinguish their singing.`
          break
      case 8:
          returningValue = `8 points! It is not clear what is better - to score 7 points and get into a lucky number, or still score 8 and proudly say that you have 1 point more. Find out for yourself what is best for you =)`
          break
      case 9:
          returningValue = `9 points! Lucky number and it will definitely make you happier, we know that. But the birds will be grateful to you if you can better distinguish their singing.`
          break
      case 10:
          returningValue = `10 points! This is a round number, and you can be proud of it. It could be considered an anniversary if you were celebrating a birthday instead of playing a bird game.`
          break
      case 11:
          returningValue = `11 points! This means that you already understand something about birds, and maybe they understand you! It's good when someone understands you =)`
          break
      case 12:
          returningValue = `12 points! If the birds were bees, they would never, never have allowed to build so high doooooom! Practice and you can score more!`
          break
      case 13:
          returningValue = `13 points! They say that this number is not lucky, but we are happy for you! You managed to score almost half of the possible points in this game, and we would encourage it financially if we had a budget for this =)`
          break
      case 14:
          returningValue = `14 points! Not bad, but could be better. You know the birds, and it pleases, but with their voices you need to work a little! By the way, you can participate in this game as many times as you like, go for it!`
          break
      case 15:
          returningValue = `15 points! This is exactly half of the possible maximum, and we are sincerely proud of you! Perhaps someday we will make a leaderboard, and you will be able to take a place somewhere in the middle of the list.`
          break
      case 16:
          returningValue = `16 points! You managed to score more than half of the points, and this is frankly cool! But it would be better if you practiced and scored more points. What if, if you score 30 points, they will give you an apartment in Moscow? Try again =)`
          break
      case 17:
          returningValue = `17 points! You know, this is a great result. It's not even 10 or 15, it's 17! In general, this game is addictive, so we are sure that you will achieve more. And the birds will sing for you tirelessly, they are virtual =)`
          break
      case 18:
          returningValue = `18 points! This is an indicator that you know birds not only from magazines and books, but also had a pet dinosaur, for example, a parrot. Get another canary, and then maybe you can score more! =)`
          break
      case 19:
          returningValue = `19 points! Almost 20, but 19! You tried and it's commendable! How nice it was to probably get the maximum score on some questions. We know that, we played =) Try further, you will succeed!`
          break
      case 20:
          returningValue = `20 points! We have been developing this game for almost the same number of years! It's a joke, only 19 =) But nevertheless, you are great, the birds mean a lot to you! Perhaps birds are generally the main thing in life, so we wish you to distinguish the voices of all birds!`
          break
      case 21:
          returningValue = `21 points! This is a super result, no exaggeration. You can tell a parrot from a beaver, and an ostrich from a chicken! In general, we are pleased, it was not in vain that we tried and made this game for you!`
          break
      case 22:
          returningValue = `22 points! Almost the maximum, it was only necessary to score 8 more points, but this will come with time! We are glad that there are people who can distinguish the voices of so many birds. We plan to mix up the bird voices and the text responses so that people think that the eagles are crowing, but it will be a little later when you score 30 points!`
          break
      case 23:
          returningValue = `23 points! This is really a very cool result, and the birds somewhere deep in their souls are grateful to you! In fact, they feel and understand everything, and now all the birds know how much you love them and listen to their voices!`
          break
      case 24:
          returningValue = `24 очка! Замечательно! Почти тотальная победа! Но вот только не хватило 6 баллов =) Птички хотят, чтобы вы победили, и это произойдет, когда вы сможете правильно ответить на все вопросы! Действуйте!`
          break
      case 25:
          returningValue = `25 points! I remember when our parrot was 25, he dreamed of mangoes, but mangoes do not grow in Antarctica. Now he is 53 and dreams of cucumbers while living in Bali. It is a pity that cucumbers do not grow in Bali!`
          break
      case 26:
          returningValue = `26 points! This is excellent and deserves praise! You almost reached the maximum, 4 points were not enough! Probably embarrassing? We are offended! But in any case, we believe, without understatement or exaggeration, that you are a genius, and you know as much about birds as we never dreamed of!`
          break
      case 27:
          returningValue = `27 points! Incredible result! You can give talks on bird topics and we are sure that you will be able to imitate any bird trill! Birds are already flying to your home, wait! They really want to spend time with you. We are sure that if you look outside, you will see at least one bird there! She loves you =)`
          break
      case 28:
          returningValue = `28 points! We are wondering if you are a bird? Too many coincidences! The last time our parrot scored the same number of points, and this is a direct analogy! It is a pity that we still do not know how to track our users by IP, we would find you and shake hands!`
          break
      case 29:
          returningValue = `29 points! This is probably a shame, almost reaching the maximum, and making a mistake somewhere, most likely by an absurd accident! Come on, you can score 30! But congratulations, great result! Thousands of birds applaud you!`
          break
      case 30:
          returningValue = `30 points! Let's be honest, even the developers of this game in my person still cannot score 30 points, and they use codes - IDDQD, IDKFA, and others! You are either an ornithologist, or a bird, or a hacker, although this game cannot be hacked, it is made in React, and an SSL certificate is configured on the domain! We congratulate you very much!`
          break
      default:
          returningValue = "Weird case! You are either a cheater, or you somehow managed to get more than 30 points or less than 0!"
  }

  return returningValue
}