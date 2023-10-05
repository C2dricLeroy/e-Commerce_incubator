import React, { useState, useCallback } from 'react';
// @ts-ignore
import Products from '@/models/Products.ts';

interface ProductsType {
    product_id: string;
    name: string;
    price: number;
    product_type_id: string;
    image_path: string;
}

export default function useSearchViewModel() {
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearchDone, setIsSearchDone] = useState(false);
  const [searchResults, setSearchResults] = useState<ProductsType[]>([]);

  const handleInputChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  }, []);

  const handleSearch = useCallback(async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSearchResults([]);
    if (!searchTerm.trim()) {
      setIsSearchDone(true);
      return;
    }
    try {
      const results = await Products.searchProduct(searchTerm);
      setIsSearchDone(true);
      setSearchResults(results);
    } catch (error) {
      console.error('An error occurred while searching:', error);
    }
  }, [searchTerm]);

  return {
    searchTerm,
    setSearchResults,
    setIsSearchDone,
    isSearchDone,
    searchResults,
    handleInputChange,
    handleSearch,
  };
}
