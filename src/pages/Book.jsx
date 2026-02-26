import Header from "../components/Header";

const Books = () => {
  const books = [
    {
      id: 1,
      title: "Java Programming",
      author: "James Gosling",
      category: "Programming",
    },
    {
      id: 2,
      title: "React JS",
      author: "Meta",
      category: "Web Development",
    },
    {
      id: 3,
      title: "Database Systems",
      author: "Elmasri",
      category: "Database",
    },
  ];

  return (
    <>
      <Header />

      <div className="p-8">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Available Books
        </h1>

        <div className="grid md:grid-cols-3 gap-6">
          {books.map((book) => (
            <div
              key={book.id}
              className="border rounded-lg p-4 shadow hover:shadow-lg transition"
            >
              <h2 className="text-xl font-semibold">
                {book.title}
              </h2>
              <p className="text-gray-600">
                Author: {book.author}
              </p>
              <p className="text-gray-500">
                Category: {book.category}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Books;