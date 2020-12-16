const YetkazibBeruvchi = require("../models/YetkazibBeruvchi");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");

exports.getAll = async () => {
    const yetber = await YetkazibBeruvchi.find().lean();

    return yetber;
};

exports.create = catchAsync(async (req, res, next) => {
    const yetber = await YetkazibBeruvchi.create(req.body);

    res.status(200).json({
        success: true,
        data: yetber,
    });
});
