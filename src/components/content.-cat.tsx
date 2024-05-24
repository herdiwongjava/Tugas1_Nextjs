import ItemCard from "@/components/item-card";

function ContentCat() {
  let linkImage = "https://cdn2.thecatapi.com/images";
  return (
    <div className="w-full bg-orange-100 py-10 border-t-orange-500">
      <h1 className="text-center my-4 text-3xl">List Cat For Sale</h1>
        <div className="bg-white border-slate-900 border w-4/5 m-auto p-4 flex flex-wrap justify-around rounded-3xl shadow-2xl">
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