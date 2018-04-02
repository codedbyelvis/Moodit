
//experiments with styled components








const mood_styles = css `
    color: white;
    border-radius: 50%;
    background-color: ${props => (
        switch(props.mood){
            case 'angry':
            return background-color: red;
            case 'happy':
            return background-color: yellow;


        }
    )};
`

render(
    <Button styles={styles}>
    Customized Button
    </Button>
)

//In this example, the props being passed are objects, which are deconstructed and then are used to define the styles and teh children of the components getting rendered.
const myCounter = {
    Wrapper: css`
    background: gray;
    border: 1px solid darkgray;
    `,
    Count: css`
    color: red;
    text-decoration: underline;
    `
};

const Counter = ({ children, styles }) => (
    <Wrapper styles={styles.Wrapper}>
        <Count styles={styles.Count}>
        {children}
        </Count>
    </Wrapper>
);

render(
    <Counter styles={myCounter}>
    4815162342
    </Counter>
)