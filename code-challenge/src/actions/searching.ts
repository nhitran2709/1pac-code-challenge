// Define actions to get user
export const GET_IMAGE_SEARCHING_REQUEST = 'GET_IMAGE_SEARCHING_REQUEST';
export const GET_IMAGE_SEARCHING_SUCCESS = 'GET_IMAGE_SEARCHING_SUCCESS';
export const GET_IMAGE_SEARCHING_FAILED = 'GET_IMAGE_SEARCHING_FAILED';

/**
 * getImageSearchingRequest: get image searching information
 * @param searchContent number
 */
export const getImageSearchingRequest = (searchContent: string) => ({
  type: GET_IMAGE_SEARCHING_REQUEST,
  payload: searchContent,
});
