// Helpers
import formatSearchingImage from 'helpers/formatData';

// Actions
import * as Actions from 'actions/searching';

export const initialState = {
  type: '',
  isSearchingImgLoading: false,
  searchingImgError: '',
  imageData: [],
};

const searchingImage = (state = initialState, action: any) => {
  const { errors, type, data } = action;

  switch (type) {
    case Actions.GET_IMAGE_SEARCHING_REQUEST:
      return {
        ...state,
        type,
        isSearchingImgLoading: true,
      };

    case Actions.GET_IMAGE_SEARCHING_SUCCESS:
      // eslint-disable-next-line no-case-declarations
      const test = formatSearchingImage(data);
      return {
        ...state,
        type,
        isSearchingImgLoading: false,
        imageData: formatSearchingImage(data),
        searchingImgError: initialState.searchingImgError,
      };

    case Actions.GET_IMAGE_SEARCHING_FAILED:
      return {
        ...state,
        type,
        isSearchingImgLoading: false,
        searchingImgError: errors.message,
      };

    default:
      return state;
  }
};

export default searchingImage;
