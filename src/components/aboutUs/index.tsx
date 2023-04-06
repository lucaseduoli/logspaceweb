export default function AboutUs() {
  return (
    <>
      <section className="relative w-full">
        <div className="w-full h-full" id="vantaRef">
          <div className="relative items-center w-full px-5 py-32 mx-auto md:px-12 lg:px-16 max-w-7xl">
            <div className="flex w-full mx-auto text-left">
              <div className="relative flex flex-col items-center m-auto align-middle">
                <div id="top" className="max-w-3xl space-y-4 lg:text-center">
                  <h1 className="mb-4 text-4xl font-bold leading-none text-white lg:text-6xl">
                    About
                    <span
                      className="font-semibold 
                      bg-gradient-to-r  bg-clip-text text-transparent 
                      from-[#64abb8] via-[#475dc2] to-[#5b51c4]
                      animate-text"
                    >
                      {" "}
                      Logspace{" "}
                    </span>
                  </h1>
                  <p className="mb-6 text-xl font-light text-smoke">
                    Logspace provides custom machine learning solutions for
                    businesses and organizations, with pipelines covering the
                    entire process from experimentation to deployment.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative items-center w-full px-5 mx-auto pb-44 md:px-12 lg:px-20 max-w-7xl">
        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
          <div>
            <h1 className="text-4xl font-bold text-white">Who We Are</h1>
          </div>
          <div className="mt-12 lg:mt-0 lg:col-span-2">
            <main className="flex-auto bg-nero">
              <div className="max-w-2xl mx-auto">
                <p className="mt-2 text-lg text-santa">
                  We are a team of software engineers and data scientists
                  passionate about problem-solving and ready to take on
                  challenges in creative and effective ways.
                </p>
                <p className="mt-4 text-lg text-santa">
                  Our mission is to help businesses integrate Machine Learning
                  into their processes by providing affordable and hands-on
                  services, saving misused resources and time.
                </p>
                <p className="mt-4 text-lg text-santa">
                  We are currently working with governments, financial
                  institutions, and industries, as well as up-and-coming
                  startups and entrepreneurs who use data and automation to
                  develop new products.
                </p>
              </div>
            </main>
          </div>
        </div>
        <div className="grid grid-cols-2 my-24 gap-y-12 gap-x-6 lg:grid-cols-4">
              <a href="./team-member.html">
                <figure>
                  <img className="w-full rounded-xl shadow-thick border-river" src="https://styles.redditmedia.com/t5_11cp2l/styles/profileIcon_lt90r634zs861.png?width=256&amp;height=256&amp;crop=256:256,smart&amp;s=757acc3571af7ba91f9570c5ab5a4b085cc90654" alt="" width="1310" height="873"/>
                  <figcaption className="mt-4 text-xs text-river lg:text-base">Michael Andreuzza</figcaption>
                </figure>
              </a>
              <a href="./team-member.html">
                <figure>
                  <img className="w-full rounded-xl shadow-thick border-river" src="https://images.unsplash.com/photo-1570563676231-d476637bc4bc?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=200&amp;h=200&amp;q=80" alt="" width="1310" height="873"/>
                  <figcaption className="mt-4 text-xs text-river lg:text-base">Juan Sinmiedo</figcaption>
                </figure>
              </a>
              <a href="">
                <figure>
                  <img className="w-full rounded-xl shadow-thick border-river" src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=faces&amp;fit=crop&amp;h=200&amp;w=200&amp;ixid=eyJhcHBfaWQiOjE3Nzg0fQ" alt="" width="1310" height="873"/>
                  <figcaption className="mt-4 text-xs text-river lg:text-base">Laetitia Sarmiento</figcaption>
                </figure>
              </a>
              <a href="">
                <figure>
                  <img className="w-full rounded-xl shadow-thick border-river" src="https://images.unsplash.com/photo-1476493279419-b785d41e38d8?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=faces&amp;fit=crop&amp;h=200&amp;w=200&amp;s=61eaea85f1aa3d065400179c78163f15" alt="" width="1310" height="873"/>
                  <figcaption className="mt-4 text-xs text-river lg:text-base">Gabriela Smith</figcaption>
                </figure>
              </a>
            </div>
      </section>
    </>
  );
}
