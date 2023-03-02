function join(arr) {
  let output = "";
  arr.forEach((name, i) => {
    if (i < arr.length - 1) {
      output += `${name}, `;
    } else {
      output += `${name}`;
    }
  });
  return output;
}

module.exports = join;
// export default join;
