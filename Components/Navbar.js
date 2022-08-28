import {Button, Col, Div, Row, Anchor} from "atomize";
import Image from "next/image";
import Dark from "../pages/Dark.png";

const Navbar = () => {
    return (
        <Div p={{md: '1rem'}}>
            <Row>
                <Col size="2"/>
                <Col size="3">
                    <Div p=".25rem">
                        <Image src={Dark} objectFit="contain" height={25}/>

                    </Div>
                </Col>
                <Col size="2">

                </Col>
                <Col size=".5"><Div p=".25rem">
                    <Anchor p=".5rem">
                        Hello
                    </Anchor>
                </Div>
                </Col>
                <Col size=".5"><Div p=".25rem">
                    <Anchor p=".5rem">
                        Hello
                    </Anchor>
                </Div>
                </Col>
                <Col size=".5">
                    <Div p=".25rem">
                        <Anchor p=".5rem">
                            Hello
                        </Anchor></Div>
                </Col>

                <Col size=".5">
                    <Div>
                        <Button
                            h="2rem"
                            p={{x: "0.75rem"}}
                            textSize="caption"
                            textColor="#06ccfe"
                            hoverTextColor="info900"
                            bg="white"
                            hoverBg="info200"
                            border="1px solid"
                            borderColor="#06ccfe"
                            hoverBorderColor="info900"
                            m={{r: "0.5rem"}}
                        >
                            Docs
                        </Button>
                    </Div>
                </Col>
            </Row>
        </Div>
    )
}
export default Navbar;