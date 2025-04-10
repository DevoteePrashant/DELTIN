"use client"
import React from "react"
import "animate.css"
import "../../src/index.css";
import img from "../assets/img/vegetables 10.png"; 
import img1 from "../assets/img/Group 7.png"; 
import img4 from "../assets/img/Rectangle 19.png"; 
import img6 from "../assets/img/8909186 1.png"; 
import img7 from "../assets/img/icon.svg (5) 1.png"; 
import img8 from "../assets/img/4689710 1.png"; 
import img9 from "../assets/img/1534216 1.png"; 
import img10 from "../assets/img/Rectangle 32.png"; 
import img11 from "../assets/img/fresh-green-leaves-flying-wind_1153237-10 1.png"; 
import img2 from "../assets/img/strawberry-berry-levitating-white-background 1.png"; 
import img3 from "../assets/img/top-view-assortment-vegetables-paper-bag 1.png"; 
import Navbar from "../components/Navbar.jsx" 

function Home() {
  const [activeFilter, setActiveFilter] = React.useState("all")

  const allProducts = [
    { id: 1, name: "Carrot", type: "vegetables" },
    { id: 2, name: "Broccoli", type: "vegetables" },
    { id: 3, name: "Tomato", type: "vegetables" },
    { id: 4, name: "Apple", type: "fruits" },
    { id: 5, name: "Banana", type: "fruits" },
    { id: 6, name: "Orange", type: "fruits" },
    { id: 7, name: "Cucumber", type: "vegetables" },
    { id: 8, name: "Strawberry", type: "fruits" }
  ]

  const filteredProducts = React.useMemo(() => {
    if (activeFilter === "all") return allProducts
    return allProducts.filter(product => product.type === activeFilter)
  }, [activeFilter, allProducts])

  return (
    <div className=" w-full bg-[#ffffff] h-[900px] relative">
      {/* Hero Section */}
      <section className="relative flex items-center justify-center w-full h-screen bg-[#ffffff] overflow-hidden">
  {/* Flex Container for Veggie Backgrounds */}
  <div className="absolute inset-0 flex flex-wrap md:hidden">
    {[
      10, 20, 21, 30, 40, 50, 60, 70, 80, 90, 
      100, 110, 120, 130, 140, 150, 160, 170
    ].map((num) => (
      <img
        key={`veg-mobile-${num}`}
        src={img}
        alt={`Vegetable pattern ${num}`}
        className="w-1/3 h-auto opacity-60 object-cover scale-y-[-1]"
      />
    ))}
  </div>

  <div className="absolute inset-0 hidden md:block">
    {[
      10, 20, 21, 30, 40, 50, 60, 70, 80, 90, 
      100, 110, 120, 130, 140, 150, 160, 170
    ].map((num, index) => {
      const columns = 6;
      const widthPercent = 100 / columns;
      const heightPercent = 33.33;

      return (
        <img
          key={`veg-desktop-${num}`}
          src={img}
          alt={`Vegetable pattern ${num}`}
          className="absolute object-cover scale-y-[-1] opacity-20"
          style={{
            left: `${(index % columns) * widthPercent}%`,
            top: `${Math.floor(index / columns) * heightPercent}%`,
            width: `${widthPercent}%`,
            height: `${heightPercent}%`,
          }}
        />
      );
    })}
  </div>

  {/* ✨ Hero Content (Centered with Flex) */}
<div
  className="z-10 max-w-3xl w-full animate__animated animate__slideInLeft mx-auto md:mx-0 px-4 md:px-0"
  style={{
    animationDelay: "0.2s",
    animationDuration: "1.2s",
  }}
>

  <h1 className="text-left font-bold text-3xl md:text-5xl">
    <span className="text-[#127BAA]">Completely</span>{" "}
    <span className="text-primary">Pure</span>
  </h1>

  <h2 className="text-deltine-black text-left text-xl md:text-[32px] font-semibold mt-4 md:mt-[39px]">
    Fresh &amp; Natural Farm Food
  </h2>

  <p className="text-deltine-black text-left text-base md:text-xl mt-4 md:mt-[38px] md:w-[616px]">
    Experience the goodness of nature with our completely pure and nutrient-rich produce...
  </p>

  <button className="bg-[#127BAA] text-white rounded-[30px] w-[136px] h-[42px] mt-[46px] font-medium text-[13px]">
    Inquiry Now
  </button>
</div>


  {/* Foreground Vegetable Image */}
  <img
    src={img3 || "/placeholder.svg"}
    alt="Assortment of vegetables"
    className="absolute object-cover z-0
    w-full lg:w-auto lg:h-[744px]
    right-[21.60%] lg:right-auto lg:left-[853px]
    top-[40%] lg:top-[192px] mt-[274px] lg:mt-0"
  />

  {/* Decorative Strawberry */}
  <img
    src={img2 || "/placeholder.svg"}
    alt="Strawberry decoration"
    className="absolute filter blur-sm object-cover
    hidden lg:hidden xl:block z-0
    w-[150px] lg:w-[259px] h-[150px] lg:h-[259px]
    left-[58%] lg:left-[1px] bottom-[5%] lg:top-[680px]"
  />

  {/* Navbar */}
  <Navbar />
</section>

      {/* About Section */}
   {/* About Section */}
<section className="bg-gray-800 w-full h-[718px] relative">
  {/* Background img Pattern */}
  <div className="absolute inset-0 opacity-70 z-0">
    <img
      src={img1 || "/placeholder.svg"}
      alt="Background pattern"
      fill
      className="object-cover w-full h-full"
      priority
    />
  </div>

  <div className="w-full h-full mx-auto relative">
    {/* Main Content Container with Mobile Styling */}
    <div className="absolute left-1/2 transform -translate-x-1/2 z-10 flex flex-col md:flex-row items-center md:items-start gap-12 md:px-0 max-w-7xl mx-auto w-full top-8 md:top-[200px] px-4 md:px-6">
      {/* Empty Left Side on Desktop */}
      <div className="w-full md:w-1/2 text-center md:text-left"></div>

      {/* Text Content */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <p className="text-white font-['Nunito_Sans',_sans-serif] text-xl font-normal">
          About Deltine International
        </p>

        <h2 className="font-['Nunito_Sans',_sans-serif] text-[40px] font-bold mt-[11px]">
          <span className="text-white">Sustainable &</span>{" "}
          <span className="text-[#127BAA]">Healthy Product</span>
        </h2>

        <p className="text-[#efefef] font-['Nunito_Sans',_sans-serif] text-xl font-normal mt-[39px] max-w-[622px]">
          Our sustainable and healthy products are eco-friendly, responsibly
          sourced, and free from harmful chemicals. We prioritize freshness,
          quality, and environmental care, ensuring a healthier lifestyle
          for you and a greener planet. Choose nature's best for a
          sustainable and nutritious future.
        </p>

        <button className="bg-[#127BAA] text-white rounded-[30px] w-[136px] h-[42px] mt-[46px] font-medium text-[13px]">
          Inquiry Now
        </button>
      </div>
    </div>

    {/* Strawberry img */}
    <div className="absolute w-full md:w-1/2 bottom-0 start-0 flex justify-center md:justify-start">
      <img
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/strawberry-berry-levitating-white-background%202-czQe60kzQTkDtFMcj2OUJNefIOqDon.png"
        alt="Fresh strawberries"
        width={600}
        height={600}
        priority
      />
    </div>

    {/* Decorative Kiwi img */}
    <div className="absolute right-0 bottom-0 z-0 hidden md:block">
      <img
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a3080eec-f88c-4a04-85e3-6558b846267b%201-bq7PoOvSRLClWiunv9aoJJrHbXirxg.png"
        alt="Decorative kiwi slices"
        width={293}
        height={293}
      />
    </div>
  </div>
</section>

      {/* Products Section */}
      <section className="bg-white w-full py-16  relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="flex flex-wrap justify-between items-end mb-16">
          <div>
            <p className="text-cyan-800 font-['Nunito_Sans',_sans-serif] text-xl">
              Our Product
            </p>
            <h2 className="text-4xl font-bold font-['Nunito_Sans',_sans-serif] mt-3">
              <span className="text-black">Pure, Fresh, Sustainable, </span>
              <span className="text-cyan-800">Healthy, Natural</span>
            </h2>
          </div>
          <p className="text-cyan-800 font-['Nunito_Sans',_sans-serif] text-xl cursor-pointer">
            View All
          </p>
        </div>
{/* 
        /* Product Filter */} 
 <div className="flex justify-center mb-12 mx-2">
      <div className="bg-cyan-800 rounded-full w-full max-w-[404px] h-[66px] relative overflow-hidden">
        {/* Sliding Indicator - adjusted for equal padding */}
        <div
          className={`bg-white rounded-full h-[42px] w-[calc(33.33%-8px)] absolute top-3 transition-all duration-300
            ${
              activeFilter === "all"
                ? "left-[4px]"
                : activeFilter === "vegetables"
                  ? "left-[calc(33.33%+4px)]"
                  : "left-[calc(66.66%+4px)]"
            }`}
        ></div>

        {/* Filter Buttons */}
        <div className="flex w-full h-full text-center text-base font-medium font-['Nunito_Sans',_sans-serif]">
          <button
            className={`w-1/3 z-10 transition-colors ${activeFilter === "all" ? "text-cyan-800" : "text-white"}`}
            onClick={() => setActiveFilter("all")}
          >
            All Product
          </button>
          <button
            className={`w-1/3 z-10 transition-colors ${activeFilter === "vegetables" ? "text-cyan-800" : "text-white"}`}
            onClick={() => setActiveFilter("vegetables")}
          >
            Vegetables
          </button>
          <button
            className={`w-1/3 z-10 transition-colors ${activeFilter === "fruits" ? "text-cyan-800" : "text-white"}`}
            onClick={() => setActiveFilter("fruits")}
          >
            Fruits
          </button>
        </div>
      </div>
    </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 animate__animated animate__fadeInUp">
  {filteredProducts.map((product, index) => {
    // Pick a different animation class per index (cycle through)
    const animationTypes = [
      "animate__fadeInRight",
      "animate__fadeInRight",
      "animate__fadeInRight",
      "animate__fadeInRight",
    ];
    const animation = animationTypes[index % animationTypes.length];

    return (
      <div
        key={product.id}
        className={`relative overflow-hidden rounded group animate__animated ${animation}`}
        style={{
          animationDelay: `${index * 0.2}s`,
          animationDuration: "0.8s",
        }}
      >
        <div className="relative h-[314px] w-full">
          <img
            src={img4}
            alt={product.name}
            className="object-cover w-full h-full rounded-md"
          />

          {/* Gradient Overlay on Hover */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black rounded-md opacity-0 group-hover:opacity-80 transition-opacity duration-300"></div>

         {/* Text Overlay on Hover */}
<div className="absolute bottom-6 left-5 text-white transform translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
  <h3 className="font-bold text-xl font-['Nunito_Sans',_sans-serif] mb-1">
    {product.name}
  </h3>
  <p className="text-sm font-['Nunito_Sans',_sans-serif]">View Info</p>
</div>

        </div>
      </div>
    );
  })}
</div>



      </div>
    </section>

      {/* Why Choose Us Section */}
      <section className="bg-black w-full relative overflow-hidden py-16 md:py-0 md:h-[743px]">
      <div className=" h-full mx-auto relative px-4 md:px-6">
        {/* Background Pattern - Fruit outlines */}
        <div className=" absolute inset-0 z-0">
        <img
          src={img1 || "/placeholder.svg"}
          alt="Background pattern"
          fill
          className="object-cover w-full h-full"
          priority
        />
      </div>

        {/* Decorative leaves in top right */}
        <div className="absolute right-0 top-0 z-10">
          <img
            src={img11 || "/placeholder.svg"}
            alt="Decorative leaves"
            width={200}
            height={200}
            className="object-contain"
          />
        </div>

        {/* Main content container */}
        <div className="max-w-[1440px] flex flex-col md:flex-row items-center justify-between relative z-10 h-full">
          {/* Left side with kiwi imgimg */}
          <div className="w-full md:w-1/2 mb-10 md:mb-0 flex justify-center md:justify-start">
            <img
              src={ img10 || "/placeholder.svg"}
              alt="Fresh kiwi fruit with splash"
              width={400}
              height={500}
              className="object-contain"
            />
          </div>

          {/* Right side with content */}
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start">
            <p className="text-white text-center md:text-left font-sans text-xl font-normal">
              Why Choose Us
            </p>

            <h2 className="text-center md:text-left font-bold text-[32px] md:text-[40px] mt-[11px]">
              <span className="text-[#7EB942]">Freshness</span>{" "}
              <span className="text-[#127BAA]">Guaranteed Always</span>
            </h2>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[25px] gap-y-[50px] md:gap-y-[75px] mt-[50px] md:mt-[75px] w-full">
              {/* Feature 1 */}
              <div className="flex flex-col items-center md:items-start">
                <img
                   src={img7 || "/placeholder.svg"}
                  alt="Sustainable Practices icon"
                  width={60}
                  height={60}
                  className="mb-[15px]"
                />
                <h3 className="text-white text-center md:text-left font-bold text-xl md:text-2xl mb-[17px]">
                  Sustainable Practices
                </h3>
                <p className="text-[#ebebeb] text-center md:text-left font-sans text-base md:text-lg max-w-[344px]">
                  Eco-friendly sourcing and packaging solutions.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="flex flex-col items-center md:items-start">
                <img
                 src={img8 || "/placeholder.svg"}
                  alt="Global Export Services icon"
                  width={60}
                  height={60}
                  className="mb-[15px]"
                />
                <h3 className="text-white text-center md:text-left font-bold text-xl md:text-2xl mb-[17px]">
                  Global Export Services
                </h3>
                <p className="text-[#ebebeb] text-center md:text-left font-sans text-base md:text-lg max-w-[344px]">
                  Supplying internationally with reliable logistics.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="flex flex-col items-center md:items-start">
                <img
                  src={img9 || "/placeholder.svg"}
                  alt="Fresh from Farms icon"
                  width={60}
                  height={60}
                  className="mb-[15px]"
                />
                <h3 className="text-white text-center md:text-left font-bold text-xl md:text-2xl mb-[17px]">
                  Fresh from Farms
                </h3>
                <p className="text-[#ebebeb] text-center md:text-left font-sans text-base md:text-lg max-w-[344px]">
                  Direct sourcing from trusted farms ensures maximum freshness.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="flex flex-col items-center md:items-start">
                <img
                   src={img6 || "/placeholder.svg"}
                  alt="Quality Assurance icon"
                  width={60}
                  height={60}
                  className="mb-[15px]"
                />
                <h3 className="text-white text-center md:text-left font-bold text-xl md:text-2xl mb-[17px]">
                  Quality Assurance
                </h3>
                <p className="text-[#ebebeb] text-center md:text-left font-sans text-base md:text-lg max-w-[344px]">
                  Rigorous quality checks at every stage of handling.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

      {/* Services Section */}
      <section className="bg-[#ffffff] w-full h-[862px] relative overflow-hidden">
        <div className="max-w-[1440px] h-full mx-auto relative">
          <div className="absolute left-[100px] top-[60px]">
            <p className="text-deltine-black text-left font-['NunitoSans-Regular',_sans-serif] text-xl font-normal">
              Our Services
            </p>

            <h2 className="text-left font-['NunitoSans-Bold',_sans-serif] text-[40px] font-bold mt-[11px]">
              <span className="text-black">Complete solutions for</span>{" "}
              <span className="text-primary">all produce.</span>
            </h2>
          </div>

          {/* Services Grid */}
          <div className="absolute left-[100px] top-[202px] grid grid-cols-2 gap-6">
            {/* Service 1 - Large */}
            <div className="relative">
              <img
                src="/placeholder.svg?height=600&width=608"
                alt="Service 1"
                width={608}
                height={600}
                className="rounded-[20px] object-cover"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%,rgba(0, 0, 0, 1.00) 100%)"
                }}
              />

              <div className="absolute left-[30px] bottom-[60px]">
                <img
                  src="/placeholder.svg?height=60&width=60"
                  alt="Service icon"
                  width={60}
                  height={60}
                  className="mb-[14px]"
                />
                <h3 className="text-white text-left font-['NunitoSans-Bold',_sans-serif] text-2xl font-bold mb-[17px]">
                  Organic Farming
                </h3>
                <p className="text-[#fbfbfb] text-left font-['NunitoSans-Regular',_sans-serif] text-xl font-normal w-[425px]">
                  Large-scale bulk orders for businesses with competitive
                  pricing and reliable delivery.
                </p>
              </div>
            </div>

            {/* Service Column */}
            <div className="flex flex-col gap-5">
              {/* Service 2 */}
              <div className="relative">
                <img
                  src="/placeholder.svg?height=290&width=608"
                  alt="Service 2"
                  width={608}
                  height={290}
                  className="rounded-[20px] object-cover"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%,rgba(0, 0, 0, 1.00) 100%)"
                  }}
                />

                <div className="absolute left-[30px] bottom-[30px]">
                  <img
                    src="/placeholder.svg?height=60&width=60"
                    alt="Retail Distribution icon"
                    width={60}
                    height={60}
                    className="mb-[14px]"
                  />
                  <h3 className="text-white text-left font-['NunitoSans-Bold',_sans-serif] text-2xl font-bold mb-[17px]">
                    Retail Distribution
                  </h3>
                  <p className="text-[#fbfbfb] text-left font-['NunitoSans-Regular',_sans-serif] text-xl font-normal w-[393px]">
                    Supplying to small businesses with flexible quantities and
                    regular delivery schedules.
                  </p>
                </div>
              </div>

              {/* Service 3 */}
              <div className="relative">
                <img
                  src="/placeholder.svg?height=290&width=608"
                  alt="Service 3"
                  width={608}
                  height={290}
                  className="rounded-[20px] object-cover"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%,rgba(0, 0, 0, 1.00) 100%)"
                  }}
                />

                <div className="absolute left-[30px] bottom-[30px]">
                  <img
                    src="/placeholder.svg?height=60&width=60"
                    alt="Organic Farming icon"
                    width={60}
                    height={60}
                    className="mb-[14px]"
                  />
                  <h3 className="text-white text-left font-['NunitoSans-Bold',_sans-serif] text-2xl font-bold mb-[17px]">
                    Organic Farming
                  </h3>
                  <p className="text-[#fbfbfb] text-left font-['NunitoSans-Regular',_sans-serif] text-xl font-normal w-[344px]">
                    Partnering with organic growers to provide certified organic
                    produce.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <p className="text-primary text-left font-['NunitoSans-Regular',_sans-serif] text-xl font-normal absolute right-[178px] top-[98px]">
            View All
          </p>
        </div>
      </section>

      {/* Partners Section */}
      <section className="bg-deltine-black w-full h-[126px] relative overflow-hidden">
        <div className="max-w-[1440px] h-full mx-auto relative">
          {/* Background Pattern */}
          <div className=" inset-0 overflow-hidden opacity-30">
            {[
              13,
              26,
              27,
              33,
              43,
              53,
              63,
              73,
              83,
              93,
              103,
              113,
              123,
              133,
              143,
              153,
              163,
              173
            ].map((num, index) => (
              <img
                key={`veg-partners-${num}`}
                src={`/placeholder.svg?height=366&width=368`}
                alt={`Pattern ${num}`}
                width={368}
                height={366}
                className="absolute object-cover scale-y-[-1]"
                style={{
                  left: `${(index % 6) * 368 - 384}px`,
                  top: `${Math.floor(index / 6) * 366 - 25}px`
                }}
              />
            ))}
          </div>

          {/* Partner Logos */}
          <div className="flex justify-center items-center h-full">
            {[...Array(12)].map((_, index) => (
              <div
                key={`partner-${index}`}
                className="w-[140px] h-[46px] mx-[10px]"
              >
                <img
                  src="/placeholder.svg?height=40&width=120"
                  alt={`Partner logo ${index + 1}`}
                  width={120}
                  height={40}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-[#ffffff] w-full h-[715px] relative overflow-hidden">
        <div className="max-w-[1440px] h-full mx-auto relative">
          <div className="text-center mb-[95px]">
            <p className="text-deltine-black text-center font-['NunitoSans-Regular',_sans-serif] text-xl font-normal pt-[60px]">
              Testimonial
            </p>

            <h2 className="text-center font-['NunitoSans-Bold',_sans-serif] text-[40px] font-bold mt-[11px]">
              <span className="text-black">Transformative Client</span>{" "}
              <span className="text-primary">Experiences</span>
            </h2>
          </div>

          {/* Testimonials Grid */}
          <div className="flex justify-center gap-6">
            {[...Array(3)].map((_, index) => (
              <div
                key={`testimonial-${index}`}
                className="rounded-[20px] w-[397px] h-[453px] relative overflow-hidden bg-primary"
              >
                {/* Decorative Elements */}
                <img
                  src="/placeholder.svg?height=321&width=321"
                  alt="Decorative element"
                  width={321}
                  height={321}
                  className="absolute right-[-33.75%] top-[59px] opacity-50 filter blur-sm object-cover"
                />

                <img
                  src="/placeholder.svg?height=259&width=259"
                  alt="Quote icon"
                  width={259}
                  height={259}
                  className="absolute left-0 top-0 object-contain"
                />

                {/* Testimonial Content */}
                <div className="absolute left-[30px] top-[146px] w-[337px]">
                  <p className="text-white text-left font-['NunitoSans-Regular',_sans-serif] text-xl font-normal">
                    The quality of produce from Deltin International has helped
                    us maintain our high standards. Their range of organic
                    options has been particularly valuable for our
                    health-conscious guests.
                  </p>
                </div>

                {/* Author */}
                <div className="absolute left-[30px] bottom-[26px] flex items-center">
                  <img
                    src="/placeholder.svg?height=60&width=60"
                    alt="Testimonial author"
                    width={60}
                    height={60}
                    className="rounded-full object-cover"
                  />

                  <div className="ml-[10px]">
                    <p className="text-deltine-black text-left font-['NunitoSans-Bold',_sans-serif] text-xl font-bold">
                      Krushant V.
                    </p>
                    <p className="text-deltine-black text-left font-['NunitoSans-Regular',_sans-serif] text-sm font-normal">
                      Developer
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-deltine-black w-full h-[903px] relative overflow-hidden">
        <div className="max-w-[1440px] h-full mx-auto relative">
          {/* Background Pattern */}
          <div className="absolute inset-0 overflow-hidden opacity-10">
            {[14, 15, 16, 17, 28, 29, 34, 35, 36, 37, 44, 45, 46, 47].map(
              (num, index) => (
                <img
                  key={`veg-contact-${num}`}
                  src={`/placeholder.svg?height=366&width=368`}
                  alt={`Pattern ${num}`}
                  width={368}
                  height={366}
                  className="absolute object-cover scale-y-[-1]"
                  style={{
                    left: `${(index % 4) * 368 - 384}px`,
                    top: `${Math.floor(index / 4) * 366 - 537}px`
                  }}
                />
              )
            )}
            {[54, 55, 56, 57, 64, 65, 66, 67, 74, 75, 76, 77].map(
              (num, index) => (
                <img
                  key={`veg-contact-${num}`}
                  src={`/placeholder.svg?height=366&width=368`}
                  alt={`Pattern ${num}`}
                  width={368}
                  height={366}
                  className="absolute object-cover scale-y-[-1]"
                  style={{
                    left: `${(index % 4) * 368 - 384}px`,
                    top: `${Math.floor(index / 4) * 366 + 561}px`
                  }}
                />
              )
            )}
          </div>

          {/* Decorative img */}
          <img
            src="/placeholder.svg?height=833&width=833"
            alt="Decorative element"
            width={833}
            height={833}
            className="absolute right-[107px] top-[107px] object-cover"
          />

          {/* Contact Form */}
          <div className="absolute left-[100px] top-[60px] z-10">
            <p className="text-white text-left font-['NunitoSans-Regular',_sans-serif] text-xl font-normal">
              Get in Touch
            </p>

            <h2 className="text-left font-['NunitoSans-Bold',_sans-serif] text-[40px] font-bold mt-[11px]">
              <span className="text-primary">Have questions?</span>{" "}
              <span className="text-white">Contact us</span>{" "}
              <span className="text-primary">today.</span>
            </h2>

            <form className="mt-[35px] w-[694px]">
              <div className="border-solid border-[#eaeaea] border-b pt-2.5 pr-2.5 pb-8 pl-2.5 mb-[30px]">
                <label className="text-white text-left font-['NunitoSans-Regular',_sans-serif] text-2xl leading-9 font-normal">
                  Your Name
                </label>
                <input
                  type="text"
                  className="w-full bg-transparent outline-none"
                />
              </div>

              <div className="border-solid border-[#eaeaea] border-b pt-2.5 pr-2.5 pb-8 pl-2.5 mb-[30px]">
                <label className="text-white text-left font-['NunitoSans-Regular',_sans-serif] text-2xl leading-9 font-normal">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full bg-transparent outline-none"
                />
              </div>

              <div className="border-solid border-[#eaeaea] border-b pt-2.5 pr-2.5 pb-8 pl-2.5 mb-[30px]">
                <label className="text-white text-left font-['NunitoSans-Regular',_sans-serif] text-2xl leading-9 font-normal">
                  Phone Number (optional)
                </label>
                <input
                  type="tel"
                  className="w-full bg-transparent outline-none"
                />
              </div>

              <div className="border-solid border-[#eaeaea] border-b pt-2.5 pr-2.5 pb-[100px] pl-2.5 mb-[50px] h-[146px]">
                <label className="text-white text-left font-['NunitoSans-Regular',_sans-serif] text-2xl leading-9 font-normal">
                  Message
                </label>
                <textarea className="w-full bg-transparent outline-none resize-none"></textarea>
              </div>

              <button className="bg-primary text-white rounded-[77px] py-8 px-[25px] w-[309px] flex items-center justify-center">
                <span className="text-center font-['NunitoSans-SemiBold',_sans-serif] text-[22px] font-semibold mr-2">
                  Send a Message
                </span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 12H19M19 12L12 5M19 12L12 19"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-deltine-black w-full h-[733px] relative overflow-hidden">
        <div className="max-w-[1440px] h-full mx-auto relative">
          {/* Background Pattern */}
          <div className="absolute inset-0 overflow-hidden opacity-10">
            {[
              16,
              17,
              36,
              37,
              56,
              57,
              66,
              67,
              76,
              77,
              86,
              87,
              96,
              97,
              106,
              107,
              116,
              117
            ].map((num, index) => (
              <img
                key={`veg-footer-${num}`}
                src={`/placeholder.svg?height=366&width=368`}
                alt={`Pattern ${num}`}
                width={368}
                height={366}
                className="absolute object-cover scale-y-[-1]"
                style={{
                  left: `${(index % 6) * 368 - 384}px`,
                  top: `${Math.floor(index / 6) * 366 - 537}px`
                }}
              />
            ))}
          </div>

          {/* Decorative img */}
          <img
            src="/placeholder.svg?height=399&width=399"
            alt="Decorative fruit"
            width={399}
            height={399}
            className="absolute left-[-149px] top-[487px] transform rotate-[-9.916deg] filter blur-sm object-cover"
          />

          {/* Newsletter */}
          <div className="text-center pt-[50px] mb-[50px]">
            <h2 className="text-white text-center font-['Gerbil-Regular',_sans-serif] text-[40px] leading-[54px] font-normal">
              Subscribe to
              <br />
              our newsletter
            </h2>

            <p className="text-white text-center font-['Inter-Regular',_sans-serif] text-xl leading-9 font-normal mt-[18px]">
              To make your stay special and even more memorable
            </p>
          </div>

          {/* Footer Divider */}
          <div className="border-t border-white w-full"></div>

          {/* Footer Links */}
          <div className="flex justify-between pt-[50px] px-[100px]">
            {/* Logo */}
            <div>
              <img
                src="/placeholder.svg?height=184&width=184"
                alt="Deltine Logo"
                width={184}
                height={184}
                className="object-cover"
              />
            </div>

            {/* Company Links */}
            <div>
              <h3 className="text-white text-left font-['Inter-Regular',_sans-serif] text-[22px] leading-[30px] font-normal mb-[39px]">
                Company
              </h3>
              <ul className="text-white text-left font-['Inter-Regular',_sans-serif] text-xl leading-[30px] font-normal space-y-6">
                <li>Home</li>
                <li>About</li>
                <li>Service</li>
                <li>Product</li>
              </ul>
            </div>

            {/* Terms & Policies */}
            <div>
              <h3 className="text-white text-left font-['Inter-Regular',_sans-serif] text-[22px] leading-[30px] font-normal mb-[39px]">
                Terms &amp; Policies
              </h3>
              <ul className="text-white text-left font-['Inter-Regular',_sans-serif] text-xl leading-[30px] font-normal space-y-6">
                <li>Privacy Policy</li>
                <li>Terms &amp; Conditions</li>
                <li>Explore</li>
              </ul>
            </div>

            {/* Follow Us */}
            <div>
              <h3 className="text-white text-left font-['Inter-Regular',_sans-serif] text-[22px] leading-[30px] font-normal mb-[39px]">
                Follow Us
              </h3>
              <ul className="text-white text-left font-['Inter-Regular',_sans-serif] text-xl leading-[30px] font-normal space-y-6">
                <li>Instagram</li>
                <li>LinkedIn</li>
                <li>Youtube</li>
                <li>Twitter</li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-white text-left font-['Inter-Regular',_sans-serif] text-[22px] leading-[30px] font-normal mb-[39px]">
                Contact Us
              </h3>
              <div className="text-white text-left font-['Inter-Regular',_sans-serif] text-xl leading-[30px] font-normal w-[212px] space-y-6">
                <p>321, Pujan Plaza, Near Vanmadi Nayar Road, Puna Gam Surat</p>
                <p>(123) 456789000</p>
                <p>deltininternational88@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-white w-full mt-[50px]"></div>
          <p className="text-white text-center font-['Inter-Regular',_sans-serif] text-xl leading-[30px] font-normal pt-[20px]">
            © 2025 Deltin International. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}


export default Home;


