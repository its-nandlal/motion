import Image from "next/image";

export default function Getway() {
  return (
    <section className="w-full h-screen">
      <Image
      src={"https://i.pinimg.com/736x/28/60/7a/28607abee735a5c7ab04d1eb42a20aab.jpg"}
      alt=""
      width={1000}
      height={1000}
      className="w-full h-full object-cover"/>
      <div className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <h1 className="font-bold text-4xl text-shadow-lg ">
          GATEWAY
        </h1>
      </div>
    </section>
  )
}
