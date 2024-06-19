const About: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row bg-white text-gray-900 py-8 px-0 rounded-lg shadow-lg">
      <div className="md:w-1/2 p-4">
        <h2 className="text-xl font-bold mb-2">About me</h2>
        <p>
          I&lsquo;m a Product Designer based in Melbourne, Australia. I enjoy
          working on product design and Webflow projects. I occasionally take on
          freelance work.
        </p>
        <p className="mt-2">
          I&lsquo;ve worked with some of the world&lsquo;s most exciting
          companies, including Coinbase, Stripe, and Linear. I&lsquo;m
          passionate about helping startups grow, improve their UX and customer
          experience, and to fundraise through good design.
        </p>
        <p className="mt-2">
          My work has been featured on Typewolf, Mindsparkle Magazine, Webflow,
          Fonts In Use, CSS Winner, httpster, Siteinspire, and Best Website
          Gallery.
        </p>
        <a href="#" className="text-black font-bold mt-4 inline-block">
          Read more
        </a>
      </div>
      <div className="md:w-1/2 p-4">
        <div className="flex flex-col space-y-4">
          <div>
            <span className="font-bold">Location</span>
            <div className="flex items-center">
              <span className="mr-2">🇦🇺</span> Melbourne, AU
            </div>
          </div>
          <div>
            <span className="font-bold">Website</span>
            <a href="https://amelielaurent.com" className="text-blue-500">
              amelielaurent.com ↗
            </a>
          </div>
          <div>
            <span className="font-bold">Portfolio</span>
            <a
              href="https://twitter.com/amelielaurent"
              className="text-blue-500"
            >
              @amelielaurent
            </a>
          </div>
          <div>
            <span className="font-bold">Email</span>
            <a href="mailto:hello@amelie.com" className="text-blue-500">
              hello@amelie.com ↗
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
