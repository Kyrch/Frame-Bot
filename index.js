const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path
const ffmpeg = require('fluent-ffmpeg')
ffmpeg.setFfmpegPath(ffmpegPath)

const extractFrames = require('ffmpeg-extract-frames')

async function download() {

    let n = 1
    for (let f = 1; f < 10 ** 1000; f += 1) {
        
        await extractFrames({
            input: 'media/nijigasakis2e1.mp4',
            output: `./nijigasaki/frame-${f == 1 ? 1 : n + 10}.png`,
            offsets: [
                f * 1000 / 2.4
            ],
            fps: 24
        })
        if (f != 1) n += 10
    }
}

download()