"use client";
import React, { useState, useEffect } from 'react';

export default function SearchBox() {
    const [searchText, setSearchText] = useState('');
    const [searchSuggestions, setSearchSuggestions] = useState(["你好","不好"]);

    useEffect(() => {
        if (searchText.includes('/')) {
            // 发起模糊搜索请求，获取搜索建议
            // 并将搜索建议保存到组件的 state 中
            const searchAPI = 'https://example.com/api/search';
            fetch(`${searchAPI}?q=${searchText}`)
                .then((response) => response.json())
                .then((data) => setSearchSuggestions(data))
                .catch((error) => console.error(error));
        } else {
            setSearchSuggestions([]);
        }
    }, [searchText]);

    return (
        <div>
            <input type="text" value={searchText} onChange={(event) => setSearchText(event.target.value)} />
            {searchSuggestions.length > 0 && (
                <ul>
                    {searchSuggestions.map((suggestion) => (
                        <li key={suggestion.id}>{suggestion.text}</li>
                    ))}
                </ul>
            )}
        </div>
    );
}