import axios from 'axios';
import { alertError } from '../../../common/alertError';
import apiPath from '../../../common/apiPath';

const join = async ({phone, password, name, address, account}) => {
  try {
    const { data: {statusCode} } = await axios({
      method: 'post',
      url: apiPath.user.join(),
      data: {
        phone,
        password,
        name,
        address,
        account,
      }
    });
    console.log('??')
    console.log(statusCode);
    if (statusCode === 200) {
      window.alert('회원가입에 성공했습니다.');
      return true;
    }
    else {
      return false;
    }
  } catch (e) {
    alertError(e);
    return false;
  }
}

export default join;