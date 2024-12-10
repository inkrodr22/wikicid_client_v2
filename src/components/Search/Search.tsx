import SearchIcon from '~/assets/icons/search.svg?react';
import Input from '~/components/Input';

interface SearchProps {
  placeholder: string;
  className?: string;
}

export default function Search({ placeholder, className }: SearchProps) {
  return (
    <div className="relative flex">
      <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1 h-4 w-4 text-gray-600" />
      <Input
        placeholder={placeholder}
        className={`pl-10 pr-20 font-bold ${className}`}
      />
    </div>
  );
}
