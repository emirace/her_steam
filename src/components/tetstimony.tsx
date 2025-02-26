const testimonials = [
  {
    quote:
      "Before joining HER STEAM, I never thought I could be an engineer. Now, I’m building robots and inspiring other girls to dream big!",
    name: "Amina",
    age: 19,
  },
  {
    quote:
      "This initiative gave me the confidence to pursue my passion for technology. I’m now studying computer science at university!",
    name: "Fatima",
    age: 21,
  },
];

const Testimonials = () => {
  return (
    <section className=" py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold ">Voices of Change</h2>
        <p className="mt-4 text-lg">
          Hear from the girls and women whose lives have been transformed by the
          <span className="font-semibold text-blue-400">
            {" "}
            HER STEAM Initiative
          </span>
          :
        </p>
      </div>

      <div className="mt-10 max-w-5xl mx-auto grid gap-8 md:grid-cols-2">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 border-l-4 border-blue-400"
          >
            <p className="text-gray-800 text-lg italic">
              "{testimonial.quote}"
            </p>
            <p className="mt-4  font-semibold">
              – {testimonial.name}, {testimonial.age}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
