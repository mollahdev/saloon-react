import { useParams } from "react-router-dom";
import { useEffect } from "react";

const ServiceDetails: React.FC = () => {
    const params = useParams();
    const { id } = params;

    useEffect(() => {
        console.log(id)
    }, [])

    return (
        <div>
            service details
        </div>
    )
}

export default ServiceDetails;