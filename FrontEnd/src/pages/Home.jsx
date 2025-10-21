import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [query, setQuery] = useState("");
//   const navigate = useNavigate();

//   const handleSearch = () => {
//     if (!query.trim()) return;
//     navigate(`/results?query=${encodeURIComponent(query)}`);
//   };

  return (
    <div>
      <h1 >Tìm sản phẩm tương tự</h1>
      <input
        type="text"
        placeholder="Nhập mô tả sản phẩm..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-80 border rounded-lg p-2 text-gray-700"
      />
      <button
        // onClick={handleSearch}
       
      >
        Tìm kiếm
      </button>
    </div>
  );
}
