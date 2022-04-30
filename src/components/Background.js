import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'

export default function Background() {
    return (
        <div style={{ display: "flex", flexDirection: "row" }}>
            <div>
                <Card style={{ width: "1300px", minHeight: "428px", marginBottom: "50px", backgroundColor: "#DEEED6" }} className="text-black">
                    <div style={{ top: "auto", width: "578px", marginLeft: "100px", marginBottom: "50px", marginTop: "75px"}}>
                        <Card.Text style={{ fontSize: "2.5em", fontWeight: "bold" }}>
                            Order groceries for delivery <br /> or pickup today
                    </Card.Text>

                    <Card.Text style={{ fontSize: ".5em" }}>
                            Give us your money!
                    </Card.Text>

                        <Card.Text style={{ fontSize: "1em" }}>
                            Whatever you want from local stores, brought right to your door.
                    </Card.Text>

                    <Card.Text style={{ fontSize: ".5em" }}>
                            $50s and $100s unmarked bills only, also no refunds!
                    </Card.Text>

                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Control size="lg" type="text" placeholder="   Enter your address                                         ->" />
                            </Form.Group>
                        </Form>

                        <Card.Text style={{ fontSize: "1em" }}>
                            Freshness of the food is not guaranteed. <br/> Sorry Not Sorry! 
                    </Card.Text>

                    </div>
                </Card>
            </div>
            <div >
                <img style={{ height: "428px", width: "20%", position: "absolute", backgroundSize: "contain", backgroundRepeat: "no-repeat" }} src="https://d2d8wwwkmhfcva.cloudfront.net/1500x1520/d2guulkeunn7d8.cloudfront.net/assets/homepage/homepage-mobile-background-m3-high-res-ca3279087ea0a3337f671b694b196d43fd207443d5825e61295b0996974835e9.jpg" alt="veggie background" />
            </div>
            </div>
    )
}