import * as d3 from "d3";
import * as d3Geo from "d3-geo";
import osmtogeojson from "osmtogeojson";


export async function Map() {

  const width = 800, height = 400;

  const lat = -8.6705;
  const lon = 115.2325;

  // Define map projection
  const projection = d3Geo.geoMercator()
    .center([lon, lat]) // Example: Jakarta (lng, lat)
    .scale(7000000) // Adjust scale for zoom
    .translate([width / 2, height / 2]);

  const path = d3.geoPath(projection);

  // Load GeoJSON world data
  // const world = JSON.parse(fs.readFileSync("world.geojson", "utf8"));
  const world = await fetch(`https://overpass-api.de/api/interpreter?data=[out:json];(way['highway'](around:500, ${ lat }, ${ lon }););out geom;`)
    .then(res => res.json())
    .then(osmData => {
      const geojson = osmtogeojson(osmData); // Convert Overpass JSON → GeoJSON
      return geojson;
    });

  console.log(Object.entries(world))


  // return (
  //   <></>
  // )

  // Generate SVG map
  let svg = `<svg width="${ width }" height="${ height }" xmlns="http://www.w3.org/2000/svg">`;

  // Draw world map
  svg += world.features.map((f: any) => `<path d="${ path(f) }" fill="lightgray" stroke="black"/>`).join("");

  // Draw marker at Jakarta
  const projectionRes = projection([lon, lat]);
  if (projectionRes === null) {
    return null;
  }
  const [x, y] = projectionRes;
  svg += `<circle cx="${ x }" cy="${ y }" r="5" fill="red"/>`;

  svg += `</svg>`;

  console.log(svg)

  return (
    <div dangerouslySetInnerHTML={{ __html: svg }}>
    </div>
  )
}
