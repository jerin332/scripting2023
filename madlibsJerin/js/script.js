function generateStory() {
    const season = document.getElementById('season').value;
    const color = document.getElementById('color').value;
    const weather = document.getElementById('weather').value;
    const geography = document.getElementById('geography').value;
    const talent = document.getElementById('talent').value;
    const snack = document.getElementById('snack').value;
    const era = document.getElementById('era').value;
    const feeling = document.getElementById('feeling').value;


    const story = `On a  ${season} day in Bahrain, the sky suddenly turned ${color}, and the clouds started to up giving the toasted atmosphere the blessing of ${weather}. It was a very cherished phenomenon as it hasnt ${weather} before in Bahrain while in ${season}. As the ${weather} fell, the dusty streets were transformed into ${geography}, and the children dashed outside, laughing and playing in the unexpected break in the peak ${season}.`
        `Miriam, a young girl with a vivid ${talent}, rushed to the courtyard of her house to experience this. As she started creating a melody in her head with all those ${weather}_____(weather) falling on the palm trees and hitting the ground. As she was enjoying this her grandmother joined her with some tea and her favorite ${snack}____(snack), they sat together sipping their tea. Her grandmother started to tell stories of the ${era}(time period) on how rare and cherished the ${weather} was on the island. 
The ${weather} continued, creating an atmosphere that felt entirely different from what they were accustomed to. It was like desert was quenching its ${feeling} after a long time. As the sun began to set and the ${weather}slowed, Miriam and her grandmother sat on the porch cherishing the graceful day.`;


    document.getElementById('generateStory').innerText = story;
    document.getElementById('storyOut').classList.remove('hidden');

}
