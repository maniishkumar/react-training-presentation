import React from "react";

import {
    Appear,
    BlockQuote,
    Cite,
    Code,
    CodePane,
    ComponentPlayground,
    Deck,
    Fit,
    Fill,
    Heading,
    Image,
    Layout,
    Link,
    ListItem,
    List,
    Markdown,
    Quote,
    Slide,
    Spectacle,
    Text
} from "spectacle";


import propsExample from "raw-loader!./examples/PropsExample";


export default (
    <Slide bgColor="primary" align="center top" maxWidth="1400px" margin={20}>
        <Heading textColor="black" size={4}>
            Passing Data as Props
        </Heading>

        <br />

        <ComponentPlayground
            theme="dark"
            code={propsExample}
        />


    </Slide>
);