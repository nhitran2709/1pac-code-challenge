/* eslint-disable camelcase */
import { ImageType } from 'models/image';

/**
 * formatSearchingImage: Helper help format searching image data
 * @param imageData any
 */
const formatSearchingImage = (imageData: any) => {
  const { collection } = imageData;
  const { items } = collection;
  console.log('items', items);

  const images: ImageType[] = [];
  console.log('images-------', images);

  if (items && items.length) {
    let info: ImageType;

    items.map((item) => {
      const { data, links = [] } = item;

      if (links && links !== undefined && links.length) {
        const link = links[0];
        const { href } = link;
        console.log('href-----', href);

        info = { ...info, imageUrl: href };
      } else {
        console.log('------link');
        info = { ...info, imageUrl: '' };
      }

      if (data && data.length) {
        data.map(({
          media_type, description, title, nasa_id,
        }) => {
          if (media_type !== 'images') {
            info = {
              ...info,
              mediaType: media_type,
              description,
              title,
              nasaId: nasa_id,
            };
          }
          return info;
        });
      }
      return images.push(...images, info);
    });
  }
  // return images;
};

export default formatSearchingImage;
