import Axios from 'axios';
import environmentConfig from './environmentConfig';

const Api = {
  invokeLambda: async () => {
    const result = await Axios.post(environmentConfig.invokeUrl, {
      operationName: null,
      query: '{ hello } ',
      variables: {},
    });
    console.log(`GOT RESULT!: ${JSON.stringify(result)}`);
  },
};

export default Api;
