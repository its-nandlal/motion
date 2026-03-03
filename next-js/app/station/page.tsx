import Image from "next/image";

export default function Station() {
  return (
    <section className="w-full h-screen">
      <Image
      src={"https://i.pinimg.com/1200x/f3/7e/c5/f37ec55a8e7df84573423d611796ea91.jpg"}
      alt=""
      width={1000}
      height={1000}
      className="w-full h-full object-cover"/>
      <div className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <h1 className="font-bold text-4xl text-shadow-lg ">
          STATION
        </h1>
      </div>
    </section>
  )
}
