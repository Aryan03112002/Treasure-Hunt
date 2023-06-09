import { Helmet, HelmetProvider } from 'react-helmet-async';

const MetaComponent = ({ title="Treasure-Hunt", description="Soft Skill Test" }) => {
    return (
        <HelmetProvider>
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
        </Helmet>
        </HelmetProvider>
    ); 
}

export default MetaComponent;