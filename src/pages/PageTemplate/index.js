import Header from '../../components/Header/Container';

function PageTemplate(props) {
    return(
        <>
            <Header />
            {props.children}
        </>
    )
}

export default PageTemplate;