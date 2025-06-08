import { BsCartPlus } from "react-icons/bs"


export const ProductCard = () => {
  return (
    <article className="w-full flex flex-col items-center">
      <img className="rounded-lg max-h-70 mb-2"
        src="https://images.tcdn.com.br/img/img_prod/167552/fone_de_ouvido_apple_airpods_pro_mwp22be_a_13305_1_49b712f1e0c3353c688e35bd6034170e.jpg"
        alt="Logo do produto" />
      <p>Airpods Pro</p>
      <div className="flex gap-3 items-center">
        <strong className="text-zinc-700/90">R$ 1000</strong>
        <button className="bg-zinc-900 p-1 rounded">
          <BsCartPlus size={20} color="#FFF" />
        </button>
      </div>
    </article>
  )
}
