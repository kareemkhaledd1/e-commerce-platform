import React from "react";
import { SearchIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const SearchBar = () => {
  return (
    <div className="flex items-center border-2 border-blue-400 hover:border-blue-500 focus-within:border-blue-500 rounded-xl w-[65vw] md:w-[40vw]">
      <input
        type="text"
        placeholder="Search for products"
        className="text-sm text-slate-500 py-2 px-4 flex-1 focus:outline-none"
      />
      <Button
        aria-label="search"
        className="bg-blue-400 hover:bg-blue-500 text-white p-2 rounded-r-lg"
      >
        <SearchIcon size={20} />
      </Button>
    </div>
  );
};

export default SearchBar;
