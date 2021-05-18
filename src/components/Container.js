import React from "react"
import {ContainerWrapper, FooterWrapper} from "../elements"
import {Nav, Footer} from "../components"

export const Container = ({children}) => {
    return (
        <ContainerWrapper>
            <Nav />
            {children}
            <Footer />
        </ContainerWrapper>
    )
}