// Const
let proxy_address = 'https://qsp-9bf3216ba15c.herokuapp.com/'
let website_base = 'https://qsweb-c37752f0ec35.herokuapp.com'

// Functions
async function socials_updateData() {
    let group_data = await new Promise((resolve) => {
        fetch(proxy_address + 'https://groups.roblox.com/v1/groups/9145179')
        .then(response => {
            resolve(response.json());
        })
    })
    if (group_data) {
        document.getElementById('social-counter-roblox').innerHTML = group_data.memberCount + " members";
    }
}

socials_updateData()