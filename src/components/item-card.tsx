import Image from "next/image"

interface Cat {
    name : string,
    imgCat : string
}

function ItemCard ({name, imgCat}:Cat) {
    return (
        <div className="border-orange-600 border rounded-2xl overflow-hidden m-2">
            <Image
                src={imgCat}
                alt={name} 
                width={300} 
                height={250} 
                className="object-cover opacity-80 h-40 hover:opacity-100"
                />
            <h2 className="text-xl text-center font-bold">{name}</h2>
        </div>
    );
}
export default ItemCard