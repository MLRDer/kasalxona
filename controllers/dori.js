const Dori = require("../models/Dori");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");

exports.getAll = async () => {
    const dori = await Dori.find().lean();

    return dori;
};

exports.exports.create = catchAsync(async (req, res, next) => {
    const dori = await Dori.create(req.body);

    res.status(200).json({
        success: true,
        data: dori,
    });
});
