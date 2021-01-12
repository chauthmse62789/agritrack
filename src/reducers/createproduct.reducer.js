import { userConstants } from '../constants';

export function createproduct(state = {}, action) {
  switch (action.type) {
    case userConstants.CREATEPRODUCT_REQUEST:
      return { creating: true };
    case userConstants.CREATEPRODUCT_SUCCESS:
      return {};
    case userConstants.CREATEPRODUCT_FAILURE:
      return {};
    default:
      return state
  }
}