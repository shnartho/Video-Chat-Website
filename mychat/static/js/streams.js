const APP_ID = '3714952ee8ba4a57aae58e275e1dd79e'
const CHANNEL = 'main'
const TOKEN = '007eJxTYKjWyvvLmCW38sXS74xxe66Jn5q5UfidVLpRrkB09faPM30VGIzNDU0sTY1SUy2SEk0STc0TE1NNLVKNzE1TDVNSzC1ThXSNkqfUGSf/2PmKgREKQXwWhtzEzDwGBgBZkCEj'
let UID;
const client = AgoraRTC.createClient({mode: 'rtc', codec:'vp8'})

let localTracks = []
let remoteUsers = {}

let joinAndDisplayLocalStream = async () => {
    UID = await client.join(APP_ID, CHANNEL, TOKEN, null)
    localTracks = await AgoraRTC.createMicrophoneAndCameraTracks()
    let player = '<div class="video-container" id="user-container-${UID}"><div class="username-wrapper"><span class="user-name">My Name</span></div><div class="video-player" id="user-${UID}"></div></div>'
    document.getElementById('video-streams').insertAdjacentHTML('beforeend', player)

    localTracks[1].play('user-${UID}')

    await client.publish([localTracks[0], localTracks[1]])

}

joinAndDisplayLocalStream()