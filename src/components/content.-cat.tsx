import ItemCard from "@/components/item-card";

function ContentCat() {
  let linkImage = "https://cdn2.thecatapi.com/images";
  return (
    <div>
      <h1 className="text-center my-4 text-3xl">List Cat For Sale</h1>
        <div className="border-slate-900 border w-4/5 m-auto p-4 grid grid-cols-4 gap-5 rounded-3xl shadow-2xl">
          <ItemCard name="Abyssinian" imgCat={`${linkImage}/0XYvRd7oD.jpg`} />
          <ItemCard name="Bombay" imgCat={`${linkImage}/5iYq9NmT1.jpg`} />
          <ItemCard name="Cheetoh" imgCat={`${linkImage}/IFXsxmXLm.jpg`} />
          <ItemCard name="Donskoy" imgCat={`${linkImage}/3KG57GfMW.jpg`} />
          <ItemCard
            name="American Bobtail"
            imgCat={`${linkImage}/hBXicehMA.jpg`}
          />
          <ItemCard
            name="American Curl"
            imgCat={`${linkImage}/xnsqonbjW.jpg`}
          />
          <ItemCard name="Arabian Mau" imgCat={`${linkImage}/k71ULYfRr.jpg`} />
          <ItemCard name="Aegean" imgCat={`${linkImage}/ozEvzdVM-.jpg`} />
        </div>
    </div>
  );
}

export default ContentCat