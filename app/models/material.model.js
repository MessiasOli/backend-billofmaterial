module.exports = mongoose => {
  const Material = mongoose.model(
    "material",
    mongoose.Schema(
      {
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