import { environment } from '../../environments/environment';

const GATEWAY = environment.apiUrl;


export const ApiConstant = {

  LoginFormURL: `${GATEWAY}login/`,
  UserDataFormURL: `${GATEWAY}userdata/`
};

