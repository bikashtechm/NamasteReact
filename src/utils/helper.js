export function filterRestaurantData(searchTxt, data) {
  return data.filter((res) =>
    res?.data?.name?.toLowerCase()?.includes(searchTxt.toLowerCase())
  );
}
