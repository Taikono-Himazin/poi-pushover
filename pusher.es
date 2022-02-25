const { toast, getStore } = window

class Pusher {
    /**
     * event ハンドラ
     * @param event 
     */
    handler = (event) => {
        const { path, body, postBody } = event.detail
        this.notice('\npath' + path + '\nbody' + body)
        this.currentRes = { path, body }

        switch (path) {
            default:
                logger.log('default, path: ', path)
                break
        }
    }

    /**
     * 実際に通知を送信
     * @param {string} message メッセージ
     */
    notice = (message) => {
        // TODO: pushoverを利用する
        toast(message);
        return;
    }
}

export default new Pusher()