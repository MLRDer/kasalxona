const Bemor = require("../models/Bemor");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");

exports.getAll = async () => {
    const bemor = await Bemor.find().lean();

    return bemor;
};

exports.create = catchAsync(async (req, res, next) => {
    const bemor = await Bemor.create(req.body);

    res.status(200).json({
        success: true,
        data: bemor,
    });
});
