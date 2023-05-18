import './Faq.css';

function Faq() {
    return(
        <>
            <section id="faq">
                <div className="container">
                    <div className="row mb-5">
                        <div className="col">
                            <h2 className="section-title text-center">Faq</h2>
                            <p className="description fw-bold text-center">You Have Qusetions, We Have Answers</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6 align-self-start"><div className="question"><p><span className="fw-bold">Q:</span> What are Satoshi Airlines?</p></div></div>
                        <div className="col-md-6 offset-md-6 align-self-end"><div className="answer"><p><span className="fw-bold">A:</span> Satoshi Airlines are  a web3 travel lifstyle app that rewards userd for flying airlines..</p></div></div>
                    </div>

                    <div className="row">
                        <div className="col-md-6 align-self-start"><div className="question"><p><span className="fw-bold">Q:</span> Is there a Discord?</p></div></div>
                        <div className="col-md-6 offset-md-6 align-self-end"><div className="answer"><p><span className="fw-bold">A:</span> The official Satoshi Ailines Discord is <a href="https://discord.gg/7pVTcHYHn7" target="_blank" rel="noreferrer" >here</a>. We will NEVER message you first. We will NEVER ask for your password or seed phrase. We will NEVER request you to scan a QR code. <br /> We will NEVER invite you to join a group chat or server that isn't linked to our website. We will NEVER have an unannounced pre-mint or mint. Every DM you receive is 99.9% a scam. DON’T TRUST. VERIFY.</p></div></div>
                    </div>

                    <div className="row">
                        <div className="col-md-6 align-self-start"><div className="question"><p><span className="fw-bold">Q:</span> How to get OG role or get  whitelisted?</p></div></div>
                        <div className="col-md-6 offset-md-6 align-self-end"><div className="answer"><p><span className="fw-bold">A:</span> OG MISSION is in progress on Discord</p></div></div>
                    </div>

                    <div className="row">
                        <div className="col-md-6 align-self-start"><div className="question"><p><span className="fw-bold">Q:</span> How can we do minting?</p></div></div>
                        <div className="col-md-6 offset-md-6 align-self-end"><div className="answer"><p><span className="fw-bold">A:</span> It supports Arbitrum on its own on its website so that you can mint it.</p></div></div>
                    </div>

                    <div className="row">
                        <div className="col-md-6 align-self-start"><div className="question"><p><span className="fw-bold">Q:</span> When is mint?</p></div></div>
                        <div className="col-md-6 offset-md-6 align-self-end"><div className="answer"><p><span className="fw-bold">A:</span> We will notice in discord officially.</p></div></div>
                    </div>

                    <div className="row">
                        <div className="col-md-6 align-self-start"><div className="question"><p><span className="fw-bold">Q:</span> How many NFT's will be minted?</p></div></div>
                        <div className="col-md-6 offset-md-6 align-self-end"><div className="answer"><p><span className="fw-bold">A:</span> 3,333 common cards will be minted.</p></div></div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Faq;