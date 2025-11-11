import bodyParser from "body-parser";
import { generatePrediction } from "./cohere/app.mjs";
import express from "express";
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(cors());

app.get("/", (req, res) => {
  res.send("sever is ready");
});

app.get("/api", (req, res) => {
  const cities = [
    { id: 1, cityname: "Mumbai" },
    { id: 2, cityname: "Delhi" },
    { id: 3, cityname: "Bangalore" },
    { id: 4, cityname: "Hyderabad" },
    { id: 5, cityname: "Chennai" },
    { id: 6, cityname: "Kolkata" },
    { id: 7, cityname: "Ahmedabad" },
    { id: 8, cityname: "Pune" },
    { id: 9, cityname: "Surat" },
    { id: 10, cityname: "Jaipur" },
  ];

  res.send(cities);
});

app.post("/api/main", async (req, res) => {
  const newtripdata = {
    place: req.body.place,
    startdate: req.body.startDate,
    endate: req.body.endDate,
    description: req.body.description,
    people: req.body.numberOfPeople,
  };

  console.log("Received data from frontend:", newtripdata);

  const prediction = await generatePrediction(
    `Give  iterinary for travelling to ${newtripdata.place} for starting date from ${newtripdata.startdate}  to end date  ${newtripdata.endate} customise  with this preferences ${newtripdata.description} add data of travelling with date , mode of travelling , also add some travelling tips look good `,
    5000
  );

//   const senddata = prediction.generations[0];
  console.log("data in sever js",prediction);
  res.status(200).json({data: prediction});
});

const port = 3000;

app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});
