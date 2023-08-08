
export default function CardPolaroid({ src, alt, text}) {
  return (
    <div className="w-2/5 flex flex-col items-start p-1 m-1 bg-blue-300">
            <img src={src} alt={alt} />
            <p className="text-[20px]">{text} </p>
          </div>
  )
}