
const test = () => {
  const t = Array.from({length: 5}, (v, i) => {
    return { res: `hello${i}`};
  });
  console.log( t);

  // let numbered_page_buttons = [for( i of Array(10).keys())]
  // .map( (i) => {
  //   return (
  //     <button type="button" style={btn} onClick={this.handleClick} value=i >
  //       i+1
  //     </button>
  //   );
  // });
  // console.log( numbered_page_buttons);
};
test();
