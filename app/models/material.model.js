module.exports = mongoose => {
  const Material = mongoose.model(
    "material",
    mongoose.Schema(
      {
        idmaterial: String,
        idprocess : String,
        description : String,
        price : Number,
        unitmensurement : String,
        specificvalue : Number
      },
      { timestamps: true }
    )
  );
  return Material;
}