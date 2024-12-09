export default function FAQ() {
   return(
      <section className="px-6 py-12 md:px-20 md:py-16 mb-[100px] border-b-[1px] border-gray-200">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
          Questions Looks Here
        </h2>
        <p className="mt-2 text-gray-500">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
        </p>
      </div>

      {/* FAQ Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* FAQ Item */}
        {[
          "What types of chairs do you offer?",
          "Do your chairs come with a warranty?",
          "Can I try a chair before purchasing?",
          "How can we get in touch with you?",
          "What will be delivered? And when?",
          "How do I clean and maintain my Comfortly chair?",
        ].map((question, index) => (
          <div
            key={index}
            className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex justify-between items-center ">
              <h3 className="text-lg font-medium text-gray-800">{question}</h3>
              <button className="text-gray-500 hover:text-gray-800">
                <span className="text-xl font-bold">+</span>
              </button>
            </div>
            <p className="mt-2 text-gray-500 text-sm">
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Nisl quis
              mollit ullam amet debitis libero velitatis enim repellat optio
              natus eum dietetus deserunt.
            </p>
          </div>
        ))}
      </div>
    </section>
   )
}