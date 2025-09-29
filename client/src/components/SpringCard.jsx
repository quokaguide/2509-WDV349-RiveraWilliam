import PropTypes from "prop-types";

export default function SpringCard({ name = "Unknown spring", clarity = "clear", distanceKm, amenities = [] }) {
  return (
    <article style={{border:"1px solid #ddd", borderRadius:12, padding:16, marginBottom:12}}>
      <h3 style={{margin:0}}>{name}</h3>
      <p style={{margin:"4px 0"}}>Clarity: {clarity}{distanceKm != null ? ` • ${distanceKm} km` : ""}</p>
      {amenities.length > 0 && <p style={{margin:"4px 0"}}>Amenities: {amenities.join(", ")}</p>}
      <button style={{marginTop:8}}>Save</button>
    </article>
  );
}

SpringCard.propTypes = {
  name: PropTypes.string.isRequired,
  clarity: PropTypes.oneOf(["crystal","clear","moderate","murky"]),
  distanceKm: PropTypes.number,
  amenities: PropTypes.arrayOf(PropTypes.string)
};
