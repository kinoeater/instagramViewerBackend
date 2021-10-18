const Instagram = require('instagram-web-api')


const client = new Instagram({
    username: "nobetciyazilimci@gmail.com",
    password: "KAgjb789!"
});

const searchUser = async (req, res, next) => {
    const username = req.body.username;
    console.log("in the controllers already!")

    await client.login();
   

    /* get user details */
    const userDetails = await client.getUserByUsername({ username: username })
    console.log("User Block Status: " + userDetails.blocked_by_viewer)
    let userid = userDetails.id
    /**unblock user if blocked */
    if (userDetails.blocked_by_viewer) {
        await client.unblock({ userId: userid })
        const userDetails = await client.getUserByUsername({ username: username })
        console.log("User Block Status: " + userDetails.blocked_by_viewer)
    }

    /**Get stories */
    const storyItems = await client.getStoryItemsByUsername({
        username: username
    })
    //console.log(storyItems);
    let stories = [];
    storyItems.forEach(element => {
        //console.log(element.display_url);
        //console.log("///////////////");
        stories = stories.concat(element.display_url)

    });

    /* block the user */
    await client.block({ userId: userDetails.id })
    //const userDetails2 = await client.getUserByUsername({ username: username })
    //  console.log("User Block Status: "+ userDetails2.blocked_by_viewer )
    //console.log(stories)
   // await client.logout();
   console.log("process ended")
    res.send(stories);

}

module.exports = { searchUser };

