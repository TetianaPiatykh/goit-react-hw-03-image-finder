import { Component } from "react";
import { SearchBar, SearchForm, SearchFormBtn, SearchFormInput, SearchFormBtnLabel } from './Searchbar.styled'

export default class Searchbar extends Component {

render() {
    return (
        <SearchBar>
            <SearchForm>
                <SearchFormBtn type="submit">
                    <SearchFormBtnLabel>Search</SearchFormBtnLabel>
                </SearchFormBtn>

                <SearchFormInput
                    //   class="input"
                    type="text"
                    autocomplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                />
            </SearchForm>
        </SearchBar>
    );

    }
};
