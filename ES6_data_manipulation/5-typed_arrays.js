/**
 * Creates an Int8 Typed Array inside a DataView.
 * @param {Number} length - The length of the ArrayBuffer.
 * @param {Number} position - The position to modify.
 * @param {Number} value - The Int8 value to store.
 * @returns {DataView} The DataView representing the buffer.
 */
function createInt8TypedArray(length, position, value) {
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }

  const buffer = new ArrayBuffer(length);
  const view = new DataView(buffer);

  view.setInt8(position, value);

  return view;
}

export default createInt8TypedArray;
