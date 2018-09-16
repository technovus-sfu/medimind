import React from 'react';
import ReactDOM from 'react-dom';

import Message from './Message.js';

class Chatroom extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            chats: [{
                username: <p>Moderator"</p>,
                content: <p>Welcome to The Vancouver First Responders chat! I'm your automated moderator.</p>,
                img: "https://00e9e64bac4984067b80176c4ea6e0544daafefa279c642bda-apidata.googleusercontent.com/download/storage/v1/b/medimind/o/Lumohacks%2FModeratorLogo.png?qk=AD5uMEt3RvtIrv7zVMKDkIxxr8WVCf0IR6Bin4ffgCUgrpU6cB4Lfmpi0zfgJRWmfX3wBQVPzUa2u_EMoSekcUjBCluxAudj5RT3fiZShrne1MgNLg3wo9D13cm97A_jmboIXLperTh1zMZTcdOWcQcUu0oQ9tUMajLit9akcjbd2XI9C_NfdY4cnnNcGBVMZd9FHb8ulJcx56PgR5gkw8vtNSEg8T2LfcVnuu-f18xGYHJMquP3YEa-AgjdfnOrGu_odmsNNVp0X8lZKE2jtjXH9e7sK-o2DH-_wEIt03S2UoTN2pk0PYQNKgJ2ac876EayK5F5GuBcNQjoxWXm6Bmd_IK_XIPIrUmiJpjMjl0zoMmN6Zz2qwTQJ2HMM8Q97kNdZ2l7mr5ypBxIq6EAvE1RLX8NlQpOl1YZ2OvPWyfrzcxaFfKU8T6Uik9enzAyJWATTP1PazjTjkyhnpRPCI_2vUFKrdwqdMEM0F4MEuX3U1bEH54NoEk-nMq6nTRQCB1fzsgBSl2nsOY_Ub1PuY38i3Fxm2UV5BjSxBYbfz2qDcmJQwSEY6U_CK1Ql-eJP0APAXGZYhMaxXKGzndYWoZhmoytloNN8r07KRqXL_R0Edc2WXHug3btuBzdVyu0StyGhNT4femTNVCWDo-4Ner2j6Cqq1fq18DVM2OoK2y2usaKdcXoG9TYqGbQkbovav5BQzZJxYnym4qkFOJpAFs9T8nXwd1czMiZWE4afmyqfz0pFiTRbCZyEpyK7ubgh1uCk0xqiXSunpqp5zKI1R22reCPVaOUbw",
            }, {
                username: "Kevin Hsu",
                content: <p>Hey all, I'm a paramedic, nice to meet all of you!</p>,
                img: "http://i.imgur.com/Tj5DGiO.jpg",
            }, {
                username: "KevHs",
                content: <p>Hi! I'm also a paramedic, I'm always down to talk about work if you need someone</p>,
                img: "https://00e9e64baca58d58eb10f4f441ab1f06eff6542c19c063fd3e-apidata.googleusercontent.com/download/storage/v1/b/medimind/o/Lumohacks%2Fparamedic-2.jpg?qk=AD5uMEt-StjMBX2MHIeLCn035fm0jUBuMa4r9ApQ8NVg7rpWGkUTVbSc-fKmTBrXQuhdNWc3IPpFnOUQvUZTpoJIYtXibsz7avYQmJWLncXw8geT7UH9XY6SfLPJHHlURzcTESuaA2CdyObaI47lAa41ZlHvBNlKFLDEJ_CvWL3i9q08PBB5eTellum7vqyoXgGDDIFuZ_kPM0QMwIrAZJ-t5j-f27GaYgsNG6573zpmCG6HZv6_uKzv2CcyaTXtTdXKAYEB4tLOuvQ8zJdXNIo4iJuzFyZbX4pdAzlFmaAGLCPiJk_BVrIzBs65rdgVXXvbuVw7l_MNZwUE7IcMeBhkQj1z3PTGFTk4IkW6balRTiuj5c2kU61dqn-Pxya9BF2_kaoxS0WgKROmEnd4nKBq5bCFH2pESGOJfs1Uqb3ETGplvouaiv9Hb7uiTcIjsY6ccbhw97d-GzyGoDGp_4VdUZ65vIlr80GsMzYcAMAVy3SSD6PmuC574dzmKr7zsV9hn3qqtYKcVCahp1-UaQF5fZUPqW4yiQtYWqs71pUZM0wtCbs3rWIWsBARkPx1LCTDmiGIe7MfAOFZ8x3U8GWPzSdrpjLQ5tbC9CNMoiB2-7WIHKtdjijJYzCGkr5QDpRB9EMZtpZ56YHIoICh8N0HL4rZml9w6ypcC3nCQe4X0YyYdnmGVzfcjmIpqPgpy1T7eSjLZ9IPYpPVrc0wAbA3vgI10gXJWw723CAddm6fGnVNgL-1OU6Bk09snv0D7BCfFrGa-A58gwNnGaZjVG1jl5K9H7N2mA",
            }, {
                username: "Kevin Hsu",
                content: <p>Perfect :)</p>,
                img: "http://i.imgur.com/Tj5DGiO.jpg",
            }, {
                username: "Kevin Hsu",
                content: <p>I just had a crazy day today haha, seems like a good place to talk about it</p>,
                img: "https://i.imgur.com/P806V5p.png",
            }, {
                username: "Kevin Hsu",
                content: <p>Is it ok if I private message you?</p>,
                img: "http://i.imgur.com/Tj5DGiO.jpg",
            }, {
                username: "Alice Chen",
                content: <p>Of course! Sounds great!</p>,
                img: "https://00e9e64baca58d58eb10f4f441ab1f06eff6542c19c063fd3e-apidata.googleusercontent.com/download/storage/v1/b/medimind/o/Lumohacks%2Fparamedic-2.jpg?qk=AD5uMEt-StjMBX2MHIeLCn035fm0jUBuMa4r9ApQ8NVg7rpWGkUTVbSc-fKmTBrXQuhdNWc3IPpFnOUQvUZTpoJIYtXibsz7avYQmJWLncXw8geT7UH9XY6SfLPJHHlURzcTESuaA2CdyObaI47lAa41ZlHvBNlKFLDEJ_CvWL3i9q08PBB5eTellum7vqyoXgGDDIFuZ_kPM0QMwIrAZJ-t5j-f27GaYgsNG6573zpmCG6HZv6_uKzv2CcyaTXtTdXKAYEB4tLOuvQ8zJdXNIo4iJuzFyZbX4pdAzlFmaAGLCPiJk_BVrIzBs65rdgVXXvbuVw7l_MNZwUE7IcMeBhkQj1z3PTGFTk4IkW6balRTiuj5c2kU61dqn-Pxya9BF2_kaoxS0WgKROmEnd4nKBq5bCFH2pESGOJfs1Uqb3ETGplvouaiv9Hb7uiTcIjsY6ccbhw97d-GzyGoDGp_4VdUZ65vIlr80GsMzYcAMAVy3SSD6PmuC574dzmKr7zsV9hn3qqtYKcVCahp1-UaQF5fZUPqW4yiQtYWqs71pUZM0wtCbs3rWIWsBARkPx1LCTDmiGIe7MfAOFZ8x3U8GWPzSdrpjLQ5tbC9CNMoiB2-7WIHKtdjijJYzCGkr5QDpRB9EMZtpZ56YHIoICh8N0HL4rZml9w6ypcC3nCQe4X0YyYdnmGVzfcjmIpqPgpy1T7eSjLZ9IPYpPVrc0wAbA3vgI10gXJWw723CAddm6fGnVNgL-1OU6Bk09snv0D7BCfFrGa-A58gwNnGaZjVG1jl5K9H7N2mA",
            }]
        };

        this.submitMessage = this.submitMessage.bind(this);
    }

    componentDidMount() {
        this.scrollToBot();
    }

    componentDidUpdate() {
        this.scrollToBot();
    }

    scrollToBot() {
        ReactDOM.findDOMNode(this.refs.chats).scrollTop = ReactDOM.findDOMNode(this.refs.chats).scrollHeight;
    }

    submitMessage(e) {
        e.preventDefault();

        this.setState({
            chats: this.state.chats.concat([{
                username: "Kevin Hsu",
                content: <p>{ReactDOM.findDOMNode(this.refs.msg).value}</p>,
                img: "http://i.imgur.com/Tj5DGiO.jpg",
            }])
        }, () => {
            ReactDOM.findDOMNode(this.refs.msg).value = "";
        });
    }

    render() {
        const username = "Kevin Hsu";
        const { chats } = this.state;

        return (
            <div className="chatroom">
                <h3>Vancouver First Responders</h3>
                <ul className="chats" ref="chats">
                    {
                        chats.map((chat) => 
                            <Message chat={chat} user={username} />
                        )
                    }
                </ul>
                <form className="input" onSubmit={(e) => this.submitMessage(e)}>
                    <input type="text" ref="msg" />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default Chatroom;