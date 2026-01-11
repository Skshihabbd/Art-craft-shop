import { Helmet } from "react-helmet-async";

const PageTitle = (props) => {
    return (
        <div>
             <Helmet>
        <title>{props.title}</title>
        </Helmet>
        </div>
    );
};

export default PageTitle;