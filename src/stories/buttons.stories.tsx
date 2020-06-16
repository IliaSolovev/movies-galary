import React from 'react';

import { Button } from '../components';

export default { title: 'Button' };

export const whiteSearchButton = () => <Button type="whiteSearch" onClick={() => {}}>Search</Button>;
export const searchButton = () => <Button type="search" onClick={() => {}}>Search</Button>;
export const sortFilterButton = () => <Button type="sortFilter" onClick={() => {}}>Release date</Button>;
export const activeSortFilterButton = () => <Button active type="sortFilter" onClick={() => {}}>Rating</Button>;
export const searchFilterButton = () => <Button type="searchFilter" onClick={() => {}}> Title</Button>;
export const activeSearchFilterButton = () => <Button active type="searchFilter" onClick={() => {}}> Genre</Button>;
