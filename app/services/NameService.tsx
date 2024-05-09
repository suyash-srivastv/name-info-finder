import axios from 'axios';

const fetchNameInfo = async (name) => {
  const ageResponse = await axios.get(`https://api.agify.io?name=${name}`);
  const genderResponse = await axios.get(`https://api.genderize.io?name=${name}`);
  const countryResponse = await axios.get(`https://api.nationalize.io?name=${name}`);

  const age = ageResponse.data.age;
  const gender = genderResponse.data.gender;
  const country = countryResponse.data.country[0]?.country_id;

  return { age, gender, country };
};

export default fetchNameInfo;
