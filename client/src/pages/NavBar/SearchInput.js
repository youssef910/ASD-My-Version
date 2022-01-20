import React, { useState } from "react";

import { TextInput, Form } from "grommet";
import { Search } from "grommet-icons";

const SearchInput = () => {
	const [searchValue, setSearchValue] = useState("");
	const handleSubmitSearch = (e) => {
		e.preventDefault();
		console.log(searchValue);
		setSearchValue("");
	};
	const handleSearchInput = (e) => {
		console.log(e.target.value);
		setSearchValue(e.target.value);
	};
	return (
		<Form onSubmit={handleSubmitSearch} onChange={handleSearchInput}>
			<TextInput
				icon={<Search />}
				placeholder="Search something"
				value={searchValue}
				size="small"
				reverse
				onChange={handleSearchInput}
			/>
		</Form>
	);
};

export default SearchInput;
