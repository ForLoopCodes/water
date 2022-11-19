const processMd = (text) => {
  text = text.replace(
    /yt\?https:\/\/www\.youtube\.com\/watch\?v=([a-zA-Z0-9_-]+)/g,
    (match, p1) => {
      return `<iframe src="https://www.youtube.com/embed/${p1}" title="Some youtube video!" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    }
    // works like: yt?https://www.youtube.com/watch?v=...
  );
  text = text.replace(
    /sp\?https:\/\/open\.spotify\.com\/track\/([a-zA-Z0-9_-]+)\?si=([a-zA-Z0-9_-]+)/g,
    (match, p1) => {
      return `<iframe class="spotify-iframe" src="https://open.spotify.com/embed/track/${p1}" title="Some spotify song!" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`;
    }
    // works like: sp?https://open.spotify.com/track/...
  );
  return text;
};

export default processMd;
