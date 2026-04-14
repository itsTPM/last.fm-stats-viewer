interface LastFMImage {
  '#text': string;
  size: string;
}

export function pickBestImage(images: LastFMImage[]): LastFMImage {
  const order = ['mega', 'extralarge', 'large'];
  return order.map((size) => images.find((image) => image.size === size)).find(Boolean) ?? images[0];
}

export function getImageUrl(image: LastFMImage): string {
  return image['#text'];
}
