export default function Home() {
  return (
    <section
      className="min-h-dvh bg-[url('/bg-bottom.svg'),url('/bg-top.svg')] bg-no-repeat 
    bg-position-[left_0px_bottom_0px,right_0px_top_0px] bg-size-[auto_400px,100px_100px]
    flex justify-center items-center"
    >
      <div className="flex flex-col justify-center items-center mx-[2%] my-16">
        <h1 className="text-5xl text-gray-700">Our Pricing</h1>
        <p> Annually Monthly</p>

        <p>
          Basic &dollar;19.99 &dollar;199.99 500 GB Storage 2 Users Allowed Send
          up to 3 GB Learn More
        </p>

        <p>
          Professional &dollar;24.99 &dollar;249.99 1 TB Storage 5 Users Allowed
          Send up to 10 GB Learn More
        </p>

        <p>
          Master &dollar;39.99 &dollar;399.99 2 TB Storage 10 Users Allowed Send
          up to 20 GB Learn More
        </p>
      </div>
    </section>
  );
}
