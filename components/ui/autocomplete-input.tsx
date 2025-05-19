import React, { useState, useRef } from "react";
import { Input } from "@/components/ui/input";
import { fetchLocationSuggestions } from "@/lib/location-autocomplete";

interface AutocompleteInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  label?: string;
  disabled?: boolean;
}

export const AutocompleteInput: React.FC<AutocompleteInputProps> = ({
  value,
  onChange,
  placeholder,
  label,
  disabled,
}) => {
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [loading, setLoading] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    onChange(val);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    if (!val || val.length < 3) {
      setSuggestions([]);
      setShowSuggestions(false);
      return;
    }
    setLoading(true);
    timeoutRef.current = setTimeout(async () => {
      const results = await fetchLocationSuggestions(val);
      setSuggestions(results);
      setShowSuggestions(true);
      setLoading(false);
    }, 300);
  };

  const handleSuggestionClick = (suggestion: string) => {
    onChange(suggestion);
    setShowSuggestions(false);
  };

  return (
    <div className="relative">
      {label && <label className="block text-sm font-medium mb-1">{label}</label>}
      <Input
        value={value}
        onChange={handleInputChange}
        placeholder={placeholder}
        disabled={disabled}
        autoComplete="off"
      />
      {showSuggestions && suggestions.length > 0 && (
        <ul className="absolute z-10 bg-white border border-gray-200 w-full mt-1 rounded shadow max-h-56 overflow-auto">
          {suggestions.map((s) => (
            <li
              key={s}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
              onClick={() => handleSuggestionClick(s)}
            >
              {s}
            </li>
          ))}
        </ul>
      )}
      {showSuggestions && !loading && suggestions.length === 0 && (
        <div className="absolute z-10 bg-white border border-gray-200 w-full mt-1 rounded shadow text-sm px-4 py-2 text-gray-500">
          No results found
        </div>
      )}
      {loading && (
        <div className="absolute z-10 bg-white border border-gray-200 w-full mt-1 rounded shadow text-sm px-4 py-2 text-gray-500">
          Searching...
        </div>
      )}
    </div>
  );
};
