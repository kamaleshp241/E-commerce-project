const CategoryList = ({ categories, onSelect, selectedCategory }) => {
  return (
    <div className="flex gap-3 flex-wrap">
      {categories.map(cat => (
        <button
          key={cat}
          className={`px-4 py-1 rounded ${
            selectedCategory === cat
              ? "bg-blue-500 text-white"
              : "bg-gray-200 hover:bg-gray-300"
          }`}
          onClick={() => onSelect(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default CategoryList;


