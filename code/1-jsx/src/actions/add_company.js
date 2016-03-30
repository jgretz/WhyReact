import {POST,apiExecutor} from '../support';

export const ADD_COMPANIES_SUCCESSFUL = "COMPANIES_GET_SUCCESSFUL";
export const ADD_COMPANIES_FAILURE = "COMPANIES_GET_FAILURE";

export const addCompany = (company) => {
  return apiExecutor({
    url: '',
    verb: POST,
    data: company,

    successType: ADD_COMPANIES_SUCCESSFUL,
    failureType: ADD_COMPANIES_FAILURE
  });
};
