import { useState } from "react";
import { Button } from "./Button";




const [selectedGenreId, setSelectedGenreId] = useState(1);
const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>({} as GenreResponseProps);

export function SideBar() {
  <nav className="sidebar">
  <span>Watch<p>Me</p></span>

  <div className="buttons-container">
    {genres.map(genre => (
      <Button
        key={String(genre.id)}
        title={genre.title}
        iconName={genre.name}
        onClick={() => handleClickButton(genre.id)}
        selected={selectedGenreId === genre.id}
      />
    ))}
  </div>

</nav>
}