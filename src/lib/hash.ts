function encode(numbers: number[]) {
  // Create a buffer to store the binary data
  const buffer = new Uint8Array(numbers.length);
  // Fill the buffer with the numbers
  for (let i = 0; i < numbers.length; i++) {
    buffer[i] = numbers[i];
  }
  // Convert the buffer to a binary string
  const binaryString = String.fromCharCode.apply(null, buffer as unknown as number[]);
  // Convert the buffer to a string using Base64 encoding
  return btoa(binaryString);
}

function decode(encodedString: string) {
  // Decode the Base64 string back to a binary string
  const binaryString = atob(encodedString);

  // Create a Uint8Array from the binary string
  const numbers = new Uint8Array(binaryString.length);
  for (let i = 0; i < binaryString.length; i++) {
    numbers[i] = binaryString.charCodeAt(i); // Convert to numbers
  }

  return Array.from(numbers); // Convert Uint8Array back to regular array
}

export { decode, encode };

