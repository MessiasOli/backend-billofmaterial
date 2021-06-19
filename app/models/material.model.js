module.exports = mongoose => {
  const Material = mongoose.model(
    "material",
    mongoose.Schema(
      {
        idarea : string,
        idmaterial :string,
        description : string,
        price : number,
        unitmensurement : string,
        specificvalue : number
      },
      { timestamps: true }
    )
  );
  return Material;
}