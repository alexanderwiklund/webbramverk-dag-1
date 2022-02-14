const SearchResult = ({searchResult}) => {

  if (!searchResult || !searchResult.length) {
    return (
      <div>
        <p>
          No search results :(
        </p>
      </div>
    )
  }

  return (
    <div>
      <ul>
          {searchResult.map((emoji) => {
            return (
              <li>
                {emoji.title} - {emoji.symbol}
              </li>
            )
          })}
        </ul>
    </div>
  )
}

export default SearchResult