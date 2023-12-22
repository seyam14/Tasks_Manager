

const AboutMe = () => {
    return (
      <section id="about" className="bg-gray-300 m-4 p-4 md:p-8  text-center">
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 ">About Me</h3>
        <p className=" mb-4 ">
        As a MERN stack developer, I fuse my design and development skills with a fervent enthusiasm for crafting dynamic web solutions. Specializing in creating elegant, streamlined websites, I am dedicated to delivering tangible value to end users. My portfolio boasts numerous success stories, with countless clients achieving outstanding outcomes through our collaboration. Timely and budget-conscious, I adhere to a mantra of meeting and exceeding clients specifications, ensuring each project is a unique and innovative success.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="mb-4">
            <h4 className="font-semibold">E-mail:</h4>
            <p>TasksManager@gmail.com</p>
          </div>
          <div className="mb-4">
            <h4 className="font-semibold">Phone Number</h4>
            <p>(+880) 17********</p>
          </div>
          <div className="mb-4">
            <h4 className="font-semibold">From:</h4>
            <p>Dhaka, Bangladesh</p>
          </div>
        </div>
      </section>
    );
  };
  
  export default AboutMe;
  