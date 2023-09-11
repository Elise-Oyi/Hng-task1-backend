import express from "express";

const app = express();

const PORT = 4000;


//-- getting date and time
const weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

var today = new Date();

const day = weekday[today.getDay()];

// var time = today.getTime()

// console.log(today.getHours())

function getCurrentUTCTimeWithWindow() {
  const now = new Date();
  const windowOffset = Math.floor(Math.random() * 240000) - 120000; // +/-2 minutes in milliseconds
  const currentTimeWithWindow = now.getTime() + windowOffset;
  const dateWithWindow = new Date(currentTimeWithWindow);

  return dateWithWindow.toISOString().split('.')[0] + 'Z';
}


const utcTimeWithWindow = getCurrentUTCTimeWithWindow();
// console.log(utcTimeWithWindow);

const data = {
  slack_name: "mary_elise_angbo",
  track: "backend"
};

app.get('/api', (req, res) => {
    const slack_name = req.query.slack_name
    const track = req.query.track

    if(data.slack_name === slack_name && data.track === track){

        const response = {
            slack_name: data.slack_name,
            current_day: day,
            utc_time: utcTimeWithWindow,
            track: "backend",
            github_file_url: 'data.github_file_url',
            github_repo_url: 'data.github_repo_url',
            status_code: 200,
        }

          res.json(response);
    }
    else{
        res.json('Not Found')
    }

});


app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}...`);
  });
  