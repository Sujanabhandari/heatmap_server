
import asyncHandler from "../utils/asyncHandler.js";
import HeatMap from "../models/HeatMap.js";

const getAllData = asyncHandler(async (req, res, next) => {
  const allData = await HeatMap.find();
  res.status(200).send(allData);
}
);

export {
  getAllData
};
