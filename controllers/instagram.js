const Instagram = require('instagram-web-api')

const client = new Instagram({
    username: "nobetciyazilimci@gmail.com",
    password: "KAgjb789!"
});


const getUserBlockStatus = async (username) => {
    await client.login();
    const userDetails =  await client.getUserByUsername({ username: username});
  //  console.log(await userDetails.blocked_by_viewer);
  
  const userBlockStatus =  await userDetails.blocked_by_viewer;

  return userBlockStatus;


}


module.exports = { getUserBlockStatus };