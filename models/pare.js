import mongoose from "mongoose";
const { Schema, model } = mongoose;

const pareSchema = new Schema({
  nombre: {
    type: String,
    require: true,
  },

  items: [{ tipo: String, gauss: Number, precio: Number }],
});

export default model("Pare", pareSchema);
