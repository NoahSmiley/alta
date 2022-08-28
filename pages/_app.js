import {Provider as StyletronProvider} from 'styletron-react'
import {styletron} from '../styletron'
import React, {Component} from "react";
import Dark from "./Dark.png"
// 1. Create a client engine instance

import {Div, StyleReset, ThemeProvider, Text, Button, Row, Col} from "atomize";
import Image from "next/image";
import Navbar from "../Components/Navbar"
import Alta from "./Alta.png"

const theme = {
    colors: {
        black900: "#1d1d1e"
    },
    fontFamily: {
        primary:
            '"SF Pro Text", -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
        secondary: "SF Pro Display",
        code: "monospace"
    },
};

export default function App({Component, pageProps}) {
    return (
        <StyletronProvider value={styletron}>
            <ThemeProvider theme={theme}>
                <StyleReset/>
                <Div
                    textColor="#000000"
                    minH="100vh"
                    w="100vw"
                    d="flex"
                    flexDir="column"

                >

                    <Navbar/>
                    <Div p={{x: "1rem", y: "3rem"}}>

                        <Text textColor="#000000"
                              align="center"
                              textSize="48px"
                              textAlign="center"
                              fontFamily="primary"
                              textWeight="500"
                        >
                            Digital Assets - Made Easy.
                        </Text>

                    </Div>

                    <Div justify="center" align="center" textAlign="center">

                        <Text style={{lineHeight: "30px", align: "center"}} textColor="#505256" fontFamily="secondary"
                              textWeight="400" textSize="17px">
                            Alta - is a
                            Digital Real-Estate Market,

                            specializing in<br/>
                            Digital Assets including NFTs, Real-estate, and much more.
                        </Text>

                        <Div p={{x: "1rem", y: "4rem"}}>
                            <Image src={Alta} objectFit="contain" height={400}/>
                        </Div>
                        <Div justify="center" align="center" textAlign="center" d="flex">
                            <Button
                                h="2.5rem"
                                textSize="body"
                                textColor="white"
                                hoverTextColor="white"
                                bg="#06ccfe"
                                hoverBg="#06ccfe"
                                m={{ r: "0.5rem" }}
                                hoverBorderColor="info900"
                            >
                                Get Started
                            </Button>
                            <Button
                                h="2.5rem"

                                textSize="body"
                                textColor="#505256"
                                hoverTextColor="info900"
                                bg="white"
                                border="1px solid"
                                borderColor="grey"
                                hoverBg="info200"
                                m={{ r: "0.5rem" }}
                                hoverBorderColor="info900"
                            >
                                Login
                            </Button>
                        </Div>
                    </Div>
                </Div>
            </ThemeProvider>
            <Component {...pageProps} />
        </StyletronProvider>
    )
}
