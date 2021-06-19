module.exports = mongoose => {
  const Produto = mongoose.model(
    "produto",
    mongoose.Schema(
      {
        titulo: String,
        descricao: String,
        preco: Number
      },
      { timestamps: true }
    )
  );
  return Produto;
}