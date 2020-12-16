const express = require("express");
const mongoose = require("mongoose");

const methodOverride = require("method-override");
const bodyParser = require("body-parser");
require("dotenv/config");
const app = express();

const Hodim = require("./models/Hodim");
const Bemor = require("./models/Bemor");
const Dori = require("./models/Dori");
const YetBer = require("./models/YetkazibBeruvchi");

mongoose.connect(process.env.ConnectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
});

app.disable("x-powered-by");
app.use(
    bodyParser.json({
        limit: "50mb",
        extended: true,
    })
);
app.use(
    bodyParser.urlencoded({
        limit: "50mb",
        extended: true,
        parameterLimit: 50000,
    })
);
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.header("Access-Control-Expose-Headers", "x-token");
    next();
});

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));

// asosiy routelar
app.get("/", (req, res, next) => {
    res.render("index");
});

app.get("/hodimlar", async (req, res) => {
    const hodimlar = await Hodim.find().lean();

    res.render("hodimlar", { hodimlar: hodimlar });
});

app.post("/hodimlar", async (req, res, next) => {
    const hodim = await Hodim.create(req.body);

    res.status(200).json({
        success: true,
        data: hodim,
    });
});

app.get("/bemorlar", async (req, res) => {
    const bemorlar = await Bemor.find()
        .populate([{ path: "doktori" }, { path: "dorilar" }])
        .lean();

    res.render("bemorlar", { bemorlar: bemorlar });
});

app.post("/bemorlar", async (req, res, next) => {
    const bemor = await Bemor.create(req.body);

    res.status(200).json({
        success: true,
        data: bemor,
    });
});

app.get("/dorilar", async (req, res) => {
    const dorilar = await Dori.find().lean();

    res.render("dorilar", { dorilar: dorilar });
});

app.post("/dorilar", async (req, res, next) => {
    const dori = await Dori.create(req.body);

    res.status(200).json({
        success: true,
        data: dori,
    });
});

app.get("/yetberlar", async (req, res) => {
    const yetberlar = await YetBer.find().lean();

    res.render("yetberlar", { yetberlar: yetberlar });
});

app.post("/yetberlar", async (req, res, next) => {
    const yetber = await YetBer.create(req.body);

    res.status(200).json({
        success: true,
        data: yetber,
    });
});

// app.use("/articles", articleRouter);
// app.use("/actors", actorRoute);
// app.use("/api", apiRoute);
// app.use("/users", userRoute);

app.listen(5000);
