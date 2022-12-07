import mongoose from 'mongoose';
const { Schema } = mongoose;

const heatMapSchema = new Schema({
  date: { type: Date },
  timeStamp: { type: Number},
  objectId: { type: Number },
  x: { type: Number },
  y: { type: Number },
});

const HeatMap = mongoose.model("heatdata", heatMapSchema);
export default HeatMap;
