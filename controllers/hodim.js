const Hodim = require("../models/Hodim");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");

exports.getAll = async () => {
    const hodim = await Hodim.find().lean();

    res.status(200).json({
        success: true,
        data: hodim,
    });
};

exports.create = catchAsync(async (req, res, next) => {
    const hodim = await Hodim.create(req.body);

    res.status(200).json({
        success: true,
        data: hodim,
    });
});
