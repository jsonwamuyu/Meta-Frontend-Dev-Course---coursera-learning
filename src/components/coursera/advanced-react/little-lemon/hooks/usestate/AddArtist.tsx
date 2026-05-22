import React, { useState } from "react";

// const artistsData = [{ id: 1, name: "Mike Mundu" }];
let id = 0;

const AddArtist = () => {
  const [artists, setArtists] = useState([]);

  const handleAddArtist = (e) => {
    e.preventDefault();
    setArtists([...artists, { id: id++, name: "Mike Mundu" }]);
  };
  return (
    <section>
      <div>
        <h4>Add artist</h4>
        <form action="" onSubmit={handleAddArtist}></form>
      </div>
      <div>
        <h4>List of artists</h4>
        {artists.length > 0 ? (
          artists.map((artist) => (
            <div key={artist.id}>
              <h5>{artist.name}</h5>
            </div>
          ))
        ) : (
          <h5>No user found</h5>
        )}
      </div>
    </section>
  );
};

export default AddArtist;
