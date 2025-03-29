"use client";
import React from "react";

const categories = [
  {
    id: "1",
    name: "Electronics",
    subCategory: [
      {
        id: "101",
        name: "Mobile Phones",
        categoryId: "1",
        subCategory: [
          { id: "1011", name: "Smartphones", categoryId: "101" },
          { id: "1012", name: "Feature Phones", categoryId: "101" },
        ],
      },
      {
        id: "102",
        name: "Laptops",
        categoryId: "1",
        subCategory: [
          { id: "1021", name: "Gaming Laptops", categoryId: "102" },
          { id: "1022", name: "Business Laptops", categoryId: "102" },
        ],
      },
    ],
  },
  {
    id: "2",
    name: "Fashion",
    subCategory: [
      {
        id: "201",
        name: "Men's Clothing",
        categoryId: "2",
        subCategory: [
          { id: "2011", name: "Shirts", categoryId: "201" },
          { id: "2012", name: "Pants", categoryId: "201" },
        ],
      },
      {
        id: "202",
        name: "Women's Clothing",
        categoryId: "2",
        subCategory: [
          { id: "2021", name: "Dresses", categoryId: "202" },
          { id: "2022", name: "Shirts", categoryId: "202" },
        ],
      },
    ],
  },
  {
    id: "3",
    name: "Home & Kitchen",
    subCategory: [
      {
        id: "301",
        name: "Furniture",
        categoryId: "3",
        subCategory: [
          { id: "3011", name: "Living Room", categoryId: "301" },
          { id: "3012", name: "Bedroom", categoryId: "301" },
        ],
      },
      {
        id: "302",
        name: "Appliances",
        categoryId: "3",
        subCategory: [
          { id: "3021", name: "Kitchen Appliances", categoryId: "302" },
          { id: "3022", name: "Cleaning Appliances", categoryId: "302" },
        ],
      },
    ],
  },
  {
    id: "4",
    name: "Sports & Outdoors",
    subCategory: [
      {
        id: "401",
        name: "Fitness",
        categoryId: "4",
        subCategory: [
          { id: "4011", name: "Equipment", categoryId: "401" },
          { id: "4012", name: "Clothing", categoryId: "401" },
        ],
      },
      {
        id: "402",
        name: "Outdoor Recreation",
        categoryId: "4",
        subCategory: [
          { id: "4021", name: "Camping", categoryId: "402" },
          { id: "4022", name: "Hiking", categoryId: "402" },
        ],
      },
    ],
  },
  {
    id: "5",
    name: "Beauty & Health",
    subCategory: [
      {
        id: "501",
        name: "Skincare",
        categoryId: "5",
        subCategory: [
          { id: "5011", name: "Face", categoryId: "501" },
          { id: "5012", name: "Body", categoryId: "501" },
        ],
      },
      {
        id: "502",
        name: "Hair Care",
        categoryId: "5",
        subCategory: [
          { id: "5021", name: "Shampoo & Conditioner", categoryId: "502" },
          { id: "5022", name: "Styling Products", categoryId: "502" },
        ],
      },
    ],
  },
];

const MegaMenu = () => {
  const [hoveredCategory, setHoveredCategory] = React.useState<string | null>(
    null
  );

  return (
    <div className="relative w-full border-b border-gray-200 bg-white hidden lg:block">
      <div className="wrapper flex items-center">
        {categories.map((category) => (
          <div
            key={category.id}
            className="flex items-center cursor-pointer pr-10 py-5 hover:underline hover:underline-offset-8 hover:decoration-blue-400 hover:text-blue-400"
            onMouseEnter={() => setHoveredCategory(category.id)}
            onMouseLeave={() => setHoveredCategory(null)}
          >
            <span className="text-sm font-medium">{category.name}</span>

            {hoveredCategory === category.id && (
              <div className="absolute w-full border-t border-gray-200 top-full left-0 bg-white shadow-md p-4 z-10 ">
                <div className="wrapper grid grid-cols-6 gap-4">
                  {category.subCategory.map((subCategory) => (
                    <div key={subCategory.id} className="mb-3 ">
                      <span className="text-sm font-medium block mb-2 text-slate-700">
                        {subCategory.name}
                      </span>
                      <div className="text-slate-500">
                        {subCategory.subCategory.map((subSubCategory) => (
                          <span
                            key={subSubCategory.id}
                            className="text-sm block mb-1 hover:text-blue-500"
                          >
                            {subSubCategory.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MegaMenu;
