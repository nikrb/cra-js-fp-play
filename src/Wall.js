export function Item( item_colour) {
  let that = {};
  let colour = item_colour;
  that.getColour = () => { return colour;};
  return that;
}

export function Wall() {
  let that = Item( "black");
  return that;
}
