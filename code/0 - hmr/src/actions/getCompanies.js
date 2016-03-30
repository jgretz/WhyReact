import {GET,apiExecutor} from '../support';

export const GET_COMPANIES_SUCCESSFUL = "COMPANIES_GET_SUCCESSFUL";
export const GET_COMPANIES_FAILURE = "COMPANIES_GET_FAILURE";

export const getCompanies = () => {
  return apiExecutor({
    url: '',
    verb: GET,

    successType: GET_COMPANIES_SUCCESSFUL,
    failureType: GET_COMPANIES_FAILURE
  });
};
