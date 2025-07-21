import { useState, useMemo } from "react";
import { getAllClothing } from "@/data/mockClothingData";
import { ClothingItem, BodyType, ClothingType } from "@/types";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Heart, Filter, X } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";

interface Filters {
  bodyTypes: BodyType[];
  brands: string[];
  clothingTypes: ClothingType[];
  priceRange: string;
  sortBy: string;
}

const Shop = () => {
  const [products] = useState<ClothingItem[]>(getAllClothing());
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState<Filters>({
    bodyTypes: [],
    brands: [],
    clothingTypes: [],
    priceRange: "all",
    sortBy: "name"
  });

  // Get unique values for filter options
  const uniqueBrands = useMemo(() => 
    [...new Set(products.map(p => p.brand))], [products]
  );

  const bodyTypeOptions: { value: BodyType; label: string }[] = [
    { value: "hourglass", label: "Hourglass" },
    { value: "pear", label: "Pear" },
    { value: "apple", label: "Apple" },
    { value: "rectangle", label: "Rectangle" },
    { value: "inverted-triangle", label: "Inverted Triangle" }
  ];

  const clothingTypeOptions: { value: ClothingType; label: string }[] = [
    { value: "tops", label: "Top wear" },
    { value: "bottoms", label: "Bottom wear" },
    { value: "dresses", label: "Full length Dress" },
    { value: "outerwear", label: "Coat/Jacket" }
  ];

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    // Body type filter
    if (filters.bodyTypes.length > 0) {
      filtered = filtered.filter(product => 
        product.bodyTypes.some(bt => filters.bodyTypes.includes(bt))
      );
    }

    // Brand filter
    if (filters.brands.length > 0) {
      filtered = filtered.filter(product => 
        filters.brands.includes(product.brand)
      );
    }

    // Clothing type filter
    if (filters.clothingTypes.length > 0) {
      filtered = filtered.filter(product => 
        filters.clothingTypes.includes(product.type)
      );
    }

    // Price range filter
    if (filters.priceRange !== "all") {
      const [min, max] = filters.priceRange.split("-").map(Number);
      filtered = filtered.filter(product => {
        if (max) {
          return product.price >= min && product.price <= max;
        } else {
          return product.price >= min;
        }
      });
    }

    // Sort products
    filtered.sort((a, b) => {
      switch (filters.sortBy) {
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        case "name":
        default:
          return a.name.localeCompare(b.name);
      }
    });

    return filtered;
  }, [products, filters]);

  const handleFilterChange = (filterType: keyof Filters, value: any) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  const handleCheckboxFilter = (filterType: 'bodyTypes' | 'brands' | 'clothingTypes', value: string, checked: boolean) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: checked 
        ? [...prev[filterType], value]
        : prev[filterType].filter(item => item !== value)
    }));
  };

  const clearAllFilters = () => {
    setFilters({
      bodyTypes: [],
      brands: [],
      clothingTypes: [],
      priceRange: "all",
      sortBy: "name"
    });
  };

  const activeFilterCount = filters.bodyTypes.length + filters.brands.length + filters.clothingTypes.length + 
    (filters.priceRange !== "all" ? 1 : 0);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="pt-32 pb-12">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-4xl font-bold text-fashion-teal mb-2">Shop All</h1>
              <p className="text-gray-600">Discover our complete collection of {filteredProducts.length} products</p>
            </div>
            
            {/* Mobile filter toggle */}
            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
              className="md:hidden"
            >
              <Filter className="h-4 w-4 mr-2" />
              Filters {activeFilterCount > 0 && `(${activeFilterCount})`}
            </Button>
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            {/* Filters Sidebar */}
            <div className={`w-full md:w-80 ${showFilters ? 'block' : 'hidden md:block'}`}>
              <Card>
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold">Filters</h3>
                    {activeFilterCount > 0 && (
                      <Button variant="ghost" size="sm" onClick={clearAllFilters}>
                        <X className="h-4 w-4 mr-1" />
                        Clear All
                      </Button>
                    )}
                  </div>

                  <div className="space-y-6">
                    {/* Sort By */}
                    <div>
                      <label className="text-sm font-medium mb-2 block">Sort By</label>
                      <Select value={filters.sortBy} onValueChange={(value) => handleFilterChange('sortBy', value)}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="name">Name A-Z</SelectItem>
                          <SelectItem value="price-low">Price: Low to High</SelectItem>
                          <SelectItem value="price-high">Price: High to Low</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Price Range */}
                    <div>
                      <label className="text-sm font-medium mb-2 block">Price Range</label>
                      <Select value={filters.priceRange} onValueChange={(value) => handleFilterChange('priceRange', value)}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Prices</SelectItem>
                          <SelectItem value="0-200">Under $200</SelectItem>
                          <SelectItem value="200-400">$200 - $400</SelectItem>
                          <SelectItem value="400-600">$400 - $600</SelectItem>
                          <SelectItem value="600">$600+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Body Shape Filter */}
                    <div>
                      <label className="text-sm font-medium mb-3 block">Body Shape</label>
                      <div className="space-y-2">
                        {bodyTypeOptions.map((bodyType) => (
                          <div key={bodyType.value} className="flex items-center space-x-2">
                            <Checkbox
                              id={bodyType.value}
                              checked={filters.bodyTypes.includes(bodyType.value)}
                              onCheckedChange={(checked) => 
                                handleCheckboxFilter('bodyTypes', bodyType.value, checked as boolean)
                              }
                            />
                            <label htmlFor={bodyType.value} className="text-sm cursor-pointer">
                              {bodyType.label}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Clothing Type Filter */}
                    <div>
                      <label className="text-sm font-medium mb-3 block">Category</label>
                      <div className="space-y-2">
                        {clothingTypeOptions.map((type) => (
                          <div key={type.value} className="flex items-center space-x-2">
                            <Checkbox
                              id={type.value}
                              checked={filters.clothingTypes.includes(type.value)}
                              onCheckedChange={(checked) => 
                                handleCheckboxFilter('clothingTypes', type.value, checked as boolean)
                              }
                            />
                            <label htmlFor={type.value} className="text-sm cursor-pointer">
                              {type.label}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Brand Filter */}
                    <div>
                      <label className="text-sm font-medium mb-3 block">Brand</label>
                      <div className="space-y-2">
                        {uniqueBrands.map((brand) => (
                          <div key={brand} className="flex items-center space-x-2">
                            <Checkbox
                              id={brand}
                              checked={filters.brands.includes(brand)}
                              onCheckedChange={(checked) => 
                                handleCheckboxFilter('brands', brand, checked as boolean)
                              }
                            />
                            <label htmlFor={brand} className="text-sm cursor-pointer">
                              {brand}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Products Grid */}
            <div className="flex-1">
              {filteredProducts.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-gray-500 text-lg">No products found matching your filters.</p>
                  <Button onClick={clearAllFilters} className="mt-4">
                    Clear Filters
                  </Button>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {filteredProducts.map((product) => (
                    <Card key={product.id} className="group hover:shadow-lg transition-shadow duration-300">
                      <CardContent className="p-0">
                        <div className="relative overflow-hidden">
                          <Link to={`/product/${product.id}`}>
                            <img 
                              src={product.imageUrl} 
                              alt={product.name}
                              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          </Link>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="absolute top-3 right-3 bg-white/80 hover:bg-white"
                          >
                            <Heart className="h-4 w-4" />
                          </Button>
                        </div>
                        
                        <div className="p-4">
                          <Link to={`/product/${product.id}`} className="block">
                            <h3 className="font-semibold text-gray-900 mb-1 hover:text-fashion-teal transition-colors">
                              {product.name}
                            </h3>
                            <p className="text-sm text-gray-600 mb-2">{product.brand}</p>
                            <p className="text-sm text-gray-500 mb-3 line-clamp-2">{product.description}</p>
                            
                            {/* Body Type Badges */}
                            <div className="flex flex-wrap gap-1 mb-3">
                              {product.bodyTypes.slice(0, 2).map((bodyType) => (
                                <Badge key={bodyType} variant="secondary" className="text-xs">
                                  {bodyType}
                                </Badge>
                              ))}
                              {product.bodyTypes.length > 2 && (
                                <Badge variant="secondary" className="text-xs">
                                  +{product.bodyTypes.length - 2}
                                </Badge>
                              )}
                            </div>
                            
                            <p className="text-lg font-bold text-fashion-teal">${product.price}</p>
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;