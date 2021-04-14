import React, { Component } from "react";
import axios from "axios";

class Collection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nextAlbumId: 0,
      newAlbum: ""
    };
  }

  componentDidMount() {
    axios
      .get('../data.json')
      .then(({ data }) => {
        this.setState({ albums: data });
        this.setState({ nextAlbumId: data.length });
      });
  }

  markAlbumAsDone = (id, done) =>
    this.setState({
      albums: this.state.albums.map(album =>
        album.id === id ? { ...album, done } : album
      )
    });

  removeAlbum = id =>
    this.setState({
      albums: this.state.albums.filter(album => album.id !== id)
    });

  addNewAlbum = () =>
    this.setState({
      albums: [
        ...this.state.albums,
        {
          id: this.state.nextAlbumId,
          title: this.state.newAlbum,
          done: false
        }
      ],
      nextAlbumId: this.state.nextAlbumId + 1,
      newAlbum: ""
    });

  render() {
    const { albums, newAlbum } = this.state;
    return albums ? (
      <div className="album-list">
        <ul>
          {albums.map(album => (
            <li key={album.id}>
              <input
                type="checkbox"
                checked={album.done}
                onChange={({ target }) =>
                  this.markAlbumAsDone(album.id, target.checked)
                }
                label={album.title}
              />
              <span className={album.done ? "done" : ""}>{album.title}</span>
              <button onClick={() => this.removeAlbum(album.id)}>X</button>
            </li>
          ))}
        </ul>
        <div className="new-album">
          <input
            type="text"
            value={newAlbum}
            onChange={({ target }) =>
              this.setState({ newAlbum: target.value })
            }
          />
          <button onClick={this.addNewAlbum}>Add</button>
        </div>
      </div>
    ) : (
      <div>Loading...</div>
    );
  }
}

export default Collection;
