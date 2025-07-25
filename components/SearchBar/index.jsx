"use client";
import { useState, useEffect } from 'react';
import { SearchContainer, SearchInput } from './styled';
import { useTranslations } from 'next-intl';

export default function SearchBar({ onSearch }) {
  const t = useTranslations("ProjectsItems");
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (onSearch) {
        onSearch(searchTerm)
      }
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm, onSearch]);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <SearchContainer>
      <SearchInput
        type="text"
        placeholder={t("searchPlaceholder")}
        value={searchTerm}
        onChange={handleChange}
      />
    </SearchContainer>
  );
} 